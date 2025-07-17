<script setup>
import { ref } from "vue";
import Collapsible from "./CollapsibleView.vue";

const price = ref({
  min: 50,
  max: 200,
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

function captureFilters() {
  return { price: price.value, color: null, size: size.value };
}
</script>

<template>
  <aside class="sidebar">
    <h2 class="sidebar-title">Filters</h2>

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
        <input type="range" min="0" max="500" step="10" v-model="price.min" />
        <input type="range" min="0" max="500" step="10" v-model="price.max" />
        <div>${{ price.min }} - ${{ price.max }}</div>
      </div>
    </Collapsible>

    <!-- colors -->
    <Collapsible title="Colors">
      <div class="colors">
        <button v-for="color in colorOptions" :key="color" :style="{ background: color }"></button>
      </div>
    </Collapsible>

    <!-- Sizes -->
    <Collapsible title="Size">
      <div class="sizes">
        <button
          v-for="size in sizeOptions"
          :key="size"
          :class="{ selected: size === size }"
          @click="size = size"
        >
          {{ size }}
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

<style scope>
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

.sizes button {
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999rem;
  background: #f0f0f0;
  cursor: pointer;
}

.sizes button.selected {
  background: #000;
  color: #fff;
}
</style>
