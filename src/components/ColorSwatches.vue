<script setup>
defineProps({
  colors: Array,
  selected: String,
});
</script>

<template>
  <div class="color-swatches">
    <button
      v-for="c in colors"
      :key="c.name"
      class="swatch-btn"
      :style="{ backgroundColor: c.hex }"
      :class="{ selected: c.name === selected }"
      @click="$emit('update:selected', c.name)"
      :aria-label="c.name"
    >
      <span v-if="c.name === selected" class="checkmark">✓</span>
    </button>
  </div>
</template>

<style scoped>
.color-swatches {
  display: flex;
  gap: 0.75rem;
}
.swatch-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}
.swatch-btn.selected {
  outline: 2px solid #000;
}
.checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1rem;
}
</style>
