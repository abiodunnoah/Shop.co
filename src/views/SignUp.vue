<script setup>
import { ref } from "vue";
import { NSpin } from "naive-ui";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import { mapAuthError } from "@/utils/authErrors";

const router = useRouter();
const auth = useAuthStore();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const error = ref(null);
const isLoading = ref(false);
const info = ref("");

async function submit() {
  error.value = null;
  info.value = "";

  if (!email.value || !password.value) {
    error.value = "Email and password are required.";
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = "passwords do not match.";
    return;
  }

  if (password.value.length < 8) {
    error.value = "Password must be at least 8 characters long.";
    return;
  }

  if (password.value.toLowerCase() === "password" || password.value === "12345678") {
    error.value = "Choose a stronger password.";
    return;
  }

  isLoading.value = true;

  try {
    await auth.register(email.value, password.value);

    info.value = "Account created - you are now signed in.";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";

    router.push("/");
  } catch (err) {
    error.value = mapAuthError(err.code) || err?.message || "Sign up failed.";
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <main class="register-root">
    <div class="form-container bg-gray-100">
      <h2 class="form-title">Register</h2>

      <form @submit.prevent="submit" class="form-content" autocomplete="on">
        <div class="form-group">
          <label for="email" class="form-label">Email:</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="form-input"
            required
            autocomplete="email"
          />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Password:</label>
          <div class="input-wrapper">
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              class="form-input"
              required
              minlength="8"
              autocomplete="new-password"
            />
            <button type="button" @click="showPassword = !showPassword" class="toggle-password">
              {{ showPassword ? "Hide" : "Show" }}
            </button>
          </div>
        </div>

        <div class="form-group">
          <label for="confirm-password" class="form-label">Confirm Password:</label>
          <div class="input-wrapper">
            <input
              id="confirm-password"
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              class="form-input"
              required
              minlength="8"
              autocomplete="new-password"
            />
            <button
              type="button"
              class="toggle-password"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              {{ showConfirmPassword ? "Hide" : "Show" }}
            </button>
          </div>
        </div>

        <div v-if="error" class="form-error">{{ error }}</div>
        <div v-if="info" class="form-info">{{ info }}</div>

        <button
          type="submit"
          class="submit-button bg-blue-600 hover:bg-blue-700 flex justify-center items-center"
          :disabled="isLoading"
        >
          <template v-if="isLoading"> <NSpin size="small" class="mr-2" /> Signing Up... </template>
          <template v-else>Sign Up</template>
        </button>
      </form>

      <p class="switch-login">
        Already have an account?
        <router-link to="/login" class="login-link">Login here</router-link>
      </p>
    </div>
  </main>
</template>

<style scoped>
.register-root {
  color: #181818;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
}

.form-container {
  border: 1px solid #cccccc;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.form-title {
  /* text-align: center; */
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #181818;
}

.form-content {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: #181818;
}

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

.input-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #181818;
  cursor: pointer;
  font-size: 14px;
}

.form-error {
  margin-bottom: 16px;
  font-size: 13px;
  color: #e53e3e;
  text-align: center;
}

.submit-button {
  color: #ffffff;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.switch-login {
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
  color: #181818;
}

.login-link {
  color: #3182ce;
  text-decoration: none;
  margin-left: 4px;
}

.login-link:hover {
  color: #2b6cb0;
  text-decoration: underline;
}

@media (max-width: 400px) {
  .form-container {
    padding: 16px;
  }

  .form-title {
    font-size: 20px;
  }

  .submit-button {
    font-size: 14px;
    padding: 8px 14px;
  }
}

@media (min-width: 768px) {
  .form-container {
    padding: 32px;
  }

  .form-title {
    font-size: 26px;
  }

  .submit-button {
    font-size: 17px;
    padding: 12px 20px;
  }
}
</style>
