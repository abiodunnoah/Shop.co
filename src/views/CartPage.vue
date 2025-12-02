<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cartStore";
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";

// demo images
import img1 from "@/assets/images/cloth 1.png";
import img2 from "@/assets/images/cloth 2.png";
import img3 from "@/assets/images/cloth 3.png";

const router = useRouter();
const cart = useCartStore();

// Promo state
const promoCode = ref("");
const appliedPromo = ref(null);
const deliveryFee = 15;

const subtotal = computed(() =>
  cart.items.reduce((sum, i) => sum + (Number(i.price) || 0) * (i.quantity || 0), 0)
);

const discountAmount = computed(() => {
  if (!appliedPromo.value) return 0;
  return Math.round(subtotal.value * (appliedPromo.value.percent || 0));
});

const total = computed(() => {
  return Math.max(0, subtotal.value - discountAmount.value + deliveryFee);
});

function fmtCurrency(v) {
  return `₦${Number(v).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

function increaseQty(item) {
  if (typeof cart.updateQuantity === "function") {
    cart.updateQuantity(item.key ?? item.id, (item.quantity || 0) + 1);
    return;
  }
  item.quantity = (item.quantity || 0) + 1;
}

function decreaseQty(item) {
  const newQty = (item.quantity || 0) - 1;
  if (newQty === 1) {
    item.quantity;
  }

  if (typeof cart.updateQuantity === "function") {
    cart.updateQuantity(item.key ?? item.id, newQty);
    return;
  }
  item.quantity = newQty;
}

function removeItem(item) {
  if (typeof cart.removeFromCart === "function") {
    cart.removeFromCart(item.key ?? item.id);
    return;
  }
  cart.items = cart.items.filter((i) => (i.key ?? i.id) !== (item.key ?? item.id));
}

function applyPromo() {
  const code = (promoCode.value || "").trim().toUpperCase();
  if (!code) return alert("Enter a promo code.");

  if (code === "SAVE20") {
    appliedPromo.value = { code: "SAVE20", percent: 0.2 };
    return;
  }
  if (code === "TAKE10") {
    appliedPromo.value = { code: "TAKE10", percent: 0.1 };
    return;
  } else {
    alert("Promo code not valid.");
  }
}

function clearPromo() {
  appliedPromo.value = null;
  promoCode.value = "";
}

function goToCheckout() {
  router.push({ name: "CheckoutPage" });
}

function continueShopping() {
  router.push({ name: "CategoryPage", params: { category: "casual" } });
}

const showDemoButton = false;

function seedDemoCart() {
  const demoProducts = [
    {
      id: "p-101",
      name: "Gradient Graphic T-shirt",
      price: 145,
      image: img1,
    },
    {
      id: "p-102",
      name: "Checkered Shirt",
      price: 180,
      image: img2,
    },
    {
      id: "p-103",
      name: "Skinny Fit Jeans",
      price: 240,
      image: img3,
    },
  ];

  if (typeof cart.addToCart === "function") {
    if (typeof cart.clearCart === "function") cart.clearCart();

    cart.addToCart(demoProducts[0], { size: "Large", color: "White", quantity: 1 });
    cart.addToCart(demoProducts[1], { size: "Medium", color: "Red", quantity: 1 });
    cart.addToCart(demoProducts[2], { size: "Large", color: "Blue", quantity: 1 });
    return;
  }

  cart.items = [
    {
      key: "p-101::Large::White",
      id: "p-101",
      name: demoProducts[0].name,
      price: 145,
      image: img1,
      size: "Large",
      color: "White",
      quantity: 1,
    },
    {
      key: "p-102::Medium::Red",
      id: "p-102",
      name: demoProducts[1].name,
      price: 180,
      image: img2,
      size: "Medium",
      color: "Red",
      quantity: 1,
    },
    {
      key: "p-103::Large::Blue",
      id: "p-103",
      name: demoProducts[2].name,
      price: 240,
      image: img3,
      size: "Large",
      color: "Blue",
      quantity: 1,
    },
  ];
}

// watchEffect(() => {
//   console.log("subtotal:", subtotal.value);
//   console.log("appliedPromo:", appliedPromo.value);
//   console.log("discountAmount:", discountAmount.value);
// });
</script>

<template>
  <header>
    <SignupBonus />
  </header>

  <section>
    <NavBar />
  </section>

  <main class="cart-page">
    <nav class="crumbs">
      <router-link to="/">Home</router-link>
      <span class="sep">›</span>
      <router-link to="/cart">Cart</router-link>
    </nav>

    <div class="top-row">
      <h1 class="page-title">YOUR CART</h1>

      <div v-if="showDemoButton" class="demo-actions">
        <button class="demo-btn" @click="seedDemoCart">Populate demo cart</button>
      </div>
    </div>

    <div v-if="cart.items.length === 0" class="empty">
      <p class="empty-text">Your cart is empty.</p>
      <button class="btn-continue" @click="continueShopping">Continue Shopping</button>
    </div>

    <div v-else class="cart-grid">
      <!-- Left: cart items -->
      <section class="cart-items">
        <div v-for="item in cart.items" :key="item.key ?? item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="thumb" />

          <div class="item-body">
            <div class="title-row">
              <h3 class="item-name">{{ item.name }}</h3>
              <button class="remove-btn" @click="removeItem(item)" aria-label="Remove item">
                🗑
              </button>
            </div>

            <div class="meta">
              <span v-if="item.size"
                >Size: <strong>{{ item.size }}</strong></span
              >
              <span v-if="item.color" class="meta-sep"
                >Color: <strong>{{ item.color }}</strong></span
              >
            </div>

            <div class="price-qty">
              <div class="price">{{ fmtCurrency(item.price) }}</div>

              <div class="qty-controls" role="group" aria-label="Quantity">
                <button class="qty-btn" @click="decreaseQty(item)">−</button>
                <div class="qty">{{ item.quantity }}</div>
                <button class="qty-btn" @click="increaseQty(item)">+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Right: summary -->
      <aside class="order-summary" aria-labelledby="order-summary-heading">
        <div class="summary-card">
          <h2 id="order-summary-heading">Order Summary</h2>

          <dl class="summary-list">
            <div class="row">
              <dt>Subtotal</dt>
              <dd>{{ fmtCurrency(subtotal) }}</dd>
            </div>

            <div class="row">
              <dt>Discount</dt>
              <dd :class="{ negative: discountAmount > 0 }">
                <span v-if="discountAmount > 0">-{{ fmtCurrency(discountAmount) }}</span>
                <span v-else>-</span>
              </dd>
            </div>

            <div class="row">
              <dt>Delivery Fee</dt>
              <dd>{{ fmtCurrency(deliveryFee) }}</dd>
            </div>

            <div class="row total">
              <dt>Total</dt>
              <dd>{{ fmtCurrency(total) }}</dd>
            </div>
          </dl>

          <div class="promo">
            <input
              v-model="promoCode"
              type="text"
              placeholder="Add promo code"
              class="promo-input"
            />
            <div class="promo-actions">
              <button class="btn-apply" @click="applyPromo">Apply</button>
              <button v-if="appliedPromo" class="btn-clear" @click="clearPromo">Clear</button>
            </div>
            <small v-if="appliedPromo" class="applied-note">Applied: {{ appliedPromo.code }}</small>
          </div>

          <button class="btn-checkout" @click="goToCheckout">Go to Checkout →</button>
        </div>
      </aside>
    </div>
  </main>
</template>

<style scoped>
.cart-page {
  max-width: 1200px;
  margin: 2rem auto 6rem;
  padding: 0 1rem;
}
.crumbs {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}
.crumbs .sep {
  margin: 0 0.5rem;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-title {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 1.25rem;
}
.demo-actions {
  margin-left: 1rem;
}
.demo-btn {
  background: #111;
  color: #fff;
  border: none;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
}

/* empty state */
.empty {
  text-align: center;
  padding: 3rem 0;
}
.empty-text {
  font-size: 1.05rem;
  margin-bottom: 1rem;
}
.btn-continue {
  background: #111;
  color: #fff;
  border: none;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  cursor: pointer;
}

/* grid: left list + right summary */
.cart-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2rem;
  align-items: start;
}

/* left column - items */
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #eee;
  align-items: center;
  background: #fff;
}
.thumb {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 8px;
  background: #fafafa;
}

/* item body */
.item-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.item-name {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}
.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #d33;
  font-size: 1.1rem;
}

.meta {
  color: #666;
  font-size: 0.9rem;
}
.meta-sep {
  margin-left: 1rem;
}

.price-qty {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.price {
  font-size: 1.1rem;
  font-weight: 700;
}

/* quantity controls */
.qty-controls {
  display: inline-flex;
  align-items: center;
  background: #f3f3f3;
  border-radius: 999px;
  overflow: hidden;
}
.qty-btn {
  padding: 0.4rem 0.8rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.1rem;
}
.qty {
  min-width: 36px;
  text-align: center;
  font-weight: 700;
}

/* order summary (right) */
.order-summary .summary-card {
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #eee;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.summary-card h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.summary-list {
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.row.total {
  border-top: 1px solid #f0f0f0;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 800;
  font-size: 1.05rem;
}
.negative {
  color: #d64545;
}

.promo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.promo-input {
  padding: 0.6rem 0.8rem;
  border-radius: 999px;
  border: 1px solid #eee;
  width: 100%;
}
.promo-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.btn-apply {
  background: #111;
  color: #fff;
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
}
.btn-clear {
  background: transparent;
  border: none;
  color: #666;
  cursor: pointer;
}

/* checkout button */
.btn-checkout {
  margin-top: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.9rem 1rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 700;
}

/* responsive */
@media (max-width: 980px) {
  .cart-grid {
    grid-template-columns: 1fr 320px;
  }
}
@media (max-width: 720px) {
  .cart-grid {
    grid-template-columns: 1fr;
  }
  .order-summary {
    order: 2;
    margin-top: 1rem;
  }
}
</style>
