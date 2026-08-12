import { defineStore } from "pinia";
import { ref } from "vue";

const STORAGE_PREFIX = "reviews:";
const DEFAULT_VISIBLE = 6;
const PAGE_SIZE = 6;

function loadStored(productId) {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${productId}`);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    console.warn("Failed to load stored reviews:", e);
    return [];
  }
}

function saveStored(productId, reviews) {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${productId}`, JSON.stringify(reviews));
  } catch (e) {
    console.warn("Failed to save reviews:", e);
  }
}

export const useReviewsStore = defineStore("reviews", () => {
  const byProduct = ref(new Map());

  function record(productId) {
    if (!byProduct.value.has(productId)) {
      byProduct.value.set(productId, { stored: loadStored(productId), visible: DEFAULT_VISIBLE });
    }
    return byProduct.value.get(productId);
  }

  const storedReviews = (productId) => record(productId).stored;

  const visibleCount = (productId) => record(productId).visible;

  function increaseVisible(productId) {
    record(productId).visible += PAGE_SIZE;
  }

  function resetProduct(productId) {
    byProduct.value.set(productId, { stored: loadStored(productId), visible: DEFAULT_VISIBLE });
  }

  function mergedWith(productId, staticReviews) {
    const map = new Map();
    for (const r of staticReviews || []) {
      if (r && r.id != null) map.set(r.id, r);
    }
    for (const r of storedReviews(productId)) {
      if (r && r.id != null) map.set(r.id, r);
    }
    return Array.from(map.values());
  }

  function addReview(productId, { author = "Anonymous", rating = 5, text = "" }) {
    const rec = record(productId);
    const review = {
      id: `u-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      author: String(author).trim() || "Anonymous",
      rating: Math.max(1, Math.min(5, Number(rating) || 5)),
      text: String(text).trim(),
      date: new Date().toISOString().slice(0, 10),
    };
    rec.stored.unshift(review);
    saveStored(productId, rec.stored);
    return review;
  }

  return { storedReviews, visibleCount, increaseVisible, resetProduct, mergedWith, addReview };
});