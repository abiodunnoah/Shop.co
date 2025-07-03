<script setup>
import { computed } from "vue";
const props = defineProps({
  reviews: { type: Array, required: true },
  sortOrder: { type: String, default: "lastest" },
});

const sortedReviews = computed(() => {
  const revs = [...props.reviews];
  if (props.sortOrder === "hightes") return revs.sort((a, b) => b.rating - a.rating);
  if (props.sortOrder === "lowest") return revs.sort((a, b) => a.rating - b.rating);
  return revs.sort((a, b) => new Date(b.date) - new Date(a.date));
});

// function fetchMoreReview() {
//   console.log("Load more reviews clicked");
// }
</script>

<template>
  <div class="review-section space-y-6 mb-20">
    <!-- Header & Controls -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <h2 class="text-lg font-semibold">
        All Reviews <span class="text-xs text-gray-400">({{ reviews.length }})</span>
      </h2>
      <div class="flex items-center space-x-3">
        <button
          @click="$emit('filter')"
          aria-label="Sort"
          class="p-2 hover:bg-gray-100 rounded-full bg-gray-300"
        >
          <!-- sort icon -->
          <svg class="w-5 h-5 text-gray-600 text-xs" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M3 5h14M6 10h8M9 15h2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <!-- <select v-model="sortOrder" @change="$emit('update:sortOrder', sortOrder)"> -->
        <select
          class="px-4 py-2 border text-xs rounded-2xl bg-gray-300 border-none focus:outline-none"
        >
          <option value="latest">Latest</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
        <button
          @click="$emit('write')"
          class="btn btn-primary px-4 py-2 bg-black text-white rounded-3xl text-xs cursor-pointer"
        >
          Write a Review
        </button>
      </div>
    </div>

    <!-- Reviews Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="r in sortedReviews"
        :key="r.id"
        class="review-card p-5 border rounded-xl border-gray-200 hover:shadow-sm transition relative"
      >
        <div class="flex items-center mb-2">
          <span
            v-for="n in 5"
            :key="n"
            class="text-xl"
            :class="n <= Math.round(r.rating) ? 'text-yellow-400' : 'text-gray-300'"
            >★</span
          >
          <!-- <span class="ml-2 text-sm text-gray-600"> {{ r.rating.toFixed(1) }}/5 </span> -->
        </div>

        <div class="flex items-center mb-3 space-x-2">
          <h3 class="font-semibold">{{ r.author }}</h3>
          <img src="@/assets/icons/VerifiedIcon.png" alt="Verified" class="w-4 h-4 ml-1" />
        </div>

        <p class="text-gray-500 mb-3 text-xs">{{ r.text }}</p>
        <div class="mt-3">
          <p class="text-xs text-gray-700">Posted on {{ r.date }}</p>
        </div>

        <button
          aria-label="More options"
          class="absolute top-5 right-5 p-2 hover:bg-gray-100 rounded-full"
        >
          <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="5" cy="10" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="15" cy="10" r="1.5" />
          </svg>
        </button>
      </div>
    </div>

    <div>
      <div class="text-center mt-6">
        <button
          @click="$emit('loadMore')"
          class="px-6 py-2 border border-gray-300 text-xs font-medium rounded-full hover:bg-gray-50 transition"
        >
          Load More Reviews
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
