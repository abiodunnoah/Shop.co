# Shop.co — agent instructions

## Commands
- `npm run dev` — Vite dev server (default http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally
- `npm run lint` — `eslint . --fix` (flat config, vue/essential rules)
- No test or typecheck commands exist (no test framework, no TypeScript)

## Architecture
- **Vue 3 + Vite** SPA; Composition API (`<script setup>`) in all `.vue` files; no SSR.
- **`@/`** alias maps to `src/` (vite.config.js + jsconfig.json).
- **Lazy-loaded routes** in `src/router/index.js` — `ProductDetail`, `CategoryPage`, `CartPage`, `CheckoutPage`, `Login`, `Register`, `NewArrivals`, `TopSelling`, `PaymentSuccess`, `Products` (`/products`), plus a `ShopOverview`-named redirect at `/shop`.
- **Pinia stores** (composition API style): `authStore` (options API), `cartStore`.
- **Auth** (Firebase Auth) inits before `app.mount()` via `main.js`. Router guards redirect unauthenticated users from `/checkout` to `/login` with a `redirect` query param. Guest-only routes (`/login`, `/register`) redirect authenticated users to home.
- **Cart**: `cartStore.js` uses a composite key (`id::size::color`), persists to localStorage (watched, deep), and syncs to Firestore (`carts/{uid}`) via `authStore` — `loadFromServer` merges on explicit login/register, replaces on session restore; `startAutoSave`/`stopAutoSave` (1.5s debounced) run on auth state change. Promo state (`appliedPromo`, `discountAmount`) lives in the store. Shared `DELIVERY_FEE = 1500` in `src/data/shipping.js`; all prices are in NGN (naira).
- **Firebase** config in `src/firebase/config.js` uses `import.meta.env.VITE_*` vars; `.env` is gitignored.
- **Payments** via Paystack — `CheckoutPage.vue` loads `https://js.paystack.co/v1/inline.js` at runtime and calls `PaystackPop.setup(...)` with `currency: "NGN"` and `amount: Math.round(naira * 100)`. Public key from `VITE_PAYSTACK_PUBLIC_KEY`.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` plugin, `@import "tailwindcss"` in main.css), Satoshi font from Fontshare, plus manual scoped CSS in components.
- **UI**: Naive UI (`NMessageProvider` wraps App.vue root).

## Conventions & quirks
- Import images as static assets: `import icon from "@/assets/icons/..."`.
- Format naira via `fmtNaira` from `src/utils/currency.js`; shared `PriceTag` (price + strikethrough original + discount badge, `size` sm|md|lg) and `StarRating` (`value`, `size`, `showValue`) components in `src/components/`. `RatingView.vue` is the legacy rating component still used by `ProductInfoSection`.
- Router sets `document.title` per route via `meta.title` + `router.afterEach`.
- Nav categories are derived from `src/data/products.js` — the only real categories are `casual`, `formal`, `sportswear`, `t-shirts`.
- Scoped styles on component `<style>` blocks; mix of Tailwind utility classes and manual CSS.
- ESLint uses flat config (`eslint.config.js`) with `@eslint/js` recommended + `vue/essential`. No Prettier.
- VSCode recommended extensions: `Vue.volar`, `dbaeumer.vscode-eslint`, `EditorConfig.EditorConfig`.
- Files: 2-space indent, LF line endings, UTF-8, trim trailing whitespace (`.editorconfig`).
