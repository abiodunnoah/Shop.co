<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
});

const pages = computed(() => {
  return Array.from({ length: props.totalPages }, (_, i) => i + 1);
});
</script>

<template>
  <div class="pagination">
    <div>
      <button :disabled="currentPage === 1" @click="$emit('change-page', currentPage - 1)">
        ← Previous
      </button>
    </div>

    <div>
      <button
        v-for="n in pages"
        :key="n"
        :class="{ active: n === currentPage }"
        @click="$emit('change-page', n)"
      >
        {{ n }}
      </button>
    </div>

    <div>
      <button :disabled="currentPage === totalPages" @click="$emit('change-page', currentPage + 1)">
        Next →
      </button>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.pagination button {
  background: transparent;
  border: 1px solid #ddd;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
.pagination button.active {
  background: #000;
  color: #fff;
  border-color: #000;
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
