<script setup>
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import HeroView from "@/components/HeroView.vue";
import BrandView from "@/components/BrandView.vue";
import NewArrivalsView from "@/components/NewArrivalsView.vue";
import BrowsePanel from "@/components/BrowsePanel.vue";
import CustomerReview from "@/components/CustomerReview.vue";
import FooterView from "@/components/FooterView.vue";
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

    <div>
      <BrowsePanel />
    </div>

    <div>
      <CustomerReview />
    </div>

    <div>
      <FooterView />
    </div>
  </main>
</template>
