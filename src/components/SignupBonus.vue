<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import CancelButton from "@/assets/icons/cancelButton.png";

const route = useRoute();
const hidden = ref(localStorage.getItem("signup-banner-dismissed") === "1");

const showBanner = computed(
  () => !hidden.value && route.name !== "Login" && route.name !== "Register"
);

function dismiss() {
  hidden.value = true;
  localStorage.setItem("signup-banner-dismissed", "1");
}
</script>

<template>
  <div v-if="showBanner" class="container">
    <div class="container-wrapper">
      <p class="signup-text">
        Sign up and get 20% off your first order.
        <router-link to="/register" class="signup-link"><span>Sign Up Now</span></router-link>
      </p>
      <button type="button" class="cancel-button" @click="dismiss" aria-label="Dismiss announcement">
        <img :src="CancelButton" alt="Dismiss" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: #000000;
  color: #ffffff;
  /* max-width: 1440px; */
  width: 100%;
  height: 34px;
}

.container-wrapper {
  position: relative;
  color: #fff;
  height: 3rem;
  line-height: 3rem;
}

.signup-text {
  font-size: 12px;
  width: 351px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  margin-top: -5px;
}

.signup-link {
  color: inherit;
  text-decoration: underline;
}

.signup-link span {
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
  line-height: 100%;
}

.cancel-button {
  position: absolute;
  right: 3rem;
  top: 40%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0;
}

.cancel-button img {
  width: 13px;
  display: block;
}

@media (max-width: 768px) {
  .cancel-button {
    display: none;
  }

  .signup-text {
    font-size: 10px;
  }

  .container-wrapper {
    text-align: center;
  }
}
</style>
