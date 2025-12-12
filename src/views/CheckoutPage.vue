<script setup>
import { ref, computed } from "vue";
import { NSpin } from "naive-ui";
import { useCartStore } from "@/stores/cartStore";
import { useAuthStore } from "@/stores/authStore";

import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import router from "@/router";

const auth = useAuthStore();
const cart = useCartStore();
// const VITE_PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "";

const form = ref({
  name: "",
  email: auth.user?.email ?? "",
  phone: "",
  address: "",
  city: "",
  postal: "",
  country: "",
});

const isProcessing = ref(false);
const formError = ref("");
const info = ref("");

const items = computed(() => cart.items);
const totalItems = computed(() => cart.totalItems);
const subtotal = computed(() => cart.totalPrice);

// function formatCurrency(n) {
//   if (typeof n !== "number") n = Number(n) || 0;
//   return "₦" + n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

function increaseQty(item) {
  cart.updateQuantity(item.key, item.quantity + 1);
}

function decreaseQty(item) {
  cart.updateQuantity(item.key, item.quantity - 1);
}

function removeItem(item) {
  cart.removeFromCart(item.key);
}

function itemSubtotal(item) {
  return (Number(item.price) || 0) * (Number(item.quantity) || 0);
}

const shippingText = computed(() => {
  if (!items.value || items.value.length === 0) return "-";
  return "₦1,500";
});

const shippingAmount = computed(() => {
  if (!items.value || items.value.length === 0) return "-";
  return 1500;
});

const grandTotal = computed(() => {
  if (!items.value || items.value.length === 0) return 0;
  return (subtotal.value || 0) + shippingAmount.value;
});

const isCartEmpty = computed(() => !items.value || items.value.length === 0);

function loadPaystackScript() {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) return resolve(window.PaystackPop);
    const s = document.createElement("script");
    s.src = "https://js.paystack.co/v1/inline.js";
    s.async = true;
    s.onload = () => {
      if (window.PaystackPop) resolve(window.PaystackPop);
      else reject(new Error("Paystack failed to load"));
    };
    s.onerror = () => reject(new Error("Paystack script failed to load"));
    document.head.appendChild(s);
  });
}

function buildOrderObject(reference) {
  const savedItems = (cart.items || []).map((item) => ({
    key: item.key,
    id: item.id ?? null,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    size: item.size ?? null,
    color: item.color ?? null,
    subtotal: (Number(item.price) || 0) * (Number(item.quantity) || 0),
    image: item.image ?? null,
  }));

  return {
    reference,
    amount: Number(grandTotal.value || 0),
    subtotal: Number(subtotal.value || 0),
    shipping: Number(shippingAmount.value || 0),
    totalItems: Number(totalItems.value || 0),
    items: savedItems,
    customer: {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      address: form.value.address,
      city: form.value.city,
      postal: form.value.postal,
      country: form.value.country,
    },
    createAt: new Date().toISOString(),
  };
}

function generateReference() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);
  return `ref-${timestamp}-${randomNum}`;
}

function saveOrderToLocalOrder(order) {
  try {
    const raw = localStorage.getItem("orders");
    const array = raw ? JSON.parse(raw) : [];
    array.unshift(order);
    localStorage.setItem("orders", JSON.stringify(array));
  } catch (err) {
    console.warn("Saving order failed:", err);
  }
}

async function onPay() {
  formError.value = "";
  info.value = "";

  if (isCartEmpty.value) {
    formError.value = "Your cart is empty.";
    return;
  }

  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.phone ||
    !form.value.address ||
    !form.value.city ||
    !form.value.country
  ) {
    formError.value = "Please fill in all required fields.";
    return;
  }

  const amountNaira = Number(grandTotal.value || 0);
  if (!amountNaira || amountNaira <= 0) {
    formError.value = "Invalid order amount.";
    return;
  }

  isProcessing.value = true;

  try {
    await loadPaystackScript();

    const refBefore = generateReference();

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: form.value.email,
      amount: Math.round(amountNaira * 100),
      ref: generateReference(),
      metadata: {
        custom_fields: [
          { display_name: "Customer Name", variable_name: "customer_name", value: form.value.name },
          { display_name: "Items", variable_name: "items", value: String(totalItems.value) },
        ],
      },
      onClose: function () {
        isProcessing.value = false;
        formError.value = "Payment window closed before completing payment.";
      },
      callback: function (response) {
        const reference = response?.reference || refBefore;
        const lastorder = buildOrderObject(reference);

        saveOrderToLocalOrder(lastorder);

        try {
          cart.clearCart();
        } catch (error) {
          console.warn("Failed to clear cart:", error);
        }

        info.value = `Payment successful! Reference: ${reference}. Thank you!`;
        isProcessing.value = false;

        try {
          router.replace({ name: "PaymentSuccess", query: { ref: reference } }).catch((error) => {
            console.warn("router replace failed:", error);
            window.location.href = `/payment-success?ref=${encodeURIComponent(reference)}`;
          });
        } catch (error) {
          console.warn("router call failed:", error);
          window.location.href = `/payment-success?ref=${encodeURIComponent(reference)}`;
        }
      },
    });

    handler.openIframe();
  } catch (err) {
    console.error("Paystack error:", err);
    formError.value = err?.message || "Payment failed to initialize.";
    isProcessing.value = false;
  }
}
</script>

