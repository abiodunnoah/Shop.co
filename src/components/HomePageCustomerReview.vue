<script setup>
import VerifiedIcon from "@/assets/icons/VerifiedIcon.png";
import { ref } from "vue";
import testimonials from "@/data/testimonials.js";

const carousel = ref(null);

function scrollLeft() {
  carousel.value.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
  carousel.value.scrollBy({ left: +300, behavior: "smooth" });
}
</script>

<template>
  <section class="px-10 py-10 m">
    <!-- Header with title and arrows -->
    <div class="flex items-end justify-between gap-2 mb-6">
      <h2 class="section-title">OUR HAPPY CUSTOMERS</h2>
      <div class="space-x-4 flex-shrink-0">
        <button @click="scrollLeft" aria-label="Previous">
          <img src="~@/assets/icons/PrevArrow.png" alt="←" class="w-6 h-6" />
        </button>
        <button @click="scrollRight" aria-label="Next">
          <img src="~@/assets/icons/NextArrow.png" alt="→" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Carousel -->
    <div ref="carousel" class="flex space-x-6 overflow-x-auto no-scrollbar pb-2">
      <div
        v-for="(testimonial, i) in testimonials"
        :key="i"
        class="flex-none w-80 bg-white rounded-2xl p-6 border border-gray-200"
      >
        <!-- Stars -->
        <div class="flex items-center space-x-1 mb-4">
          <span
            v-for="n in 5"
            :key="n"
            class="text-xl"
            :class="n <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
          >
            ★
          </span>
        </div>
        <!-- Name + Verified -->
        <h4 class="flex items-center text-lg font-semibold mb-3">
          {{ testimonial.name }}
          <img :src="VerifiedIcon" alt="Verified" class="w-5 h-5 ml-2" />
        </h4>
        <!-- Quote -->
        <p class="text-gray-600 text-sm leading-relaxed">
          {{ testimonial.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style>
/* hide scrollbar for Webkit */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* hide scrollbar for other browsers */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.section-title {
  font-size: 40px;
  font-weight: 900;
}

@media (max-width: 767px) {
  /* 1) Shrink the section title */
  .section-title {
    font-size: 1.45rem;
    line-height: 1.2;
    flex: 1 1 auto;
    white-space: normal;
    margin: 0;
  }

  /* 2) Buttons remain aligned at bottom */
  .space-x-4 {
    display: flex;
    align-items: flex-end;
  }

  .space-x-4 > button {
    padding: 0.25rem;
  }

  .space-x-4 > button img {
    width: 1rem;
    height: 1rem;
  }

  /* 3) Tweak the carousel container spacing */
  .overflow-x-auto {
    gap: 0.5rem; /* less space between cards */
    padding-bottom: 0.5rem;
  }

  /* 4) Reduce each card’s size and padding */
  .flex-none.w-80 {
    width: 16rem !important; /* w-64 */
    padding: 1rem !important; /* p-4 */
  }

  /* 5) Tighten inner text */
  .flex-none.w-80 h4 {
    font-size: 0.875rem; /* smaller name */
  }
  .flex-none.w-80 p {
    font-size: 0.75rem; /* smaller body text */
    line-height: 1.3;
  }
  .flex-none.w-80 .text-xl {
    font-size: 1rem; /* smaller stars */
  }
}
</style>
