<script setup>
import products from "@/data/products.js";
import { computed } from "vue";
import { useRouter } from "vue-router";
import StarRating from "@/components/StarRating.vue";
import PriceTag from "@/components/PriceTag.vue";

const props = defineProps({
  currentId: { type: [String, Number], default: null },
});

const router = useRouter();

const mightLike = computed(() => {
  const current = products.find((p) => String(p.id) === String(props.currentId));
  const sameCategory = products.filter(
    (p) => current && p.category === current.category && String(p.id) !== String(props.currentId)
  );
  const others = products.filter((p) => !current || p.category !== current.category);
  const recs = [...sameCategory, ...others].slice(0, 4);
  return recs.length ? recs : products.slice(0, 4);
});

function goToDetail(id) {
  router.push({ name: "ProductDetail", params: { id } }).catch((err) => {
    if (err.name !== "NavigationDuplicated") {
      console.error("Navigation error:", err);
    }
  });
}
</script>

<template>
  <div v-if="mightLike.length === 0">
    <p>No recommendations available at this time.</p>
  </div>

  <section v-else class="item-section">
    <h2 class="section-title">You Might Also Like</h2>
    <div class="grid">
      <div
        v-for="prod in mightLike"
        :key="prod.id"
        class="card__item cursor-pointer"
        @click="goToDetail(prod.id)"
      >
        <img :src="prod.image" :alt="prod.name" class="card__image" loading="lazy" decoding="async" />
        <h3 class="card__name">{{ prod.name }}</h3>

        <StarRating :value="prod.rating" />

        <PriceTag :price="prod.priceCurrent" :original="prod.priceOriginal" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.item-section {
  padding: 2rem 2rem;
  border-bottom: 1px solid #ddd;
}

.item-section-2 {
  padding: 4rem 2rem;
}

.section-title {
  text-align: center;
  font-family: sans-serif;
  font-size: 40px;
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
  border-radius: 0.75rem;
  object-fit: contain;
  margin-bottom: 0.75rem;
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

@media (max-width: 768px) {
  .item-section {
    padding: 2rem 1rem;
  }

  .item-section-2 {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: 35px;
    margin-bottom: 0.25rem;
  }

  .grid {
    display: flex !important;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    /* gap: 1rem; */
    padding-bottom: 1rem;
  }

  .card__item {
    flex: 0 0 55%; /* show ~1.3 cards at a time; tweak to taste */
    min-width: 180px; /* guarantee a usable hit area */
    scroll-snap-align: start;
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
