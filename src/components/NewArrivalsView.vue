<script setup>
import products from "@/data/products.js";

const newArrivals = products.slice(0, 4);
const topSelling = products.slice(4, 8);

// onMounted(async () => {
//   await store.fetchProducts();
// });
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
        <img :src="prod.image" :alt="prod.name" class="card__image" />
        <h3 class="card__name">{{ prod.name }}</h3>

        <div class="card__rating">
          <span
            v-for="n in 5"
            :key="n"
            class="star"
            :class="{
              'text-gray-300': n > Math.floor(prod.rating),
              half: n === Math.ceil(prod.rating) && prod.rating % 1 !== 0,
            }"
            >★</span
          >
          <span class="rating-text">
            {{ prod.rating }}/<span class="total-rating-text">5</span>
          </span>
        </div>

        <div class="card__price">
          <span class="price-current">${{ prod.priceCurrent }}</span>
          <span v-if="prod.priceOriginal" class="price-original"> ${{ prod.priceOriginal }} </span>
          <span v-if="prod.priceOriginal" class="badge">
            -{{ Math.round((1 - prod.priceCurrent / prod.priceOriginal) * 100) }}%
          </span>
        </div>
      </router-link>
    </div>
    <div class="view-all-wrapper">
      <button class="btn-outline">View All</button>
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
        <img :src="prod.image" :alt="prod.name" class="card__image" />
        <h3 class="card__name">{{ prod.name }}</h3>

        <div class="card__rating">
          <span
            v-for="n in 5"
            :key="n"
            class="star"
            :class="{
              'text-gray-300': n > Math.floor(prod.rating),
              half: n === Math.ceil(prod.rating) && prod.rating % 1 !== 0,
            }"
            >★</span
          >
          <span class="rating-text">
            {{ prod.rating }}/<span class="total-rating-text">5</span>
          </span>
        </div>

        <div class="card__price">
          <span class="price-current">${{ prod.priceCurrent }}</span>
          <span v-if="prod.priceOriginal" class="price-original"> ${{ prod.priceOriginal }} </span>
          <span v-if="prod.priceOriginal" class="badge">
            -{{ Math.round((1 - prod.priceCurrent / prod.priceOriginal) * 100) }}%
          </span>
        </div>
      </router-link>
    </div>
    <div class="view-all-wrapper">
      <button class="btn-outline">View All</button>
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
  border-radius: 0.75rem;
  object-fit: contain;
  margin-bottom: 0.75rem;
}

.card__name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.25rem 0;
}

.card__rating {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.25rem;
  margin-bottom: 0.25rem;
}

.star {
  color: #f5a623;
  font-size: 1.25rem;
  line-height: 1;
}

.star.empty {
  color: #ddd;
}

.star.half {
  /* simple half-star mask */
  background: linear-gradient(90deg, #f5a623 50%, #ddd 50%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.rating-text {
  font-size: 14px;
  margin-left: 0.25rem;
}

.total-rating-text {
  color: #555;
  font-size: 14px;
}

.card__price {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.5rem;
}

.price-current {
  font-size: 20px;
  font-weight: 800;
}

.price-original {
  font-size: 20px;
  color: #999;
  text-decoration: line-through;
}

.badge {
  background: #ff33331a;
  color: #fc2b2b;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
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

  .price-current {
    font-size: 18px;
    font-weight: 800;
  }

  .price-original {
    font-size: 18px;
  }
}
</style>
