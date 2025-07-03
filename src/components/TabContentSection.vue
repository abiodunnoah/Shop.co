<script setup>
import { computed } from "vue";
import DescriptionCard from "@/components/DescriptionCard.vue";
import CustomerReviewCard from "@/components/CustomerReviewCard.vue";
import FaqCard from "@/components/FaqCard.vue";

const props = defineProps({
  product: { type: Object, required: true },
  activeTab: { type: Number, required: true },
  sortOrder: { type: String, required: true },
});
defineEmits(["load-more"]);

const sortedReviews = computed(() => {
  const arr = [...props.product.reviews];
  if (props.sortOrder === "highest") return arr.sort((a, b) => b.rating - a.rating);
  if (props.sortOrder === "lowest") return arr.sort((a, b) => a.rating - b.rating);
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
});
</script>

<template>
  <div>
    <!-- Details -->
    <div v-if="activeTab === 0">
      <DescriptionCard :text="product.description" />
    </div>

    <!-- Reviews -->
    <div v-else-if="activeTab === 1">
      <CustomerReviewCard v-for="r in sortedReviews" :key="r.id" :review="r" />
      <button class="load-more" @click="$emit('load-more')">Load More Reviews</button>
    </div>

    <!-- FAQs -->
    <div v-else>
      <FaqCard v-for="f in product.faqs" :key="f.q" :faq="f" />
    </div>
  </div>
</template>

<style scoped>
.load-more {
  display: block;
  margin: 1rem auto;
}
</style>
