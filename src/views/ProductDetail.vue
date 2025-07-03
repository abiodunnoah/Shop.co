<script setup>
import { productDetail as pd } from "@/data/productDetail";

import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import ProductInfoSection from "@/components/ProductInfoSection.vue";

function onAddToCart({ size, color, quantity }) {
  console.log("Add to cart:", { size, color, quantity });
}
function onWriteReview() {
  console.log("Open review form");
}
function onLoadMoreReviews() {
  console.log("Load more reviews");
}
</script>

<template>
  <header>
    <SignupBonus />
    <NavBar />
  </header>

  <main class="product-detail-page">
    <ProductInfoSection
      :product="pd"
      @add-to-cart="onAddToCart"
      @write-review="onWriteReview"
      @load-more-reviews="onLoadMoreReviews"
    />
  </main>
</template>

<style scoped>
.product-detail-page {
  padding: 2rem;
}
</style>
