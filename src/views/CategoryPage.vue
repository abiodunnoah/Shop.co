<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import FilterSidebar from "@/components/FilterSidebar.vue";
// import ProductCard from "@/components/ProductCard.vue";
// import Pagination from "@/components/Pagination.vue";
import allProducts from "@/data/products.js";

const route = useRoute();
const router = useRouter();
const category = route.params.category || "casual";
const categoryLabel = computed(() => category.charAt(0).toUpperCase() + category.slice(1));

const page = ref(1);
const perPage = 9;
const sortOrder = ref("popular");
const total = ref(0);
const products = ref([]);

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
      <FilterSidebar @apply="applyFilters" />

      <div class="main">
        <div class="header">
          <h1 class="title">{{ categoryLabel }}</h1>
          <div class="sort-by">
            <span>Showing {{ start }}–{{ end }} of {{ total }} Products</span>
            <select v-model="sortOrder" @change="fetchProducts">
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
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
</template>

<style scoped>
.category-page {
  padding: 2rem 4rem;
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

@media (max-width: 768px) {
  .category-page {
    padding: 1rem;
  }
  .content {
    flex-direction: column;
  }
  .content > :first-child {
    width: 100%;
  }
}
</style>
