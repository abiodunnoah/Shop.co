<script setup>
import StarRating from "@/components/StarRating.vue";
import PriceTag from "@/components/PriceTag.vue";

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
        <img :src="product.image" :alt="product.name" loading="lazy" decoding="async" />
      </div>
      <h3 class="name">{{ product.name }}</h3>

      <StarRating :value="product.rating" />

      <PriceTag :price="product.priceCurrent" :original="product.priceOriginal" />
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

.name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
}
</style>
