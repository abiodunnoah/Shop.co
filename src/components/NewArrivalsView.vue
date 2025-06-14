<script setup>
import cloth1 from "@/assets/images/cloth 1.png";
import cloth2 from "@/assets/images/cloth 2.png";
import cloth3 from "@/assets/images/cloth 3.png";
import cloth4 from "@/assets/images/cloth 4.png";
import cloth5 from "@/assets/images/cloth 5.png";
import cloth6 from "@/assets/images/cloth 6.png";
import cloth7 from "@/assets/images/cloth 7.png";
import cloth8 from "@/assets/images/cloth 8.png";
import casual from "@/assets/images/casual.png";
import formal from "@/assets/images/formal.png";
import party from "@/assets/images/party.png";
import gym from "@/assets/images/gym.png";
</script>

<template>
  <section class="item-section">
    <h2 class="section-title">NEW ARRIVALS</h2>
    <div class="grid">
      <!-- Item 1 -->
      <div class="card">
        <img :src="cloth1" alt="T-shirt with Tape Details" class="card__image" />
        <h3 class="card__name">T-shirt with Tape Details</h3>

        <div class="card__rating">
          <!-- 4 full stars + half star -->
          <span class="star">★</span><span class="star">★</span> <span class="star">★</span
          ><span class="star">★</span>
          <span class="star half">★</span>
          <span class="rating-text">4.5/<span class="total-rating-text">5</span></span>
        </div>

        <div class="card__price">
          <span class="price-current">$120</span>
        </div>
      </div>

      <!-- Item 2 -->
      <div class="card">
        <img :src="cloth2" alt="Skinny Fit Jeans" class="card__image" />
        <h3 class="card__name">Skinny Fit Jeans</h3>

        <div class="card__rating">
          <span class="star">★</span><span class="star">★</span> <span class="star">★</span
          ><span class="star half">★</span>
          <!-- <span class="star empty">★</span> -->
          <span class="rating-text">3.5/<span class="total-rating-text">5</span></span>
        </div>

        <div class="card__price">
          <span class="price-current">$240</span>
          <span class="price-original">$260</span>
          <span class="badge">-20%</span>
        </div>
      </div>

      <!-- Item 3 -->
      <div class="card">
        <img :src="cloth3" alt="Checkered Shirt" class="card__image" />
        <h3 class="card__name">Checkered Shirt</h3>

        <div class="card__rating">
          <span class="star">★</span><span class="star">★</span> <span class="star">★</span
          ><span class="star">★</span>
          <span class="star half">★</span>
          <span class="rating-text">4.5/<span class="total-rating-text">5</span></span>
        </div>

        <div class="card__price">
          <span class="price-current">$180</span>
        </div>
      </div>

      <!-- Item 4 -->
      <div class="card">
        <img :src="cloth4" alt="Sleeve Striped T-shirt" class="card__image" />
        <h3 class="card__name">Sleeve Striped T-shirt</h3>

        <div class="card__rating">
          <span class="star">★</span><span class="star">★</span> <span class="star">★</span
          ><span class="star">★</span>
          <span class="star half">★</span>
          <span class="rating-text">4.5/<span class="total-rating-text">5</span></span>
        </div>

        <div class="card__price">
          <span class="price-current">$130</span>
          <span class="price-original">$160</span>
          <span class="badge">-30%</span>
        </div>
      </div>
    </div>

    <div class="view-all-wrapper">
      <button class="btn-outline">View All</button>
    </div>
  </section>

  <!-- Top selling items -->
  <section class="item-section-2">
    <h2 class="section-title">TOP SELLING</h2>
    <div class="grid">
      <!-- Item 1 -->
      <div class="card">
        <img :src="cloth5" alt="Vertical Stripped Shirt" class="card__image" />
        <h3 class="card__name">Vertical Stripped Shirt</h3>

        <div class="card__rating">
          <!-- 4 full stars + half star -->
          <span class="star">★</span><span class="star">★</span> <span class="star">★</span
          ><span class="star">★</span> <span class="star">★</span>
          <span class="rating-text">5.0/<span class="total-rating-text">5</span></span>
        </div>

        <div class="card__price">
          <span class="price-current">$212</span>
          <span class="price-original">$232</span>
          <span class="badge">-20%</span>
        </div>
      </div>

      <!-- Item 2 -->
      <div class="card">
        <img :src="cloth6" alt="Courage Graphic T-shirt" class="card__image" />
        <h3 class="card__name">Courage Graphic T-shirt</h3>

        <div class="card__rating">
          <span class="star">★</span><span class="star">★</span> <span class="star">★</span
          ><span class="star">★</span>
          <!-- <span class="star empty">★</span> -->
          <span class="rating-text">4.0/<span class="total-rating-text">5</span></span>
        </div>

        <div class="card__price">
          <span class="price-current">$145</span>
        </div>
      </div>

      <!-- Item 3 -->
      <div class="card">
        <img :src="cloth7" alt="Loose Fit Bermuda Shorts" class="card__image" />
        <h3 class="card__name">Loose Fit Bermuda Shorts</h3>

        <div class="card__rating">
          <span class="star">★</span><span class="star">★</span> <span class="star">★</span>
          <span class="rating-text">3.0/<span class="total-rating-text">5</span></span>
        </div>

        <div class="card__price">
          <span class="price-current">$80</span>
        </div>
      </div>

      <!-- Item 4 -->
      <div class="card">
        <img :src="cloth8" alt="Faded Skinny Jeans" class="card__image" />
        <h3 class="card__name">Faded Skinny Jeans</h3>

        <div class="card__rating">
          <span class="star">★</span><span class="star">★</span> <span class="star">★</span
          ><span class="star">★</span>
          <span class="star half">★</span>
          <span class="rating-text">4.5/<span class="total-rating-text">5</span></span>
        </div>

        <div class="card__price">
          <span class="price-current">$210</span>
        </div>
      </div>
    </div>

    <div class="view-all-wrapper">
      <button class="btn-outline">View All</button>
    </div>
  </section>

  <section class="browse-panel-container">
    <div class="browse-panel">
      <h2 class="browse-panel__title">BROWSE BY DRESS STYLE</h2>

      <div class="browse-panel__grid">
        <div class="card">
          <span class="card__label">Casual</span>
          <img :src="casual" alt="Casual style" class="card__img" />
        </div>
        <div class="card">
          <span class="card__label">Formal</span>
          <img :src="formal" alt="Formal style" class="card__img" />
        </div>
        <div class="card">
          <span class="card__label">Party</span>
          <img :src="party" alt="Party style" class="card__img" />
        </div>
        <div class="card">
          <span class="card__label">Gym</span>
          <img :src="gym" alt="Gym style" class="card__img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.item-section {
  padding: 4rem 2rem;
  border-bottom: 1px solid #ddd;
  /* padding: 0 1rem; */
}

