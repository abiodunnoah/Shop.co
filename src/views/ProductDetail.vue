<script setup>
import { productDetail as pd } from "@/data/productDetail";

import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import ProductInfoSection from "@/components/ProductInfoSection.vue";
import MightLike from "@/components/MightLike.vue";
import FooterView from "@/components/FooterView.vue";

defineProps({
  id: { type: [String, Number], required: true },
});

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
    <MightLike />
  </main>
  <FooterView />
</template>

<style scoped>
.product-detail-page {
  padding: 1.5rem;
}
</style>
