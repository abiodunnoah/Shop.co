<script setup>
defineProps({
  value: { type: Number, required: true },
  size: { type: String, default: "md", validator: (v) => ["sm", "md", "lg"].includes(v) },
  showValue: { type: Boolean, default: true },
});
</script>

<template>
  <div class="rating" :class="`rating--${size}`" :aria-label="`${value} out of 5`">
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
    <span v-if="showValue" class="value">{{ value }}/<span class="total">5</span></span>
  </div>
</template>

<style scoped>
.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  color: #ddd;
  line-height: 1;
}

.star.filled {
  color: #f5a623;
}

.star.half {
  background: linear-gradient(90deg, #f5a623 50%, #ddd 50%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.value {
  color: #666;
  margin-left: 0.25rem;
}

.total {
  color: #555;
}

.rating--sm .star {
  font-size: 1rem;
}

.rating--sm .value {
  font-size: 0.85rem;
}

.rating--md .star {
  font-size: 1.25rem;
}

.rating--md .value {
  font-size: 14px;
}

.rating--lg .star {
  font-size: 1.5rem;
}

.rating--lg .value {
  font-size: 0.875rem;
  margin-left: 0.5rem;
}
</style>
