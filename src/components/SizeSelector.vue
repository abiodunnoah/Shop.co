<script setup>
defineProps({
  sizes: { type: Array, required: true },
  selected: { type: String, default: "" },
});
</script>

<template>
  <div role="radiogroup" class="size-selector">
    <button
      v-for="s in sizes"
      :key="s.label"
      role="radio"
      :aria-checked="s.label === selected"
      :disabled="!s.inStock"
      class="size-btn"
      :class="{ selected: s.label === selected, disabled: !s.inStock }"
      @click="$emit('update:selected', s.label)"
    >
      {{ s.label }}
    </button>
  </div>
</template>

<style scoped>
.size-selector {
  display: flex;
  gap: 0.5rem;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
}
.size-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999px;
  background: #f0f0f0;
  cursor: pointer;
}
.size-btn.selected {
  background: #000;
  color: #fff;
}
.size-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .size-btn {
    padding: 0.5rem 0.95rem;
  }
}
</style>
