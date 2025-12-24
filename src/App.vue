<script setup>
import { NMessageProvider } from "naive-ui";
</script>

<template>
  <n-message-provider>
    <div class="container">
      <RouterView />
    </div>
  </n-message-provider>
</template>

<style scoped>
.container {
  margin: 0 auto;
  /* max-width: 1440px; */
  width: 100%;
}
</style>
