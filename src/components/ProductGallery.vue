<script setup>
defineProps({
  images: { type: Array, required: true },
  current: { type: Number, default: 0 },
});
</script>

<template>
  <div class="product-gallery">
    <!-- Thumbnails -->
    <ul class="thumbnails">
      <li v-for="(img, i) in images" :key="i">
        <button
          class="thumb-btn"
          :class="{ selected: i === current }"
          @click="$emit('update:current', i)"
        >
          <img :src="img" alt="" />
        </button>
      </li>
    </ul>

    <!-- Main image -->
    <div class="main-image">
      <img :src="images[current]" alt="Selected view" />
    </div>
  </div>
</template>

<style scoped>
.product-gallery {
  display: flex;
  gap: 1rem;
}
.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.thumb-btn {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
.thumb-btn.selected {
  outline: 2px solid #000;
}
.thumb-btn img {
  width: 3rem;
  display: block;
}
.main-image img {
  width: 100%;
  object-fit: contain;
}
</style>
