<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";
import FilterSidebar from "@/components/FilterSidebar.vue";
import ProductCard from "@/components/ProductCard.vue";
import Pagination from "@/components/PaginationView.vue";
import allProducts from "@/data/products.js";
import FilterIcon from "@/assets/icons/FilterIcon.png";

const router = useRouter();
const categoryLabel = computed(() => category.charAt(0).toUpperCase() + category.slice(1));

const page = ref(1);
const perPage = 10;
const sortOrder = ref("popular");
const total = ref(0);
const products = ref([]);

const props = defineProps({
  category: { type: String, required: true },
});

const category = props.category;

const totalPages = computed(() => Math.ceil(total.value / perPage));
const start = computed(() => (page.value - 1) * perPage + 1);
const end = computed(() => Math.min(page.value * perPage, total.value));

function fetchProducts() {
  let list = allProducts.filter((p) => p.category === category);

  if (sortOrder.value === "price-low") list.sort((a, b) => a.price - b.price);
  if (sortOrder.value === "price-high") list.sort((a, b) => b.price - a.price);
  if (sortOrder.value === "newest") list.sort((a, b) => new Date(b.date) - new Date(a.date));

  total.value = list.length;
  const startIdx = (page.value - 1) * perPage;
  products.value = list.slice(startIdx, startIdx + perPage);
}

function applyFilters(filters) {
  page.value = 1;
  fetchProducts();
}

function goToDetail(id) {
  router.push({ name: "ProductDetail", params: { id } });
}

onMounted(fetchProducts);

const showMobileFilters = ref(false);
const closeBtn = ref(null);

function openMobileFilters() {
  showMobileFilters.value = true;
  nextTick(() => {
    if (closeBtn.value) closeBtn.value.focus();
  });
}

function closeMobileFilters() {
  showMobileFilters.value = false;
}

function onKeydown(e) {
  if (e.key === "Escape" && showMobileFilters.value) closeMobileFilters();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));

function applyFromModal(filters) {
  applyFilters(filters);
  closeMobileFilters();
}
</script>

<template>
  <header>
    <SignupBonus />
  </header>

  <section>
    <NavBar />
  </section>

  <div class="category-page">
    <nav class="breadcrumbs">
      <router-link to="/">Home</router-link>
      <span class="sep">›</span>
      <router-link to="/shop">Shop</router-link>
      <span class="sep">›</span>
      <span class="current">{{ categoryLabel }}</span>
    </nav>

    <div class="content">
      <FilterSidebar @apply="applyFilters" class="filter" />

      <div class="main">
        <div class="header">
          <h1 class="title">{{ categoryLabel }}</h1>
          <div class="sort-by">
            <span>Showing {{ start }}–{{ end }} of {{ total }} Products</span>
            <select v-model="sortOrder" @change="fetchProducts" class="select">
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          <button class="mobile-filter-btn" aria-label="Open filters" @click="openMobileFilters">
            <img :src="FilterIcon" alt="Filter Icon" class="filter-icon" />
          </button>
        </div>

        <div class="grid">
          <ProductCard
            v-for="prod in products"
            :key="prod.id"
            :product="prod"
            @click="goToDetail(prod.id)"
          />
        </div>

        <Pagination
          :current-page="page"
          :total-pages="totalPages"
          @change-page="
            page = $event;
            fetchProducts();
          "
        />
      </div>
    </div>
  </div>

  <section>
    <FooterView />
  </section>

  <teleport to="body">
    <div
      v-if="showMobileFilters"
      class="mobile-filter-overlay"
      @click.self="closeMobileFilters"
      aria-hidden="false"
    >
      <div class="mobile-filter-panel" role="dialog" aria-modal="true" aria-label="Filter products">
        <header class="mobile-filter-header">
          <button
            ref="closeBtn"
            class="mobile-filter-close"
            @click="closeMobileFilters"
            aria-label="Close filters"
          >
            ✕
          </button>
        </header>

        <FilterSidebar @apply="applyFromModal" />
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.category-page {
  padding: 2rem 4rem;
  margin-bottom: 4rem;
}
.filter-icon {
  display: none;
}
.breadcrumbs {
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: #555;
}
.breadcrumbs .sep {
  margin: 0 0.5rem;
}
.breadcrumbs .current {
  font-weight: 600;
}

.content {
  display: flex;
  gap: 2rem;
}

/* Sidebar column */
.content > :first-child {
  flex: 0 0 16rem;
}

/* Main column */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Header row */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 2rem;
  font-weight: 900;
}
.sort-by {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.sort-by select {
  background: #f5f5f5;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1.5rem;
}

.mobile-filter-btn {
  background: none;
  cursor: pointer;
}

.mobile-filter-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  justify-content: center;
  z-index: 9999;
}

.mobile-filter-panel {
  background: #fff;
  width: 100%;
  max-width: 420px;
  height: 100%;
  overflow-y: auto;
  box-shadow: -8px 0 24px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.mobile-filter-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.mobile-filter-close {
  font-size: 1.25rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}

@media (max-width: 1044px) {
  .category-page {
    padding: 1rem;
  }
  .content {
    flex-direction: column;
  }
  .content > :first-child {
    width: 100%;
  }
  .filter {
    display: none;
  }
  .select {
    display: none;
  }
  .title {
    font-size: 1.75rem;
  }
  .filter-icon {
    display: initial;
  }
  .mobile-filter-overlay {
    display: flex;
  }
}
</style>