.item-section-2 {
  padding: 4rem 2rem;
}

.section-title {
  text-align: center;
  font-display: sans-serif;
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* gap: 1.25rem; */
}

.card {
  /* background: #f7f6f6; */
  border-radius: 1rem;
  padding: 0.75rem;
  /* text-align: center; */
}

.card__image {
  width: 100%;
  border-radius: 0.75rem;
  object-fit: contain;
  margin-bottom: 0.75rem;
}

.card__name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.25rem 0;
}

.card__rating {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.25rem;
  margin-bottom: 0.25rem;
}

.star {
  color: #f5a623;
  font-size: 1.25rem;
  line-height: 1;
}

.star.empty {
  color: #ddd;
}

.star.half {
  /* simple half-star mask */
  background: linear-gradient(90deg, #f5a623 50%, #ddd 50%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.rating-text {
  font-size: 14px;
  margin-left: 0.25rem;
}

.total-rating-text {
  color: #555;
  font-size: 14px;
}

.card__price {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.5rem;
}

.price-current {
  font-size: 20px;
  font-weight: 800;
}

.price-original {
  font-size: 20px;
  color: #999;
  text-decoration: line-through;
}

.badge {
  background: #ff33331a;
  color: #fc2b2b;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
}

.view-all-wrapper {
  text-align: center;
  margin-top: 2rem;
}

.btn-outline {
  border: 1px solid #ccc;
  background: transparent;
  padding: 0.5rem 3.5rem;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
}

.browse-panel-container {
  margin: 4rem 2rem;
}

.browse-panel {
  background: #f2f0f1;
  border-radius: 1rem;
  padding: 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.browse-panel__title {
  text-align: center;
  font-size: 48px;
  font-weight: 900;
  font-family: sans-serif;
  margin-bottom: 1.5rem;
}

.browse-panel__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.card {
  position: relative;
  background: #ffffff;
  border-radius: 0.75rem;
  overflow: hidden;
}

.card__label {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
  z-index: 1;
}

.card__img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
