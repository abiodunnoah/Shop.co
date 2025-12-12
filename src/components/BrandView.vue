<script setup>
import Versace from "@/assets/images/versace.png";
import Gucci from "@/assets/images/gucci.png";
import Prada from "@/assets/images/prada.png";
import Zara from "@/assets/images/zara.png";
import Calvin from "@/assets/images/calvin.png";
</script>

<template>
  <div class="brand-container">
    <div class="brand-container-wrapper">
      <img :src="Versace" alt="Versace" class="versace-logo" />
      <img :src="Zara" alt="Zara" class="zara-logo" />
      <img :src="Gucci" alt="Gucci" class="gucci-logo" />
      <img :src="Prada" alt="Prada" class="prada-logo" />
      <img :src="Calvin" alt="Calvin Klein" class="calvin-logo" />
    </div>
  </div>
</template>

<style scope>
.brand-container {
  background-color: #000000;
  height: 100px;
}

.brand-container-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-top: 30px; */
  padding: 2rem 2rem;
}

.versace-logo {
  width: 167px;
  height: 34px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.zara-logo {
  width: 91px;
  height: 38px;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.gucci-logo {
  width: 156px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.prada-logo {
  width: 194px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.calvin-logo {
  width: 206px;
  height: 33px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

@media (max-width: 1023px) {
  .brand-container {
    height: 100%;
  }

  .brand-container-wrapper {
    flex-wrap: wrap;
    gap: 12px;
    padding: 2rem 1rem;
  }

  .versace-logo {
    width: 116px;
    height: 23px;
    margin-right: 8px;
  }

  .zara-logo {
    width: 64px;
    height: 27px;
    margin-right: 10px;
  }

  .gucci-logo {
    width: 109px;
    height: 23px;
  }

  .prada-logo {
    width: 127px;
    height: 20px;
  }

  .calvin-logo {
    width: 134px;
    height: 21px;
  }
}
</style>
