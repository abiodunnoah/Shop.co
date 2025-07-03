<script setup>
import Rating from "@/components/RatingView.vue";
defineProps({ review: Object });
</script>

<template>
  <div class="review-card">
    <Rating :value="review.rating" />
    <h3>{{ review.author }}</h3>
    <p>{{ review.text }}</p>
    <small>Posted on {{ review.date }}</small>
  </div>
</template>

<style scoped>
.review-card {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
</style>
