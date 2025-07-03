<script setup>
const props = defineProps({ faq: Object });
</script>

<template>
  <div class="faq-card">
    <p class="q">{{ faq.q }}</p>
    <p class="a">{{ faq.a }}</p>
  </div>
</template>

<style scoped>
.faq-card {
  margin-bottom: 1rem;
}
.q {
  font-weight: 600;
}
</style>
