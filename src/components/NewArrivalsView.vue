<script setup>
import products from "@/data/products.js";
import StarRating from "@/components/StarRating.vue";
import PriceTag from "@/components/PriceTag.vue";

function pickTopN(flag, sorter, n = 4) {
  const matched = products.filter((p) => !!p[flag]).slice();
  matched.sort(sorter);

  if (matched.length >= n) return matched.slice(0, n);

  // fill with non-matched items (avoid duplicates)
  const filler = products
    .filter((p) => !matched.some((m) => m.id === p.id))
    .slice(0, n - matched.length);
  return matched.concat(filler);
}

// New arrivals = newest by date
const newArrivals = pickTopN("isNew", (a, b) => new Date(b.date) - new Date(a.date), 4);

// Top selling = highest rating
const topSelling = pickTopN(
  "isTop",
  (a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return new Date(b.date) - new Date(a.date);
  },
  4
);
</script>

<template>
  <!-- NEW ARRIVALS -->
  <section class="item-section">
    <h2 class="section-title cursor-pointer">NEW ARRIVALS</h2>
    <div class="grid">
      <router-link
        v-for="prod in newArrivals"
        :key="prod.id"
        :to="{ name: 'ProductDetail', params: { id: prod.id } }"
        class="card__item cursor-pointer"
      >
        <img :src="prod.image" :alt="prod.name" class="card__image" loading="lazy" decoding="async" />
        <h3 class="card__name">{{ prod.name }}</h3>

        <StarRating :value="prod.rating" />

        <PriceTag :price="prod.priceCurrent" :original="prod.priceOriginal" />
      </router-link>
    </div>
    <div class="view-all-wrapper">
      <router-link :to="{ name: 'NewArrivals' }" class="btn-outline">View All</router-link>
    </div>
  </section>

  <!-- TOP SELLING -->
  <section class="item-section-2">
    <h2 class="section-title cursor-pointer">TOP SELLING</h2>
    <div class="grid">
      <router-link
        v-for="prod in topSelling"
        :key="prod.id"
        :to="{ name: 'ProductDetail', params: { id: prod.id } }"
        class="card__item cursor-pointer"
      >
        <img :src="prod.image" :alt="prod.name" class="card__image" loading="lazy" decoding="async" />
        <h3 class="card__name">{{ prod.name }}</h3>

        <StarRating :value="prod.rating" />

        <PriceTag :price="prod.priceCurrent" :original="prod.priceOriginal" />
      </router-link>
    </div>
    <div class="view-all-wrapper">
      <router-link :to="{ name: 'TopSelling' }" class="btn-outline">View All</router-link>
    </div>
  </section>
</template>

<style scoped>
.item-section {
  padding: 4rem 2rem;
  border-bottom: 1px solid #ddd;
  /* padding: 0 1rem; */
}

.item-section-2 {
  padding: 4rem 2rem;
}

.section-title {
  text-align: center;
  font-family: sans-serif;
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* gap: 1.25rem; */
}

.card__item {
  /* background: #f7f6f6; */
  border-radius: 1rem;
  padding: 0.75rem;
  /* text-align: center; */
}

.card__image {
  width: 100%;
  height: 250px;
  border-radius: 0.75rem;
  object-fit: cover;
  margin-bottom: 0.75rem;
  border-radius: 20px;
}

.card__name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.25rem 0;
}

.view-all-wrapper {
  text-align: center;
  margin-top: 2rem;
}

.btn-outline {
  border: 1px solid #ccc;
  background: transparent;
  padding: 0.5rem 3.5rem;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
}

@media (max-width: 767px) {
  .item-section {
    padding: 2rem 1rem;
  }

  .item-section-2 {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: 32px;
    margin-bottom: 0.25rem;
  }

  .grid {
    display: flex !important;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .card__item {
    flex: 0 0 55%; /* show ~1.3 cards at a time; tweak to taste */
    min-width: 180px; /* guarantee a usable hit area */
    scroll-snap-align: start;
    margin-right: 1rem;
  }

  .grid::-webkit-scrollbar {
    display: none;
  }

  .grid {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .card__name {
    font-size: 0.9rem;
  }
}
</style>
