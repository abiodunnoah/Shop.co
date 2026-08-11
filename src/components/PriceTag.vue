<script setup>
import { computed } from "vue";
import { fmtNaira } from "@/utils/currency";

const props = defineProps({
  price: { type: Number, required: true },
  original: { type: Number, default: null },
  size: { type: String, default: "md", validator: (v) => ["sm", "md", "lg"].includes(v) },
  showBadge: { type: Boolean, default: true },
});

const discountPercent = computed(() => {
  if (!props.original || props.original <= 0) return 0;
  return Math.round((1 - props.price / props.original) * 100);
});
</script>

<template>
  <div class="price" :class="`price--${size}`">
    <span class="current">{{ fmtNaira(price) }}</span>
    <span v-if="original" class="original">{{ fmtNaira(original) }}</span>
    <span v-if="original && showBadge && discountPercent > 0" class="badge"
      >-{{ discountPercent }}%</span
    >
  </div>
</template>

<style scoped>
.price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.current {
  font-weight: 800;
  color: #111;
}

.original {
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

.price--sm .current {
  font-size: 16px;
}

.price--sm .original {
  font-size: 14px;
  margin-left: 0.5rem;
}

.price--md .current {
  font-size: 20px;
}

.price--md .original {
  font-size: 20px;
}

.price--lg .current {
  font-size: 1.75rem;
}

.price--lg .original {
  font-size: 1.75rem;
}
</style>
