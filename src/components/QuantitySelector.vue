<script setup>
import { computed } from "vue";
const props = defineProps({
  modelValue: { type: Number, default: 1 },
});
const emit = defineEmits(["update:modelValue"]);
const quantity = computed(() => props.modelValue);
function update(val) {
  emit("update:modelValue", val < 1 ? 1 : val);
}
</script>

<template>
  <div class="quantity-selector">
    <button aria-label="Decrease" @click="update(quantity - 1)">−</button>
    <span>{{ quantity }}</span>
    <button aria-label="Increase" @click="update(quantity + 1)">＋</button>
  </div>
</template>

<style scoped>
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.quantity-selector button {
  padding: 0.25rem 0.75rem;
  border: none;
  background: #f0f0f0;
  cursor: pointer;
  font-size: 1.25rem;
}
.quantity-selector span {
  min-width: 1.5rem;
  text-align: center;
}
</style>
