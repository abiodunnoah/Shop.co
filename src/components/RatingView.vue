<script setup>
defineProps({
  value: { type: Number, required: true },
});
</script>

<template>
  <div class="rating">
    <span
      v-for="n in 5"
      :key="n"
      class="star"
      :class="{
        filled: value >= n,
        half: value >= n - 0.5 && value < n,
        empty: value < n - 0.5,
      }"
      >★</span
    >
    <span class="value">{{ value.toFixed(1) }}/5</span>
  </div>
</template>

<style scoped>
.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  font-size: 1.5rem;
  position: relative;
  /* ensure clipping works */
  display: inline-block;
}

/* Fully filled */
.filled {
  color: #f5a623;
}

/* Fully empty */
.empty {
  color: #ddd;
}

/* Half‑filled: show left half in gold, right half in gray */
.half {
  color: #ddd; /* base color */
}
.half::before {
  content: "★";
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  overflow: hidden;
  color: #f5a623;
}

/* Numeric value */
.value {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #555;
}

@media (max-width: 768px) {
  .star {
    font-size: 1.35rem;
  }
  .value {
    display: none;
  }
}
</style>
