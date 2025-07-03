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
</style>
