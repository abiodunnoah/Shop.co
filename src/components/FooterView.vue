<template>
  <div>
    <!-- Black Banner with higher z-index -->
    <div class="relative z-20">
      <div class="mx-6 md:mx-12 px-4 bg-black text-white rounded-3xl overflow-hidden">
        <div
          class="newsletter-container max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between"
        >
          <h2
            class="newsletter-title w-full md:w-1/2 text-left text-3xl md:text-4xl font-black leading-tight"
          >
            STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS
          </h2>
          <div class="w-full max-w-md space-y-4">
            <div class="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                class="input-placeholder w-full h-12 pl-12 pr-4 rounded-full text-gray-800 bg-white"
              />
              <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <img src="@/assets/icons/Mail.png" alt="Mail" class="message-icon w-5 h-5" />
              </span>
            </div>
            <button
              class="button-text w-full h-12 px-6 bg-white text-black rounded-full font-semibold"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Gray Footer pulled up under the black banner -->
    <footer class="relative z-10 bg-gray-200 -mt-20 pt-20 pb-20">
      <!-- Sitemap columns -->
      <div
        class="max-w-7xl mx-6 md:mx-12 px-0 md:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-25"
      >
        <!-- Branding & Social: icons at bottom -->
        <div class="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 class="text-3xl font-black">SHOP.CO</h3>
            <p class="mt-4 text-gray-600">
              We have clothes that suits your style and which you’re proud to wear. From women to
              men.
            </p>
          </div>
          <div class="flex space-x-8">
            <img src="@/assets/icons/X.png" class="w-10 h-10 rounded-full bg-white p-2" alt="X" />
            <img
              src="@/assets/icons/Facebook.png"
              class="w-10 h-10 rounded-full bg-black p-2"
              alt="Facebook"
            />
            <img
              src="@/assets/icons/Instagram.png"
              class="w-10 h-10 rounded-full bg-white p-2"
              alt="Instagram"
            />
            <img
              src="@/assets/icons/Github.png"
              class="w-10 h-10 rounded-full bg-white p-2"
              alt="Github"
            />
          </div>
        </div>

        <!-- Company -->
        <div class="space-y-2">
          <h4 class="font-semibold tracking-wider">COMPANY</h4>
          <ul class="space-y-1 text-gray-600">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <!-- Help -->
        <div class="space-y-2">
          <h4 class="font-semibold tracking-wider">HELP</h4>
          <ul class="space-y-1 text-gray-600">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <!-- FAQ -->
        <div class="space-y-2">
          <h4 class="font-semibold tracking-wider">FAQ</h4>
          <ul class="space-y-1 text-gray-600">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="space-y-2">
          <h4 class="font-semibold tracking-wider">RESOURCES</h4>
          <ul class="space-y-1 text-gray-600">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to – Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <!-- Footer bar -->
      <div class="mx-6 md:mx-12 border-t border-gray-300">
        <div
          class="footer-bottom max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 flex-wrap"
        >
          <p class="shop-text text-gray-600">Shop.co © 2000‑2023, All Rights Reserved</p>
          <div class="flex space-x-4 flex-wrap justify-center gap-2">
            <div class="visa bg-white p-2 flex items-center rounded-md flex-shrink-0">
              <img src="@/assets/icons/Visa.png" class="h-3 w-10" alt="Visa" />
            </div>
            <div class="mastercard bg-white p-2 px-3.5 flex items-center rounded-md flex-shrink-0">
              <img src="@/assets/icons/Mastercard.png" class="h-4" alt="Mastercard" />
            </div>
            <div class="payPal bg-white p-2 flex items-center rounded-md flex-shrink-0">
              <img src="@/assets/icons/Paypal.png" class="h-3 w-10" alt="PayPal" />
            </div>
            <div class="apple-Pay bg-white p-2 flex items-center rounded-md flex-shrink-0">
              <img src="@/assets/icons/ApplePay.png" class="h-4" alt="Apple Pay" />
            </div>
            <div class="google-Pay bg-white p-2 flex items-center rounded-md flex-shrink-0">
              <img src="@/assets/icons/GooglePay.png" class="h-4" alt="Google Pay" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .relative.z-20 > .mx-6 {
    margin: 0 20px;
    border-radius: 20px;
  }

  footer.relative.z-10 {
    margin-top: -5rem;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding-top: 2rem;
  }

  .visa {
    padding: 7px 8px;
    margin-right: 7px;
  }

  .payPal {
    padding: 7px 8px;
    margin-right: 7px;
  }

  .mastercard {
    /* padding: 5px 2px; */
    margin-right: 7px;
  }

  .google-Pay {
    padding: 7px 8px;
    margin-right: 7px;
  }

  .apple-Pay {
    padding: 7px 8px;
    margin-right: 7px;
  }

  .visa img {
    width: 1.5rem;
  }

  .mastercard img {
    width: 1rem;
    height: 0.65rem;
  }

  .payPal img {
    width: 1.7rem;
    height: 0.65rem;
  }

  .apple-Pay img {
    width: 1.7rem;
    height: 0.65rem;
  }

  .google-Pay img {
    width: 1.7rem;
    height: 0.65rem;
  }

  .newsletter-container {
    flex-direction: column;
    align-items: center;
  }
  .newsletter-title {
    font-size: 1.55rem;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .newsletter-container input,
  .newsletter-container button {
    width: 100%;
    height: 40px;
  }

  .input-placeholder::placeholder {
    font-size: 13px;
  }

  .message-icon {
    width: 1rem;
    height: 0.8rem;
  }

  .button-text {
    font-size: 13px;
  }

  .md\:grid-cols-2,
  .lg\:grid-cols-6 {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .gap-x-25 {
    gap: 1.5rem !important;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;
  }

  .shop-text {
    font-size: 14px;
  }

  footer .grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem 2rem;
  }

  footer .lg\:col-span-2 {
    grid-column: 1 / -1;
    text-align: left;
    padding-left: 1rem;
    margin-bottom: 1.5rem;
  }

  footer .lg\:col-span-2 .flex {
    justify-content: flex-start; /* hug left edge */
    gap: 0.5rem; /* a bit tighter */
    margin-top: 1rem;
    padding-left: 1rem;
  }

  footer .lg\:col-span-2 .flex img {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25rem; /* inner padding */
  }

  footer .grid > div:not(.lg\:col-span-2) {
    padding-left: 1rem;
  }

  footer h4 {
    font-size: 1rem; /* a bit smaller */
    margin-bottom: 0.5rem;
  }
  footer ul li {
    font-size: 0.875rem;
    line-height: 1.4;
  }
}
</style>
