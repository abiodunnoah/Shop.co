import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

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
      path: "/shop/:category",
      name: "CategoryPage",
      component: () => import("../views/CategoryPage.vue"),
      props: true,
    },
  ],
});

export default router;
