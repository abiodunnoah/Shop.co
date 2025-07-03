<script setup>
defineProps({
  price: { type: Number, required: true },
  original: { type: Number, default: null },
  discountPercent: { type: Number, default: 0 },
});
</script>

<template>
  <div class="price-display">
    <span class="current">\${{ price }}</span>
    <span v-if="original" class="original">\${{ original }}</span>
    <span v-if="original" class="discount">-{{ discountPercent }}%</span>
  </div>
</template>

<style scoped>
.price-display {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}
.current {
  font-size: 1.75rem;
  font-weight: 800;
}
.original {
  text-decoration: line-through;
  color: #999;
}
.discount {
  background: #ffe5e5;
  color: #d00;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
