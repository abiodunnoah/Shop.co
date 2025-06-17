<script setup>
import VerifiedIcon from "@/assets/icons/VerifiedIcon.png";
import { ref } from "vue";

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
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-5xl font-extrabold">OUR HAPPY CUSTOMERS</h2>
      <div class="space-x-4">
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
        v-for="(testimonial, i) in [
          {
            name: 'Sarah M.',
            text: `“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
          },
          {
            name: 'Alex K.',
            text: `“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
          },
          {
            name: 'James L.',
            text: `“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
          },
          {
            name: 'Mooen',
            text: `“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
          },
        ]"
        :key="i"
        class="flex-none w-80 bg-white rounded-2xl p-6 border border-gray-200"
      >
        <!-- Stars -->
        <div class="flex items-center space-x-1 mb-4">
          <span class="text-yellow-400 text-xl">★</span>
          <span class="text-yellow-400 text-xl">★</span>
          <span class="text-yellow-400 text-xl">★</span>
          <span class="text-yellow-400 text-xl">★</span>
          <span class="text-yellow-400 text-xl">★</span>
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
</style>
