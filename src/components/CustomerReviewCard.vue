<script setup>
import Rating from "@/components/RatingView.vue";

defineProps({ review: Object });
</script>

<template>
  <div class="review-card">
    <!-- Header: Stars + More‑options menu -->
    <div class="card-header">
      <Rating :value="review.rating" />
      <button class="more-btn" aria-label="More options">
        <svg width="24" height="6" viewBox="0 0 24 6" fill="none">
          <circle cx="3" cy="3" r="3" fill="#999" />
          <circle cx="12" cy="3" r="3" fill="#999" />
          <circle cx="21" cy="3" r="3" fill="#999" />
        </svg>
      </button>
    </div>

    <!-- Reviewer name with Verified badge -->
    <div class="author-line">
      <h3 class="author-name">{{ review.author }}</h3>
      <img src="~/@/assets/icons/VerifiedIcon.png" alt="Verified" class="verified-icon" />
    </div>

    <!-- Review text and date -->
    <p>{{ review.text }}</p>
    <small>Posted on {{ review.date }}</small>
  </div>
</template>

<style scoped>
.review-card {
  position: relative;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.author-name {
  font-weight: 800;
  font-size: 16px;
}

/* Header container */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

/* Reviewer name + verified badge */
.author-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.verified-icon {
  width: 1rem;
  height: 1rem;
}

/* “More” button styling */
.more-btn {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.more-btn svg {
  display: block;
}

@media (max-width: 768px) {
  .more-btn {
    display: none;
  }
}
</style>
