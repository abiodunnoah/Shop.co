<script setup>
defineProps({
  quantity: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <button class="add-to-cart-btn" @click="$emit('add', quantity)">Add to Cart</button>
</template>

<style scoped>
.add-to-cart-btn {
  flex: 1;
  padding: 0.75rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
}
</style>
