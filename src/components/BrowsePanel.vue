<script setup>
import casual from "@/assets/images/casual.png";
import formal from "@/assets/images/formal.png";
import party from "@/assets/images/party.png";
import gym from "@/assets/images/gym.png";
</script>

<template>
  <section class="browse-panel-container">
    <div class="browse-panel">
      <h2 class="title">BROWSE BY DRESS STYLE</h2>

      <!-- Row 1 -->
      <div class="row">
        <div class="card card--casual">
          <span class="label">Casual</span>
          <img :src="casual" alt="Casual" />
        </div>
        <div class="card card--formal">
          <span class="label">Formal</span>
          <img :src="formal" alt="Formal" />
        </div>
      </div>

      <!-- Row 2 -->
      <div class="row">
        <div class="card card--party">
          <span class="label">Party</span>
          <img :src="party" alt="Party" />
        </div>
        <div class="card card--gym">
          <span class="label">Gym</span>
          <img :src="gym" alt="Gym" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.browse-panel-container {
  padding: 0 3rem;
}

.browse-panel {
  background: #e0dfdf;
  border-radius: 1.75rem;
  padding: 3rem;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 2rem;
}

.title {
  text-align: center;
  font-size: 2.75rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-top: 10px;
}

.card {
  position: relative;
  background: white;
  border-radius: 1.25rem;
  overflow: hidden;
  height: 280px;
  display: flex;
  align-items: flex-end;
}

.card--casual {
  flex: 0 0 38%;
}
.card--formal {
  flex: 0 0 62%;
}
.card--party {
  flex: 0 0 62%;
}
.card--gym {
  flex: 0 0 38%;
}

.label {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-weight: 800;
  font-size: 1.75rem;
  z-index: 1;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 767px) {
  .browse-panel-container {
    padding: 0 1rem;
    margin-top: 1rem;
  }

  .browse-panel {
    padding: 2rem 1rem;
    margin: auto;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2.25rem;
    line-height: 38px;
  }

  .row {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
    padding-top: 0;
  }

  .card {
    flex: none; /* disable the desktop flex-basis */
    width: 100%; /* full width of the container */
    height: 200px; /* pick a uniform height */
  }

  /* you can remove the individual flex-basis rules if you like */
  .card--casual,
  .card--formal,
  .card--party,
  .card--gym {
    flex: none !important;
  }

  .label {
    font-size: 1.25rem;
  }

  .card img {
    width: 100%;
    height: 100%;
  }
}
</style>
