<script setup>
import { ref } from "vue";
import SearchBar from "@/assets/icons/SearchIcon.png";
import cart from "@/assets/icons/cart.png";
import Avatar from "@/assets/icons/avatar.svg";
import MenuIcon from "@/assets/icons/menu.png";

const searchInput = ref("");
const menuOpen = ref(false);
const searchOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function toggleSearch() {
  searchOpen.value = !searchOpen.value;
}
</script>

<template>
  <nav class="nav">
    <!-- 1️⃣ Hamburger (mobile only) + Logo -->
    <div class="flex items-center flex-shrink-0">
      <button
        type="button"
        class="hamburger-btn md:hidden mr-7 ml-0.5 z-30"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <img :src="MenuIcon" alt="Menu" class="w-6 h-6" />
      </button>
      <h1>SHOP.CO</h1>
    </div>

    <!-- 2️⃣ Desktop links (untouched) -->
    <div class="links hidden md:flex">
      <p>Shop</p>
      <p>On Sales</p>
      <p>New Arrival</p>
      <p>Brands</p>
    </div>

    <!-- 3️⃣ Mobile dropdown -->
    <div
      v-if="menuOpen"
      class="mobile-links md:hidden absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 px-3 w-40 z-20"
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
      <img :src="cart" alt="Cart Icon" class="cart__icon" />
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
  position: relative; /* for mobile dropdown positioning */
  flex-wrap: nowrap;
  /* padding: 1.5rem 3rem; */
  border-bottom: 1px solid #ddd;
}

/*
.nav > * {
  flex-shrink: 0;
} */

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
}

/* === Mobile links dropdown === */
.mobile-links p {
  font-size: 12px;
  cursor: pointer;
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
@media (max-width: 767px) {
  .links {
    display: none !important;
  }

  .nav {
    margin: 0 0; /* was 0 25px, now 0 10px on mobile */
  }

  .hamburger-btn {
    margin-right: 20px; /* was 0.5rem, now 0.5rem on mobile */
    width: 20px;
    height: 25px;
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
