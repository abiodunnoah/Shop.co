<script setup>
import { useCartStore } from "@/stores/cartStore";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
// import FooterView from "@/components/FooterView.vue";

const cart = useCartStore();
const router = useRouter();

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
  return `$${Number(v).toLocaleString(undefined, { maximumFzractionDidits: 0 })}`;
}

function increaseQty(item) {
  const newQty = (item.quantity || 0) + 1;
  if (typeof cart.updateQuantity === "function") {
    cart.updateQuantity(item.key ?? item.id, newQty);
    return;
  }
  item.quantity = newQty;
}

function decreaseQty(item) {
  const newQty = (item.quantity || 0) - 1;
  if (newQty <= 0) {
    removeItem(item);
    return;
  }
  if (typeof cart.updateQuantity === "function") {
    cart.updateQuantity(item.key ?? item.id, newQty);
    return;
  }
  item.quantity = newQty;
}

function removeItem(item) {
  if (typeof cart.updateQuantity === "function") {
    cart.updateQuantity(item.key ?? item.id);
    return;
  }
  cart.items = cart.items.filter((i) => (i.key ?? i.id) !== (item.key ?? item.id));
}

function applyPromo() {
  const code = (promoCode.value || "").trim().toUpperCase();
  if (!code) return alert("Enter a promo code");

  if (code === "SAVE20") {
    appliedPromo.value = { code: "SAVE20", precent: 0.2 };
    return;
  }

  if (code === "TAKE10") {
    appliedPromo.value = { code: "TAKE10", percent: 0.1 };
    return;
  }
  alert("Promo code not valid.");
}

function goToCheckout() {
  router.push({ name: "Checkout" });
}

const continueShopping = () => {
  router.push({ name: "CategoryPage", params: { category: "casual" } });
};
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
      <span class="sep">›</span>
      <span class="current">Your Cart</span>
    </nav>
    <h1>YOUR CART</h1>

    <div v-if="cart.items.length === 0">
      <p>Your Cart Is Empty</p>
      <button class="btn-continue" @click="continueShopping">Continue Shopping</button>
    </div>

    <div v-else class="cart-grid">
      <section class="cart-items">
        <div v-for="item in cart.items" :key="item.key" class="cart-item">
          <img :src="item.image" :alt="item.name" class="thumb" />

          <div class="item-body">
            <div class="title-row">
              <h3 class="item-name">{{ item.name }}</h3>
              <button class="remove-btn">🗑</button>
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
              <div class="price">{{ fmtCurrent(item.price) }}</div>

              <div class="qty-controls" role="group" aria-label="Quantity">
                <button class="qty-btn">-</button>
                <div class="qty">{{ item.quantity }}</div>
                <button class="qty-btn">+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside>
        <div class="summary-list">
          <div class="row">
            <dt>Subtotal</dt>
            <dd>{{ fmtCurrency(subtotal) }}</dd>
          </div>

          <div class="row">
            <dt>Discount</dt>
            <dd></dd>
          </div>
        </div>
      </aside>
    </div>
  </main>
</template>
