<script setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="collapsible">
    <button class="collapsible-header" @click="toggle">
      <span>{{ title }}</span>
      <svg :class="{ open: isOpen }" class="chevron" width="16" height="16" view-box="0 0 24 24">
        <path
          d="M6 9 l6 6 l6 -6"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <div v-show="isOpen" class="collapsible-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.collapsible {
  width: 100%;
}

.collapsible-header {
  width: 100%;
  background: none;
  border: none;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.chevron {
  transition: transform 0.3s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

.collapsible-content {
  padding: 0.5rem 0 1rem;
  border-bottom: 1px solid #ddd;
}
</style>
