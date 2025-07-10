<script setup>
import { ref, computed, watch } from "vue";
import DescriptionCard from "@/components/DescriptionCard.vue";
import CustomerReviewCard from "@/components/CustomerReviewCard.vue";
import FaqCard from "@/components/FaqCard.vue";
import FilterIcon from "@/assets/icons/FilterIcon.png";

const props = defineProps({
  product: { type: Object, required: true },
  activeTab: { type: Number, required: true },
  sortOrder: { type: String, required: true },
});

const emit = defineEmits(["update:sortOrder", "write-review", "load-more"]);
const localSort = ref(props.sortOrder);

watch(
  () => props.sortOrder,
  (v) => (localSort.value = v)
);

const sortedReviews = computed(() => {
  const arr = [...props.product.reviews];
  if (props.sortOrder === "highest") return arr.sort((a, b) => b.rating - a.rating);
  if (props.sortOrder === "lowest") return arr.sort((a, b) => a.rating - b.rating);
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
});

function onSortChange() {
  emit("update:sortOrder", localSort.value);
}

function onWrite() {
  emit("write-review");
}

function OnLoadMore() {
  emit("load-more");
}
</script>

<template>
  <div>
    <!-- Details -->
    <div v-if="activeTab === 0">
      <DescriptionCard :text="product.description" />
    </div>

    <!-- Reviews -->
    <div v-else-if="activeTab === 1">
      <div class="reviews-header">
        <h2 class="reviews-title">
          All Reviews <span class="review-count">({{ product.reviews.length }})</span>
        </h2>
        <div class="reviews-controls">
          <button class="btn-icon" @click="$emit('filter')" aria-label="Filter reviews">
            <img :src="FilterIcon" alt="Filter Reviews" />
          </button>
          <select v-model="localSort" @change="onSortChange" class="sort-dropdown">
            <option value="latest">Latest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
          <button class="btn-primary" @click="onWrite">Write a Review</button>
        </div>
      </div>

      <div class="reviews-grid">
        <CustomerReviewCard v-for="r in sortedReviews" :key="r.id" :review="r" />
      </div>
      <button class="load-more" @click="OnLoadMore">Load More Reviews</button>
    </div>

    <!-- FAQs -->
    <div v-else>
      <FaqCard v-for="f in product.faqs" :key="f.q" :faq="f" />
    </div>
  </div>
</template>

<style scoped>
.reviews-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.reviews-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.review-count {
  color: grey;
  font-size: 15px;
  font-weight: 340;
}

.reviews-controls {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.btn-icon {
  background: #f5f4f2;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 40px;
  cursor: pointer;
}
.sort-dropdown {
  background: #f5f4f2;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.btn-primary {
  background: #000;
  color: #fff;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
}
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.load-more {
  display: block;
  margin: 1rem auto;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  cursor: pointer;
}
</style>
