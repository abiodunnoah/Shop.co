<script setup>
import { ref } from "vue";

import ProductGallery from "@/components/ProductGallery.vue";
import Rating from "@/components/RatingView.vue";
import PriceDisplay from "@/components/PriceDisplay.vue";
import ColorSwatches from "@/components/ColorSwatches.vue";
import SizeSelector from "@/components/SizeSelector.vue";
import QuantitySelector from "@/components/QuantitySelector.vue";
import AddToCart from "@/components/AddToCart.vue";
import TabPanel from "@/components/TabPanel.vue";
import TabContentSection from "@/components/TabContentSection.vue";

const props = defineProps({
  product: { type: Object, required: true },
});
const emit = defineEmits(["add-to-cart", "write-review", "load-more-reviews"]);

const currentImage = ref(0);
const selectedColor = ref(props.product.colors[0].name);
const selectedSize = ref(props.product.sizes[0].label);
const quantity = ref(1);
const activeTab = ref(0);
const sortOrder = ref("latest");

function emitAddToCart() {
  emit("add-to-cart", {
    size: selectedSize.value,
    color: selectedColor.value,
    quantity: quantity.value,
  });
}
</script>

<template>
  <div class="info-section">
    <!-- Gallery + Swatches + Price/Selectors -->
    <div class="top">
      <ProductGallery :images="product.images" v-model:currentImage="currentImage" />
      <div class="details">
        <h1>{{ product.name }}</h1>
        <Rating :value="product.rating" />
        <PriceDisplay :price="product.price" :original="product.originalPrice" />
        <p class="desc">{{ product.description }}</p>

        <h4>Select Colors</h4>
        <ColorSwatches :colors="product.colors" v-model:selected="selectedColor" />

        <h4>Choose Size</h4>
        <SizeSelector :sizes="product.sizes" v-model:selected="selectedSize" />

        <div class="buy-row">
          <QuantitySelector v-model="quantity" />
          <AddToCart :quantity="quantity" @add="emitAddToCart" />
        </div>
      </div>
    </div>

    <!-- Tabs + Content -->
    <TabPanel :tabs="['Product Details', 'Rating & Reviews', 'FAQs']" v-model:active="activeTab">
      <TabContentSection
        :product="product"
        :active-tab="activeTab"
        :sort-order="sortOrder"
        @load-more="emit('load-more-reviews')"
      />
    </TabPanel>
  </div>
</template>

<style scoped>
.info-section .top {
  display: flex;
  gap: 2rem;
}
.details {
  flex: 1;
}
.buy-row {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
