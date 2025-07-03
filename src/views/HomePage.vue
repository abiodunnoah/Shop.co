<script setup>
import SignupBonus from "@/components/SignupBonus.vue";
import NavBar from "@/components/NavBar.vue";
import HeroView from "@/components/HeroView.vue";
import BrandView from "@/components/BrandView.vue";
import NewArrivalsView from "@/components/NewArrivalsView.vue";
import BrowsePanel from "@/components/BrowsePanel.vue";
import CustomerReview from "@/components/HomePageCustomerReview.vue";
import FooterView from "@/components/FooterView.vue";
</script>

<template>
  <main>
    <header>
      <SignupBonus />
    </header>

    <section>
      <NavBar />
    </section>

    <section>
      <HeroView />
    </section>

    <section>
      <BrandView />
    </section>

    <section>
      <NewArrivalsView />
    </section>

    <section>
      <BrowsePanel />
    </section>

    <section>
      <CustomerReview />
    </section>

    <section>
      <FooterView />
    </section>
  </main>
</template>
