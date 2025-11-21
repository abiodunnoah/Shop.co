import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import { useAuthStore } from "@/stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProductDetail.vue"),
      props: true,
    },
    {
      path: "/shop",
      name: "ShopOverview",
      redirect: { name: "CategoryPage", params: { category: "casual" } },
    },
    {
      path: "/shop/:category",
      name: "CategoryPage",
      component: () => import("../views/CategoryPage.vue"),
      props: true,
    },
    {
      path: "/cart",
      name: "CartPage",
      component: () => import("../views/CartPage.vue"),
      props: true,
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/SignIn.vue"),
      meta: { requiresGuest: true },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/SignUp.vue"),
      meta: { requiresGuest: true },
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();

  await auth.initAuth();

  const user = auth.user;

  if (to.meta?.requiresAuth && !user) {
    return {
      name: "Login",
      query: { redirect: to.fullPath },
    };
  }

  if (to.meta?.requiresGuest && user) {
    return { name: "Home" };
  }

  return true;
});

export default router;
