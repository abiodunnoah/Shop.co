<script setup>
import productDetail from "@/data/productDetail";
import { computed } from "vue";
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import ProductInfoSection from "@/components/ProductInfoSection.vue";
import MightLike from "@/components/MightLike.vue";
import FooterView from "@/components/FooterView.vue";
import { useCartStore } from "@/stores/cartStore";

const cart = useCartStore();

const props = defineProps({
  id: { type: [String, Number], required: true },
});

const pd = computed(() => {
  const found = productDetail.find((p) => p.id.toString() === props.id.toString());
  if (!found) {
    console.warn(`Product with id ${props.id} not found; falling back to first product.`);
    return productDetail[0] ?? null;
  }
  return found;
});

function onAddToCart({ size, color, quantity }) {
  const productSnapshot = {
    id: pd.value.id,
    name: pd.value.name,
    price: pd.value.price ?? pd.value.priceCurrent ?? 0,
    image: (pd.value.images && pd.value.images[0]) || pd.value.images || "",
  };
  cart.addToCart(productSnapshot, { size, color, quantity });
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
    <template v-if="pd">
      <ProductInfoSection
        :product="pd"
        @add-to-cart="onAddToCart"
        @write-review="onWriteReview"
        @load-more-reviews="onLoadMoreReviews"
      />
    </template>

    <template v-else>
      <p>Product not found.</p>
    </template>
    <MightLike />
  </main>
  <FooterView />
</template>

<style scoped>
.product-detail-page {
  padding: 1.5rem;
}
</style>
