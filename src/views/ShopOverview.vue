<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/FooterView.vue";
import products from "@/data/products.js";

const route = useRoute();
const router = useRouter();

const searchQuery = ref(route.query.q || "");

watch(
  () => route.query.q,
  (q) => {
    searchQuery.value = q || "";
  }
);

const indexed = (Array.isArray(products) ? products : []).map((p) => ({
  ...p,
  _text: `${p.name || ""} ${p.category || ""} ${p.description || ""}`.toLowerCase(),
}));

const results = computed(() => {
  const term = (searchQuery.value || "").toLowerCase().trim();
  if (!term) return indexed;
  return indexed.filter((p) => p._text.includes(term)).map(({ _text, ...rest }) => rest);
});

function goWithQuery(q) {
  const trimmed = (q || "").trim();
  if (!trimmed) {
    router.push({ name: "ShopOverview", query: {} }).catch(() => {});
    return;
  }
  router.push({ name: "ShopOverview", query: { q: trimmed } }).catch(() => {});
}
</script>

<template>
  <header>
    <SignupBonus />
  </header>

  <section>
    <NavBar />
  </section>

  <main class="mx-auto max-w-6xl my-8 px-4">
    <nav class="text-sm text-gray-600 mb-4" aria-label="breadcrumb">
      <router-link to="/" class="hover:underline">Home</router-link>
      <span class="mx-2">›</span>
      <span class="font-semibold">Products</span>
    </nav>

    <div class="mb-4">
      <h1 class="text-3xl font-extrabold">Products</h1>
    </div>

    <div class="flex gap-4 items-center mb-4">
      <div class="flex-1">
        <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="goWithQuery(searchQuery)"
          placeholder="Search products..."
          class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          aria-label="Search products"
        />
      </div>

      <button
        @click="goWithQuery(searchQuery)"
        class="px-4 py-2 rounded-full border border-gray-300 font-semibold hover:bg-gray-50"
      >
        Search
      </button>

      <button
        v-if="searchQuery"
        @click="goWithQuery('')"
        class="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        Clear
      </button>
    </div>

    <p v-if="searchQuery" class="text-gray-600 mb-4">
      Showing results for <strong>"{{ searchQuery }}"</strong> - {{ results.length }} found.
    </p>

    <!-- products grid  -->
    <section>
      <div class="custom-grid">
        <router-link
          v-for="p in results"
          :key="p.id"
          :to="{ name: 'ProductDetail', params: { id: p.id } }"
          class="block rounded-lg overflow-hidden bg-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
        >
          <div class="w-full" style="aspect-ratio: 1 / 1; overflow: hidden; background: #fafafa">
            <img
              :src="p.image"
              :alt="p.name"
              class="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="px-4 py-3">
            <h3 class="text-base font-semibold leading-tight mb-2 min-h-[2.4em]">{{ p.name }}</h3>

            <div class="flex items-center justify-between">
              <div class="font-extrabold">₦{{ p.priceCurrent }}</div>
              <div class="text-sm text-gray-500">{{ p.rating }} / 5</div>
            </div>
          </div>
        </router-link>
      </div>

      <div v-if="!results.length" class="py-8 text-center text-gray-600">
        No products found. Try a different search or browse our categories.
      </div>
    </section>
  </main>

  <section>
    <Footer />
  </section>
</template>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

@media (max-width: 768px) {
  .custom-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
