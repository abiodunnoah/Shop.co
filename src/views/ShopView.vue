<script setup>
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import HeroView from "@/components/HeroView.vue";
import BrandView from "@/components/BrandView.vue";
import NewArrivalsView from "@/components/NewArrivalsView.vue";
</script>

<template>
  <main>
    <div>
      <SignupBonus />
    </div>

    <div>
      <NavBar />
    </div>

    <div>
      <HeroView />
    </div>

    <div>
      <BrandView />
    </div>

    <div>
      <NewArrivalsView />
    </div>
  </main>
</template>
