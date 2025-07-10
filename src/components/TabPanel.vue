<script setup>
defineProps({
  tabs: { type: Array, required: true },
  active: { type: Number, default: 0 },
});

const emit = defineEmits(["update:active"]);
function updateActive(i) {
  emit("update:active", i);
}
</script>

<template>
  <div class="tabs">
    <div role="tablist" class="tab-list">
      <button
        v-for="(label, i) in tabs"
        :key="label"
        role="tab"
        :aria-selected="i === active"
        :class="{ active: i === active }"
        @click="updateActive(i)"
      >
        {{ label }}
      </button>
    </div>
    <div class="tab-panels">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.tab-list {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}

.tab-list button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
  color: gray;
}

.tab-list button.active {
  border-bottom: 2px solid #000;
  color: black;
}

.tab-panels {
  padding: 1rem 0;
}
</style>
