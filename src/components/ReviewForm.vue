<script setup>
import { ref, watch } from "vue";
import { useAuthStore } from "@/stores/authStore";

const props = defineProps({
  show: { type: Boolean, default: false },
});
const emit = defineEmits(["submit", "close"]);

const auth = useAuthStore();

const name = ref("");
const rating = ref(5);
const text = ref("");
const error = ref("");

watch(
  () => props.show,
  (open) => {
    if (open) {
      error.value = "";
      text.value = "";
      rating.value = 5;
      name.value = auth.user?.displayName || auth.user?.email || "";
    }
  }
);

const stars = [5, 4, 3, 2, 1];

function submitForm() {
  error.value = "";
  if (!name.value.trim()) {
    error.value = "Please enter your name.";
    return;
  }
  if (!text.value.trim()) {
    error.value = "Please write a short review.";
    return;
  }
  emit("submit", { author: name.value.trim(), rating: rating.value, text: text.value.trim() });
}

function close() {
  emit("close");
}
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="review-modal-backdrop" @click.self="close">
      <div class="review-modal" role="dialog" aria-modal="true" aria-label="Write a review">
        <div class="modal-header">
          <h2 class="modal-title">Write a Review</h2>
          <button class="modal-close" @click="close" aria-label="Close review form">&times;</button>
        </div>

        <form @submit.prevent="submitForm">
          <label class="block mb-1 text-sm font-medium" for="rv-name">Name</label>
          <input id="rv-name" v-model="name" type="text" class="form-input" />

          <label class="block mb-1 mt-3 text-sm font-medium">Rating</label>
          <div class="star-row">
            <button
              v-for="s in stars"
              :key="s"
              type="button"
              class="star-btn"
              :class="{ active: s <= rating }"
              :aria-label="`${s} star${s > 1 ? 's' : ''}`"
              @click="rating = s"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </button>
            <span class="star-value">{{ rating }}/5</span>
          </div>

          <label class="block mb-1 mt-3 text-sm font-medium" for="rv-text">Your Review</label>
          <textarea id="rv-text" v-model="text" rows="4" class="form-input resize-none"></textarea>

          <p v-if="error" class="mt-2 text-sm text-red-600">{{ error }}</p>

          <div class="modal-actions">
            <button type="button" class="btn-cancel" @click="close">Cancel</button>
            <button type="submit" class="btn-submit">Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.review-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
}
.review-modal {
  background: #fff;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 440px;
  padding: 1.5rem;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}
.modal-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: #666;
}
.form-input {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}
.star-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.star-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #d9d9d9;
  line-height: 1;
}
.star-btn.active {
  color: #f5a623;
}
.star-value {
  font-size: 0.875rem;
  color: #555;
}
.modal-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 1.25rem;
}
.btn-cancel {
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
}
.btn-submit {
  background: #000;
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
}
</style>