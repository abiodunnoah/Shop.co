<script setup>
import CancelButton from "@/assets/icons/cancelButton.png";
</script>

<template>
  <div class="container">
    <div class="container-wrapper">
      <p class="signup-text">Sign up and get 20% off your first order. <span>Sign Up Now</span></p>
      <div class="cancel-button-wrapper">
        <img :src="CancelButton" alt="cancel button" class="cancel-button" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: #000000;
  color: #ffffff;
  max-width: 1440px;
  height: 34px;
}

.container-wrapper {
  position: relative;
  color: #fff;
  height: 3rem;
  line-height: 3rem;
  /* font-family: integ; */
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

span {
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
  line-height: 100%;
}

.cancel-button {
  width: 13px;
  position: absolute;
  right: 3rem;
  top: 40%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
}
</style>