<template>
  <header>
    <SignupBonus />
  </header>

  <section>
    <NavBar />
  </section>

  <main class="checkout-root max-w-4xl mx-auto p-6">
    <nav class="breadcrumb mb-4 text-sm text-gray-600" aria-label="Breadcrumb">
      <ol class="flex items-center gap-2">
        <li>
          <router-link to="/" class="breadcrumb-link hover:underline">Home</router-link>
        </li>

        <li aria-hidden="true" class="mx-1">›</li>

        <li>
          <router-link to="/cart" class="breadcrumb-link hover:underline">Cart</router-link>
        </li>

        <li aria-hidden="true" class="mx-1">›</li>

        <li aria-current="page" class="text-gray-800 font-medium">Checkout</li>
      </ol>
    </nav>

    <div class="mb-4">
      <h1 class="text-2xl font-bold">Checkout</h1>
      <p v-if="isCartEmpty" class="text-sm text-gray-600">Your cart is empty.</p>
    </div>

    <!-- Left: form -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section class="bg-white p-4 rounded-md shadow">
        <div class="mb-3">
          <h2 class="font-semibold">Shipping & Contact Information</h2>
          <div class="text-xs text-gray-500">You have {{ totalItems }} item(s) in your cart.</div>
        </div>

        <form @submit.prevent="onPay">
          <div class="mb-3">
            <label class="block text-sm mb-1" for="name">Full Name</label>
            <input v-model="form.name" type="text" required class="w-full border p-2 rounded" />
          </div>

          <div class="mb-3">
            <label class="block text-sm mb-1" for="email">Email Address</label>
            <input v-model="form.email" type="email" required class="w-full border p-2 rounded" />
          </div>

          <div class="mb-3">
            <label class="block text-sm mb-1" for="phone">Phone Number</label>
            <input v-model="form.phone" type="tel" required class="w-full border p-2 rounded" />
          </div>

          <div class="mb-3">
            <label class="block text-sm mb-1" for="address">Shipping Address</label>
            <input v-model="form.address" type="text" required class="w-full border p-2 rounded" />
          </div>

          <div class="grid grid-cols-2 gap-2 mb-3">
            <div>
              <label class="block text-sm mb-1">City</label>
              <input v-model="form.city" required type="text" class="w-full border p-2 rounded" />
            </div>

            <div>
              <label class="block text-sm mb-1">Postal code</label>
              <input v-model="form.postal" type="text" class="w-full border p-2 rounded" />
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-sm mb-1" for="country">Country</label>
            <input v-model="form.country" type="text" required class="w-full border p-2 rounded" />
          </div>

          <div class="flex gap-2 items-center">
            <button
              :disabled="isProcessing || isCartEmpty"
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded flex items-center"
            >
              <template v-if="isProcessing">
                <NSpin size="small" class="mr-2" /> Processing...
              </template>
              <template v-else>Pay Now</template>
            </button>

            <!-- <button type="button" class="px-3 py-2 border rounded" :disabled="isProcessing">
              Save & continue as guest
            </button> -->
          </div>

          <p v-if="formError" class="text-sm text-red-600 mt-3">{{ formError }}</p>
          <p v-if="info" class="text-sm text-green-700 mt-3">{{ info }}</p>
        </form>
      </section>

      <!-- Right: summary -->
      <aside class="bg-white p-4 rounded-md shadow">
        <div class="mb-3">
          <h2 class="font-semibold">Order Summary</h2>
        </div>

        <ul class="space-y-3">
          <li v-for="item in items" :key="item.key" class="flex items-center gap-3">
            <img :src="item.image" alt="item image" class="w-14 h-14 object-cover rounded" />
            <div class="flex-1">
              <div class="font-medium">{{ item.name }}</div>
              <div class="text-xs text-gray-600">
                <span v-if="item.size">Size: {{ item.size }}</span>
                <span v-if="item.color"> • Color: {{ item.color }}</span>
              </div>

              <div class="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  class="px-2 py-1 border rounded"
                  @click="decreaseQty(item)"
                  :disabled="item.quantity <= 1"
                >
                  -
                </button>
                <div class="px-2">{{ item.quantity }}</div>
                <button type="button" class="px-2 py-1 border rounded" @click="increaseQty(item)">
                  +
                </button>

                <button
                  type="button"
                  class="px-2 py-1 rounded bg-red-600 text-white"
                  @click="removeItem(item)"
                >
                  Remove
                </button>
              </div>
            </div>

            <div class="font-semibold">₦{{ itemSubtotal(item) }}</div>
          </li>

          <li v-if="items.length === 0" class="text-sm text-gray-600">Your cart is empty</li>
        </ul>

        <div class="border-t pt-3 space-y-2 mt-4">
          <div class="flex justify-between text-sm mb-1">
            <span>Subtotal</span>
            <span>₦{{ subtotal }}</span>
          </div>

          <div class="flex justify-between text-sm mb-1">
            <span>Shipping</span>
            <span>{{ shippingText }}</span>
          </div>

          <div class="flex justify-between text-sm">
            <span>Total</span>
            <span>₦{{ grandTotal }}</span>
          </div>
        </div>

        <div class="mt-4 text-xs text-gray-500">Payment is handled via Paystack (demo).</div>
      </aside>
    </div>
  </main>
</template>

<style scoped>
.breadcrumb ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-link {
  color: inherit;
  text-decoration: none;
}

.breadcrumb ol li + li::before {
  content: "";
}

@media (max-width: 420px) {
  .breadcrumb ol {
    flex-wrap: wrap;
  }
}
</style>
