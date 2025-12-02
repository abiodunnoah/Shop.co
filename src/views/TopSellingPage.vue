<script setup>
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/FooterView.vue";
import products from "@/data/products";

const topSelling = products
  .filter((p) => !!p.isTop)
  .slice()
  .sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return new Date(b.date) - new Date(a.date);
  });
</script>

<template>
  <header>
    <SignupBonus />
  </header>

  <section>
    <NavBar />
  </section>

  <main class="container">
    <nav class="breadcrumb" aria-label="breadcrumb">
      <router-link to="/">Home</router-link> ›
      <span class="current">Top Selling</span>
    </nav>

    <h1 class="page-title">Top Selling</h1>
    <p class="page-lead">Our best-selling pieces loved by customers.</p>

    <section class="products">
      <div class="grid">
        <router-link
          v-for="product in topSelling"
          :key="product.id"
          :to="{ name: 'ProductDetail', params: { id: product.id } }"
          class="card"
        >
          <div class="image-wrap">
            <img
              :src="product.image || `https://picsum.photos/seed/top-${product.id}/800/800`"
              :alt="product.name || 'Product image'"
              class="card-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>

            <div class="meta-row">
              <div class="rating" :aria-label="`${product.rating} out of 5`">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="star"
                  :class="{ muted: n > Math.floor(product.rating) }"
                  >★</span
                >
                <span class="rating-text">{{ product.rating }}/5</span>
              </div>

              <div class="price">
                <span class="price-current">₦{{ product.priceCurrent }}</span>
                <span v-if="product.priceOriginal" class="price-original"
                  >₦{{ product.priceOriginal }}</span
                >
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div v-if="!topSelling.length" class="empty">No top selling items found.</div>
    </section>
  </main>

  <Footer />
</template>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

/* Breadcrumb */
.breadcrumb {
  margin-bottom: 1rem;
  color: #666;
  font-size: 14px;
}
.breadcrumb .current {
  font-weight: 600;
  margin-left: 0.35rem;
}

/* Title & lead */
.page-title {
  font-size: 2rem;
  margin-bottom: 0.25rem;
  font-weight: 900;
}
.page-lead {
  color: #666;
  margin-bottom: 1.25rem;
}

/* Grid layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  align-items: start;
}

/* Card */
.card {
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(18, 24, 32, 0.04);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(18, 24, 32, 0.08);
}

/* Equal image box */
.image-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Body */
.card-body {
  padding: 0.9rem 0.9rem 1rem 0.9rem;
}
.card-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  line-height: 1.2;
  min-height: 2.4em;
}

/* meta row */
.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.95rem;
  color: #333;
}
.star {
  color: #f5a623;
  font-size: 1rem;
  line-height: 1;
}
.star.muted {
  color: #ddd;
}
.rating-text {
  color: #666;
  font-size: 0.85rem;
  margin-left: 0.25rem;
}

/* price */
.price-current {
  font-size: 16px;
  font-weight: 800;
  color: #111;
}
.price-original {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin-left: 0.5rem;
}

/* empty state */
.empty {
  padding: 2rem;
  text-align: center;
  color: #666;
}

/* Responsive */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
  .page-title {
    font-size: 1.6rem;
  }
}
@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 0.75rem;
  }
  .card-title {
    min-height: 2.2em;
    font-size: 0.95rem;
  }
}
</style>
