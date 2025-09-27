import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    try {
      items.value = JSON.parse(savedCart);
    } catch (e) {
      items.value = [];
      console.log("Error message:", e);
    }
  }

  function makeKey(id, size, color) {
    return `${id}::${size ?? "default"}::${color ?? "default"}`;
  }

  function addToCart(product, { size = null, color = null, quantity = 1 } = {}) {
    const key = makeKey(product.id, size, color);
    const existing = items.value.find((i) => i.key === key);

    if (existing) {
      existing.quantity++;
    } else {
      items.value.push({
        key,
        id: product.id,
        name: product.name,
        price: product.price ?? product.priceCurrent ?? product.priceCurrent ?? 0,
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
  }

  const totalItems = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0));

  const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.price * i.quantity, 0));

  watch(
    items,
    (newVal) => {
      localStorage.setItem("cart", JSON.stringify(newVal));
    },
    { deep: true }
  );

  return { items, addToCart, removeFromCart, clearCart, updateQuantity, totalItems, totalPrice };
});
