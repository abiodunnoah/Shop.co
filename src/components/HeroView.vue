<script setup>
import StarIconSmall from "@/assets/icons/StarIconSmall.png";
import StarIconBig from "@/assets/icons/StarIconBig.png";
import HeaderImage from "@/assets/images/Image.jpg";
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <!-- Left column -->
      <div class="hero__text">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments, designed to bring out
          your individuality and cater to your sense of style.
        </p>
        <div class="button"><button class="btn">Shop Now</button></div>

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
  /* height: 663px; */
}

.hero__content {
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  min-height: 500px;
}

/* Left column */
.hero__text {
  flex: 1;
  max-width: 663px;
}

.hero__text h1 {
  margin-bottom: 1rem;
  font-size: 50px;
  font-family: sans-serif;
  font-weight: 900;
  line-height: 60px;
}

.hero__text p {
  margin-bottom: 1.5rem;
  line-height: 1.5;
  color: #555;
  font-size: 16px;
}

.btn {
  background: #000;
  color: #fff;
  padding: 0.75rem 3rem;
  border: none;
  border-radius: 99px;
  cursor: pointer;
  margin-bottom: 2rem;
}

.hero__stats {
  display: flex;
  /* gap: 4rem; */
}

.stat {
  padding: 0 1.5rem;
}

.stat + .stat {
  border-left: 1px solid #0000001a;
}

.stat h2 {
  font-size: 2rem;
  font-weight: 700;
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
  top: 35%;
  right: 77%;
  width: 45px;
  height: 45px;
}

.star--big {
  top: 15%;
  right: 15%;
  width: 75px;
  height: 75px;
}

@media (max-width: 767px) {
  .hero {
    padding: 0 13px;
  }

  .hero__content {
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }

  .hero__text {
    width: 100%;
  }

  .hero__text h1 {
    margin-bottom: 0.5rem;
    font-size: 35px;
    line-height: 35px;
  }

  .hero__text p {
    font-size: 13px;
  }

  .hero__image {
    max-height: 350px;
  }

  .btn {
    padding: 0.75rem 6.5rem;
    margin-bottom: 2rem;
  }

  .button {
    text-align: center;
  }

  .hero__stats {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
  }

  .hero__stats .stat {
    padding: 0.5rem 0;
    text-align: center;
  }

  .hero__stats .stat + .stat {
    border-left: none;
  }

  .hero__stats .stat:nth-child(3) {
    grid-column: 1 / -1;
    margin-top: 0.5rem;
  }
  .hero__image-wrapper {
    position: relative;
    background: #fff;
    border-radius: 1rem;
    overflow: hidden;
    width: 100%;
    max-width: 320px;
    height: 320px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero__image {
    width: auto;
    height: 100%;
    object-fit: cover;
  }

  .star--small {
    top: 30%;
    right: 80%;
    width: 40px;
    height: 40px;
  }

  .star--big {
    top: 12%;
    right: 5%;
    width: 60px;
    height: 60px;
  }
}
</style>
