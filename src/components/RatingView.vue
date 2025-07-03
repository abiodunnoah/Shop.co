<script setup>
defineProps({
  value: { type: Number, required: true },
});
</script>

<template>
  <div class="rating">
    <span v-for="n in 5" :key="n" class="star" :class="n <= Math.round(value) ? 'filled' : 'empty'"
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
  font-size: 1.25rem;
}
.filled {
  color: #f5a623;
}
.empty {
  color: #ddd;
}
.value {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #555;
}
</style>
