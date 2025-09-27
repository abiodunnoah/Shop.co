<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="card">
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="cursor-pointer">
      <div class="image-wrapper">
        <img :src="product.image" :alt="product.name" />
      </div>
      <h3 class="name">{{ product.name }}</h3>

      <div class="rating">
        <span
          v-for="n in 5"
          :key="n"
          class="star"
          :class="{
            'text-gray-300': n > Math.floor(product.rating),
            half: n === Math.ceil(product.rating) && product.rating % 1 !== 0,
          }"
          >★</span
        >
        <span class="rating-text">
          {{ product.rating }}/<span class="total-rating-text">5</span>
        </span>
      </div>

      <div class="price">
        <span class="current">${{ product.priceCurrent }}</span>
        <span v-if="product.priceOriginal" class="original"> ${{ product.priceOriginal }} </span>
        <span v-if="product.priceOriginal" class="badge">
          -{{ Math.round((1 - product.priceCurrent / product.priceOriginal) * 100) }}%
        </span>
      </div>
    </router-link>
  </article>
</template>

<style scoped>
.card {
  border-radius: 1.5rem;
  padding: 1rem;
  text-align: left;
}

.image-wrapper img {
  border-radius: 20px;
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

.current {
  font-size: 20px;
  font-weight: 800;
}

.original {
  font-size: 20px;
  color: #999;
  padding: 0.125rem 0.5rem;
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

.name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
}
</style>
