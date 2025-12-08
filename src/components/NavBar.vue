<script setup>
import { useCartStore } from "@/stores/cartStore";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import SearchBar from "@/assets/icons/SearchIcon.png";
import cartIcon from "@/assets/icons/cart.png";
import Avatar from "@/assets/icons/avatar.svg";
import MenuIcon from "@/assets/icons/menu.png";
import { nextTick } from "vue";

const auth = useAuthStore();
const cart = useCartStore();
const router = useRouter();

const searchInput = ref("");
const menuOpen = ref(false);
const searchOpen = ref(false);
const searchInputRef = ref(null);

const userMenuOpen = ref(false);
const isLoggingOut = ref(false);
const userMenuRef = ref(null);

const categories = [
  { label: "Shop", slug: "shop" },
  { label: "Casual", slug: "casual" },
  { label: "Formal", slug: "formal" },
  { label: "T‑shirts", slug: "t-shirts" },
  { label: "Jeans", slug: "jeans" },
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

function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value;
}

function onDocClick(e) {
  if (!userMenuRef.value) return;
  if (userMenuOpen.value && !userMenuRef.value.contains(e.target)) {
    userMenuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", onDocClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onDocClick);
});

async function logoutUser() {
  userMenuOpen.value = false;
  isLoggingOut.value = true;

  try {
    if (typeof cart.clearCart === "function") {
      cart.clearCart();
    }
    await auth.logout();
    router.push("/");
  } catch (err) {
    console.error("Logout failed:", err);
  } finally {
    isLoggingOut.value = false;
  }
}

function navigateToShop(q) {
  const trimmed = (q || "").trim();

  const target = trimmed
    ? { name: "ShopOverview", query: { q: trimmed } }
    : { name: "ShopOverview", query: {} };

  const cur = router.currentRoute.value;
  const sameRoute =
    cur.name === target.name && JSON.stringify(cur.query) === JSON.stringify(target.query || {});

  if (sameRoute) return;

  router.replace(target).catch(() => {});
}

function onSearchIconClick() {
  if (!searchOpen.value) {
    searchOpen.value = true;

    nextTick(() => {
      searchInputRef.value?.focus?.();
    });
    return;
  }
}

// function submitSearch() {
//   const trimmed = (searchInput.value || "").trim();
//   if (!trimmed) {
//     router.push({ name: "ShopOverview", query: {} }).catch(() => {});
//     return;
//   }
//   router.push({ name: "ShopOverview", query: { q: trimmed } }).catch(() => {});
// }

function submitSearch() {
  navigateToShop(searchInput.value);
}

function goWithQuery(q) {
  navigateToShop(q);
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

      <router-link to="/">
        <h1>SHOP.CO</h1>
      </router-link>
    </div>

    <div class="links hidden md:flex">
      <div class="shop-select">
        <select v-model="selectedCategory" @change="goToCategory" class="px-1 py-1 cursor-pointer">
          <option v-for="category in categories" :key="category.slug" :value="category.slug">
            {{ category.label }}
          </option>
        </select>
      </div>
      <!-- <router-link class="cursor-pointer mr-5">Brands</router-link> -->
      <router-link :to="{ name: 'NewArrivals' }" class="cursor-pointer mr-5"
        >New Arrivals</router-link
      >
      <router-link :to="{ name: 'TopSelling' }" class="cursor-pointer">Top Selling</router-link>
    </div>

    <!-- 3️⃣ Mobile dropdown -->
    <div v-if="menuOpen" class="menu-overlay" @click="menuOpen = false"></div>

    <div
      v-if="menuOpen"
      class="mobile-links absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 px-3 w-40 z-20"
    >
      <p class="px-4 py-2 hover:bg-gray-100">Shop</p>
      <!-- <p class="px-4 py-2 hover:bg-gray-100">Brands</p> -->
      <p class="px-4 py-2 hover:bg-gray-100">
        <router-link :to="{ name: 'NewArrivals' }">New Arrivals</router-link>
      </p>
      <p class="px-4 py-2 hover:bg-gray-100">
        <router-link :to="{ name: 'TopSelling' }">Top Selling</router-link>
      </p>
    </div>

    <div class="flex items-center gap-4">
      <div class="search relative">
        <button
          type="button"
          class="p-1 z-20"
          @click="searchOpen ? submitSearch() : toggleSearch()"
          aria-label="Toggle search"
        >
          <img :src="SearchBar" alt="Search Icon" class="search__icon" />
        </button>

        <input
          v-model="searchInput"
          @keyup.enter="submitSearch"
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

      <template v-if="auth.user">
        <div class="user-wrapper relative" ref="userMenuRef">
          <button
            class="avatar-btn flex items-center gap-2"
            @click="toggleUserMenu"
            :aria-expanded="userMenuOpen.toString()"
            aria-haspopup="menu"
            type="button"
          >
            <img
              src="https://img.freepik.com/premium-psd/smiling-3d-cartoon-man_975163-762.jpg?w=826"
              alt="Account"
              class="w-8 h-8 rounded-full"
            />
          </button>

          <div
            v-if="userMenuOpen"
            class="user-menu absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30"
            role="menu"
            aria-label="User menu"
          >
            <router-link
              to="/account"
              class="menu-item block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              Account
            </router-link>

            <router-link
              to="/orders"
              class="menu-item block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              Orders
            </router-link>

            <button
              class="menu-item block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              @click="logoutUser"
              :disabled="isLoggingOut"
              role="menuitem"
            >
              <template v-if="isLoggingOut">Signing out...</template>
              <template v-else>Logout</template>
            </button>
          </div>
        </div>
      </template>

      <template v-else>
        <router-link to="/login">
          <img :src="Avatar" alt="User Avatar" class="avatar__icon" />
        </router-link>
      </template>
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

.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 15;
  background: rgba(0, 0, 0, 0);
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

/* user menu */
.user-wrapper {
  position: relative;
  display: inline-block;
}
.avatar-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
}
.user-menu {
  min-width: 11rem;
}
.menu-item {
  cursor: pointer;
}
.menu-item[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (min-width: 768px) {
  .search-input[style] {
    display: block !important;
    position: static;
    transform: none;
    width: auto;
  }
}

@media (max-width: 1023px) {
  .links {
    display: none !important;
  }

  .nav {
    margin: 0 0;
  }

  .mobile-links {
    display: initial;
  }

  .hamburger-btn {
    margin-right: 20px;
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
