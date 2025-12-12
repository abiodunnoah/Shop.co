<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";

const route = useRoute();
const router = useRouter();

const reference = ref(route.query.ref || null);
const order = ref(null);
const ordersList = ref([]);

onMounted(() => {
  try {
    const raw = localStorage.getItem("orders");
    const parsed = raw ? JSON.parse(raw) : [];
    ordersList.value = Array.isArray(parsed) ? parsed : [];

    if (reference.value) {
      order.value = ordersList.value.find((o) => o.reference === reference.value) || null;
    }

    if (!order.value && ordersList.value.length > 0) {
      order.value = ordersList.value[0];
      reference.value = order.value.reference;
    }
  } catch (err) {
    console.warn("Failed to read orders from localStorage:", err);
    order.value = null;
  }
});

function clearSavedOrders() {
  localStorage.removeItem("orders");
  ordersList.value = [];
  order.value = null;
}

function goHome() {
  router.push({ name: "Home" }).catch(() => {});
}
</script>

<template>
  <header><SignupBonus /></header>
  <NavBar />

  <main class="max-w-4xl mx-auto p-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Payment success</h1>
      <p class="text-sm text-gray-600">Thank you for your purchase.</p>
    </div>

    <section class="bg-white p-4 rounded shadow mb-6">
      <div v-if="order">
        <div class="mb-3">
          <strong>Reference:</strong>
          <span class="ml-2">{{ order.reference }}</span>
        </div>

        <div v-if="order.createdAt" class="text-sm text-gray-500 mb-2">
          Placed: {{ new Date(order.createdAt).toLocaleString() }}
        </div>

        <div v-if="order.customer" class="mb-3">
          <h3 class="font-medium">Customer</h3>
          <div class="text-sm text-gray-700">
            {{ order.customer.name }} · {{ order.customer.email }} · {{ order.customer.phone }}
          </div>
          <div class="text-sm text-gray-600 mt-1">
            {{ order.customer.address }}, {{ order.customer.city }}, {{ order.customer.country }}
          </div>
        </div>

        <div v-if="order.items && order.items.length" class="mb-3">
          <h3 class="font-medium">Items ({{ order.totalItems }})</h3>
          <ul class="mt-2 space-y-2">
            <li v-for="it in order.items" :key="it.key" class="flex items-center gap-3">
              <img v-if="it.image" :src="it.image" alt="" class="w-12 h-12 object-cover rounded" />
              <div class="flex-1">
                <div class="font-medium">{{ it.name }}</div>
                <div class="text-xs text-gray-600">Qty: {{ it.quantity }} · ₦{{ it.price }}</div>
              </div>
              <div class="font-semibold">₦{{ it.subtotal }}</div>
            </li>
          </ul>
        </div>

        <div class="mt-3 border-t pt-3">
          <div class="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₦{{ order.subtotal }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span>Shipping</span>
            <span>₦{{ order.shipping }}</span>
          </div>
          <div class="flex justify-between text-sm font-bold">
            <span>Total</span>
            <span>₦{{ order.amount }}</span>
          </div>
        </div>

        <div class="flex gap-3 mt-4">
          <button @click="clearSavedOrders" class="px-4 py-2 border rounded text-sm">
            Clear saved orders
          </button>
          <button @click="goHome" class="px-4 py-2 bg-blue-600 text-white rounded text-sm">
            Continue shopping
          </button>
        </div>
      </div>

      <div v-else class="text-gray-600">
        No order details available. If you completed payment, check the transaction reference in
        your Paystack dashboard or try again.
      </div>
    </section>

    <!-- <div v-if="ordersList.length > 1" class="mb-6">
      <h3 class="font-medium mb-2">Recent orders</h3>
      <ul class="space-y-2">
        <li v-for="o in ordersList" :key="o.reference" class="flex items-center justify-between">
          <div>
            <div class="font-medium">{{ o.customer?.name || "Customer" }}</div>
            <div class="text-xs text-gray-600">
              Ref: {{ o.reference }} · ₦{{ o.amount }} ·
              {{ new Date(o.createdAt).toLocaleString() }}
            </div>
          </div>
          <router-link :to="{ name: 'PaymentSuccess', query: { ref: o.reference } }">{{
            "View"
          }}</router-link>
        </li>
      </ul>
    </div> -->

    <!-- <p class="text-xs text-gray-500">
      Tip: Use the reference above to look up the transaction in your Paystack dashboard.
    </p> -->
  </main>
</template>
