import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);
  const categories = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const searchQuery = ref("");
  const selectedCategory = ref("all");

  // fetch all products
  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await axios.get("https://dummyjson.com/products");
      products.value = res.data.products;
      console.log(products.value);
    } catch (err) {
      error.value = err.response?.data?.message || err.message;
      console.error("Error fetching products:", err);
    } finally {
      loading.value = false;
    }
  };

  // fetch product categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");
      const data = res.data;
      categories.value = data;
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // filter and search
  const filteredProducts = computed(() => {
    let result = products.value;

    if (selectedCategory.value !== "all") {
      result = result.filter((p) => p.category === selectedCategory.value);
    }

    if (searchQuery.value.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }
    return result;
  });

  const getProductById = (id) => products.value.find((p) => p.id === Number(id));

  return {
    products,
    categories,
    loading,
    error,
    searchQuery,
    selectedCategory,
    filteredProducts,
    fetchProducts,
    fetchCategories,
    getProductById,
  };
});
