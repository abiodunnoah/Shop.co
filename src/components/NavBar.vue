<script setup>
import { ref } from "vue";
import SearchBar from "@/assets/icons/SearchIcon.png";
import cart from "@/assets/icons/cart.png";
import Avatar from "@/assets/icons/avatar.svg";

const searchInput = ref("");
</script>

<template>
  <nav class="nav">
    <!-- <div class="px-6 md:px-10 max-w-screen-lg mx-auto"></div> -->
    <div class="">
      <h1>SHOP.CO</h1>
    </div>

    <div class="links">
      <p>Shop</p>
      <p>On Sales</p>
      <p>New Arrival</p>
      <p>Brands</p>
    </div>

    <div class="search">
      <img :src="SearchBar" alt="User Avatar" class="search__icon" />
      <input
        v-model="searchInput"
        type="search"
        placeholder="Search for products..."
        class="focus:outline-none w-40 sm:w-52 md:w-48 lg:w-100 px-4 py-2"
      />
    </div>

    <div class="flex items-cente justify-space-between gap-2">
      <img :src="cart" alt="Cart Icon" class="cart__icon" />
      <img :src="Avatar" alt="User Avatar" class="avatar__icon" />
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 1rem;
  /* width: 1240px; */
  margin-left: 25px;
  margin-right: 25px;
}

h1 {
  font-size: 22px;
  font-weight: 900;
  color: #000000;
  font-family: sans-serif;
}

.links p {
  display: inline-block;
  margin-right: 1rem;
  font-size: 12px;
}

.search {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  border-radius: 9999px;
  padding: 0rem 0.75rem;
}

.search__icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}
/*
.search__input {
  border: none;
  background: transparent;
  margin-left: 0.5rem;
  outline: none;
}
*/
</style>
