<script setup>
import { ref } from "vue";
import FilterIcon from "@/assets/icons/FilterIcon.png";
import Collapsible from "./CollapsibleView.vue";

const price = ref({
  min: 0,
  max: 50000,
});
const colorOptions = [
  "green",
  "red",
  "yellow",
  "orange",
  "cyan",
  "blue",
  "purple",
  "pink",
  "white",
  "black",
];
const sizeOptions = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"];

const size = ref(null);
const selectedColor = ref(null);

function captureFilters() {
  return { price: price.value, color: selectedColor.value, size: size.value };
}
</script>

<template>
  <aside class="sidebar">
    <div class="filter-container">
      <h2 class="sidebar-title">Filters</h2>
      <img :src="FilterIcon" alt="Filter Icon" class="filter-icon" />
    </div>

    <!-- Wears -->
    <Collapsible title="Wears">
      <ul>
        <li>T‑shirts</li>
        <li>Shorts</li>
        <li>Shirts</li>
        <li>Hoodie</li>
        <li>Jeans</li>
      </ul>
    </Collapsible>

    <!-- Price Slider -->
    <Collapsible title="Price">
      <div class="price-range">
        <input type="range" min="0" max="50000" step="1000" v-model="price.min" />
        <input type="range" min="0" max="50000" step="1000" v-model="price.max" />
        <div>₦{{ price.min }} - ₦{{ price.max }}</div>
      </div>
    </Collapsible>

    <!-- colors -->
    <Collapsible title="Colors">
      <div class="colors">
        <button
          v-for="color in colorOptions"
          :key="color"
          :style="{ background: color }"
          disabled
          aria-disabled="true"
        ></button>
      </div>
    </Collapsible>

    <!-- Sizes -->
    <Collapsible title="Size">
      <div class="sizes">
        <button
          v-for="option in sizeOptions"
          :key="option"
          :class="{ selected: option === size }"
          @click="size = option"
          disabled
        >
          {{ option }}
        </button>
      </div>
    </Collapsible>

    <!-- Dress Style -->
    <Collapsible title="Dress Style">
      <ul>
        <li>Casual</li>
        <li>Formal</li>
        <li>Party</li>
        <li>Gym</li>
      </ul>
    </Collapsible>

    <button class="apply-btn" @click="$emit('apply', captureFilters())">Apply Filters</button>
  </aside>
</template>

<style scoped>
.sidebar {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.filter-container {
  display: flex;
  justify-content: space-between;
}

.filter-icon {
  width: 2rem;
  height: 2rem;
}

.apply-btn {
  margin-top: auto;
  background: #000;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 9999rem;
  cursor: pointer;
}

.colors button {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 1px solid #c5c3c3;
  cursor: pointer;
}

.colors button[disabled] {
  opacity: 0.4;
  cursor: not-allowed;
}

.sizes button {
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999rem;
  background: #f0f0f0;
  cursor: pointer;
}

.sizes button[disabled] {
  opacity: 0.4;
  cursor: not-allowed;
}

.sizes button.selected {
  background: #000;
  color: #fff;
}
</style>
