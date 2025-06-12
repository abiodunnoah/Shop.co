<script setup>
import StarIconSmall from "@/assets/icons/StarIconSmall.png";
import StarIconBig from "@/assets/icons/StarIconBig.png";
import HeaderImage from "@/assets/icons/Image.jpg";
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <!-- Left column -->
      <div class="hero__text">
        <h1>FIND CLOTHES THAT MATCH YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments, designed to bring out
          your individuality and cater to your sense of style.
        </p>
        <button class="btn">Shop Now</button>

        <div class="hero__stats">
          <div class="stat">
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div class="stat">
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div class="stat">
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div class="hero__image-wrapper">
        <img :src="HeaderImage" alt="Models wearing clothes" class="hero__image" />

        <!-- Decorative stars -->
        <img :src="StarIconSmall" alt="" class="star star--small" />
        <img :src="StarIconBig" alt="" class="star star--big" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: #f2f0f1;
  padding: 0 40px;
  display: flex;
  justify-content: center;
}

.hero__content {
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  min-height: 663px;
}

/* Left column */
.hero__text {
  flex: 1;
  max-width: 600px;
}

.hero__text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero__text p {
  margin-bottom: 1.5rem;
  line-height: 1.5;
  color: #555;
}

.btn {
  background: #000;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  margin-bottom: 2rem;
}

.hero__stats {
  display: flex;
  gap: 2rem;
}

.stat h2 {
  font-size: 2rem;
  margin: 0;
}

.stat p {
  margin: 0.25rem 0 0;
  color: #777;
}

.hero__image-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
}

.hero__image {
  max-height: 600px;
  object-fit: contain;
}

/* Decorative stars */
.star {
  position: absolute;
  pointer-events: none;
}

.star--small {
  top: 20%;
  right: 30%;
  width: 50px;
  height: 50px;
}

.star--big {
  bottom: 15%;
  right: 10%;
  width: 80px;
  height: 80px;
}
</style>
