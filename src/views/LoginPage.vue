<script setup>
import { ref } from "vue";
import { NSpin } from "naive-ui";

const showPassword = ref(false);
const error = ref(null);
const email = ref("");
const password = ref("");
const isSubmitting = ref("");
</script>

<template>
  <main class="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md p-6 sm:p-8 md:p-10 rounded-lg shadow-lg bg-gray-100">
      <div class="mb-10">
        <h2 class="text-2xl font-bold">Login</h2>
      </div>

      <form @submit.prevent="submit">
        <div class="pb-4">
          <label for="email" class="block pb-1">Email:</label>
          <input type="email" v-model="email" class="w-full form-input" required />
        </div>

        <div class="pb-4">
          <label for="password" class="block pb-1">Password:</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              class="w-full pr-10 form-input"
              required
            />
            <button
              @click="showPassword = !showPassword"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-grey-500 hover:text-gray-700 focus:outline-none cursor-pointer"
            >
              {{ showPassword ? "Hide" : "Show" }}
            </button>
          </div>
        </div>

        <div v-if="error" class="pb-4 text-red-500 text-sm">{{ error }}</div>

        <div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer"
            :disabled="isSubmitting"
          >
            <template v-if="isSumbitting">
              <NSpin size="small" class="mr-2" /> Signing In...
            </template>
            <template v-else> Sign In </template>
          </button>
        </div>
      </form>
      <div class="pt-4">
        <p class="text-sm text-center">
          Don’t have an account?
          <router-link to="/register" class="text-blue-600 hover:underline"
            >Register here</router-link
          >
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.form-input {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  color: #181818;
  background-color: transparent;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.2);
  color: #181818;
  background-color: #ffff;
  transition: border-color 0.2s, background-color 0.2s;
}
</style>
