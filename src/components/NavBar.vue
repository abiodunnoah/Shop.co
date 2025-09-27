<script setup>
import { useCartStore } from "@/stores/cartStore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SearchBar from "@/assets/icons/SearchIcon.png";
import cartIcon from "@/assets/icons/cart.png";
import Avatar from "@/assets/icons/avatar.svg";
import MenuIcon from "@/assets/icons/menu.png";

const cart = useCartStore();
const router = useRouter();
const searchInput = ref("");
const menuOpen = ref(false);
const searchOpen = ref(false);

const categories = [
  { label: "Shop", slug: "shop" },
  { label: "Casual", slug: "casual" },
  { label: "Formal", slug: "formal" },
  { label: "T‑shirts", slug: "t-shirts" },
  { label: "Jeans", slug: "jeans" },
  { label: "Formal", slug: "formal" },
  { label: "Sportswear", slug: "sportswear" },
  { label: "Accessories", slug: "accessories" },
];

const selectedCategory = ref("shop");

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function toggleSearch() {
  searchOpen.value = !searchOpen.value;
}

function goToCategory() {
  router.push({ name: "CategoryPage", params: { category: selectedCategory.value } });
}
</script>

<template>
  <nav class="nav">
    <div class="flex items-center flex-shrink-0">
      <button
        type="button"
        class="hamburger-btn mr-7 ml-0.5 z-30"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <img :src="MenuIcon" alt="Menu" class="w-6 h-6" />
      </button>
      <h1>SHOP.CO</h1>
    </div>

    <div class="links hidden md:flex">
      <div class="shop-select">
        <select v-model="selectedCategory" @change="goToCategory" class="px-1 py-1 cursor-pointer">
          <option v-for="category in categories" :key="category.slug" :value="category.slug">
            {{ category.label }}
          </option>
        </select>
      </div>
      <p>On Sales</p>
      <p>New Arrival</p>
      <p>Brands</p>
    </div>

    <!-- 3️⃣ Mobile dropdown -->
    <div
      v-if="menuOpen"
      class="mobile-links absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 px-3 w-40 z-20"
    >
      <p class="px-4 py-2 hover:bg-gray-100">Shop</p>
      <p class="px-4 py-2 hover:bg-gray-100">On Sales</p>
      <p class="px-4 py-2 hover:bg-gray-100">New Arrival</p>
      <p class="px-4 py-2 hover:bg-gray-100">Brands</p>
    </div>

    <!-- 4️⃣ Search + Cart + Avatar -->
    <div class="flex items-center gap-4">
      <div class="search relative">
        <button type="button" class="p-1 z-20" @click="toggleSearch">
          <img :src="SearchBar" alt="Search Icon" class="search__icon" />
        </button>
        <input
          v-model="searchInput"
          v-show="searchOpen"
          type="search"
          placeholder="Search for products..."
          class="search-input md:block focus:outline-none w-40 sm:w-52 md:w-48 lg:w-100 px-4 py-2 flex-shrink-0"
        />
      </div>
      <div class="cart">
        <router-link to="/cart" class="cart-link">
          <img :src="cartIcon" alt="Cart Icon" class="cart__icon" />
          <span v-if="cart.totalItems > 0" class="badge">{{ cart.totalItems }}</span>
        </router-link>
      </div>
      <img :src="Avatar" alt="User Avatar" class="avatar__icon" />
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 1rem;
  margin: 0 4rem;
  position: relative;
  flex-wrap: nowrap;
  border-bottom: 1px solid #ddd;
}

.cart {
  position: relative;
  cursor: pointer;
}

.badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
}

h1 {
  font-size: 22px;
  font-weight: 900;
  color: #000;
}

.links p {
  display: inline-block;
  margin-right: 1rem;
  font-size: 12px;
}
.shop-select {
  position: relative;
}

.shop-select select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.1rem 1rem 0.1rem 0.5rem;
}

.shop-select::after {
  content: "▼";
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.search {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  border-radius: 9999px;
  padding: 0 0.75rem;
}

.search__icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.mobile-links {
  z-index: 20;
  display: none;
}

/* === Mobile links dropdown === */
.mobile-links p {
  font-size: 12px;
  cursor: pointer;
}

.hamburger-btn {
  display: none;
}

@media (min-width: 768px) {
  .search-input[style] {
    /* v-show hides via inline style, so this overrides */
    display: block !important;
    position: static;
    transform: none;
    width: auto;
  }
}

/* Hide desktop links on mobile (redundant with hidden md:flex) */
@media (max-width: 1044px) {
  .links {
    display: none !important;
  }

  .nav {
    margin: 0 0; /* was 0 25px, now 0 10px on mobile */
  }

  .mobile-links {
    display: initial;
  }

  .hamburger-btn {
    margin-right: 20px; /* was 0.5rem, now 0.5rem on mobile */
    width: 20px;
    height: 25px;
    display: initial;
  }

  .nav h1 {
    font-size: 20px;
  }

  .cart__icon {
    width: 20px;
    height: 20px;
  }

  .avatar__icon {
    width: 20px;
    height: 20px;
  }
}
</style>
