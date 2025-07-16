<script setup>
defineProps({ text: String });
</script>

<template>
  <p class="description">{{ text }}</p>
</template>

<style scoped>
.description {
  color: #555;
}

@media (max-width: 768px) {
  .description {
    font-size: 14px;
  }
}
</style>
