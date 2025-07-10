<script setup>
import { ref } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  initial: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:currentImage"]);
const current = ref(props.initial);

function select(i) {
  current.value = i;
  emit("update:currentImage", i);
}
</script>

<template>
  <div class="product-media">
    <!-- Thumbnails -->
    <ul class="thumbnails">
      <li v-for="(img, i) in images" :key="i">
        <button class="thumb-btn" :class="{ selected: i === current }" @click="select(i)">
          <img :src="img" alt="" class="thumb-img" />
        </button>
      </li>
    </ul>

    <!-- Main preview -->
    <div class="preview">
      <img :src="images[current]" alt="Preview" class="preview-img" />
    </div>
  </div>
</template>

<style scoped>
.product-media {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  width: 50%;
  max-width: 1400px;
  margin: 0 auto;
}

/* Thumbnails column */
.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  /* fixed width for consistency */
  width: 10rem;
}

/* Thumbnail button wrapper */
.thumb-btn {
  width: 100%;
  aspect-ratio: 1 / 1;
  /* padding: 0.5rem; */
  background: #f5f4f2;
  border: 2px solid transparent;
  border-radius: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, box-shadow 0.2s;
}

/* Selected thumbnail gets a bold outline */
.thumb-btn.selected {
  border-color: #000;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
}

/* The thumbnail image */
.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
}

/* Main preview area */
.preview {
  flex: 1;
  /* make the preview take up the rest of the space */
  background: #f5f4f2;
  border-radius: 2rem;
  /* padding: 2rem; */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Preview image */
.preview-img {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 1.5rem;
}
</style>
