import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { db } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    try {
      items.value = JSON.parse(savedCart) || [];
    } catch (e) {
      items.value = [];
      console.log("Error parsing saved cart:", e);
    }
  }

  function makeKey(id, size, color) {
    return `${id}::${size ?? "default"}::${color ?? "default"}`;
  }

  function addToCart(product, { size = null, color = null, quantity = 1 } = {}) {
    const key = makeKey(product.id, size, color);
    const existing = items.value.find((i) => i.key === key);

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.value.push({
        key,
        id: product.id,
        name: product.name,
        price: product.price ?? product.priceCurrent ?? 0,
        image: product.image ?? (product.images && product.images[0]) ?? "",
        size,
        color,
        quantity,
      });
    }
  }

  function removeFromCart(key) {
    items.value = items.value.filter((i) => i.key !== key);
  }

  function updateQuantity(key, quantity) {
    const item = items.value.find((i) => i.key === key);
    if (!item) return;
    if (quantity <= 0) {
      removeFromCart(key);
    } else {
      item.quantity = quantity;
    }
  }

  function clearCart() {
    items.value = [];
    appliedPromo.value = null;
  }

  const totalItems = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0));
  const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.price * i.quantity, 0));

  const appliedPromo = ref(null);

  const discountAmount = computed(() => {
    if (!appliedPromo.value) return 0;
    return Math.round(totalPrice.value * (appliedPromo.value.percent || 0));
  });

  function applyPromo(code) {
    const normalized = (code || "").trim().toUpperCase();
    if (normalized === "SAVE20") {
      appliedPromo.value = { code: "SAVE20", percent: 0.2 };
      return true;
    }
    if (normalized === "TAKE10") {
      appliedPromo.value = { code: "TAKE10", percent: 0.1 };
      return true;
    }
    return false;
  }

  function clearPromo() {
    appliedPromo.value = null;
  }

  watch(
    items,
    (newVal) => {
      localStorage.setItem("cart", JSON.stringify(newVal));
    },
    { deep: true }
  );

  let autoSaveTimer = null;
  let autoSaveWatcher = null;
  let currentUid = null;

  async function saveToServer(uid) {
    if (!uid) return;
    try {
      const cartRef = doc(db, "carts", uid);
      await setDoc(cartRef, { items: items.value }, { merge: true });
    } catch (e) {
      console.error("Failed to save cart to server:", e);
    }
  }

  async function loadFromServer(uid, { mergeLocal = true } = {}) {
    if (!uid) return;
    try {
      const cartRef = doc(db, "carts", uid);
      const snap = await getDoc(cartRef);
      if (!snap.exists()) {
        if (!mergeLocal) {
          items.value = [];
          await saveToServer(uid);
        } else {
          if ((items.value || []).length > 0) {
            await saveToServer(uid);
          }
        }
        return;
      }
      const serverData = snap.data();
      const serverItems = serverData?.items ?? [];

      if (!mergeLocal) {
        items.value = serverItems;
        return;
      }

      const map = new Map();

      for (const it of serverItems) {
        map.set(it.key, { ...it });
      }

      for (const it of items.value) {
        if (map.has(it.key)) {
          map.get(it.key).quantity = (map.get(it.key).quantity || 0) + (it.quantity || 0);
        } else {
          map.set(it.key, { ...it });
        }
      }

      items.value = Array.from(map.values());

      await saveToServer(uid);
    } catch (e) {
      console.error("Failed to load/merge cart from server:", e);
    }
  }

  function startAutoSave(uid) {
    stopAutoSave();
    currentUid = uid;

    autoSaveWatcher = watch(
      items,
      () => {
        if (autoSaveTimer) clearTimeout(autoSaveTimer);

        autoSaveTimer = setTimeout(() => {
          if (currentUid) saveToServer(currentUid);
        }, 1500);
      },
      { deep: true }
    );
  }

  function stopAutoSave() {
    if (autoSaveTimer) {
      clearTimeout(autoSaveTimer);
      autoSaveTimer = null;
    }
    if (autoSaveWatcher) {
      autoSaveWatcher();
      autoSaveWatcher = null;
    }
    currentUid = null;
  }

  return {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    totalItems,
    totalPrice,
    appliedPromo,
    discountAmount,
    applyPromo,
    clearPromo,
    saveToServer,
    loadFromServer,
    startAutoSave,
    stopAutoSave,
  };
});
