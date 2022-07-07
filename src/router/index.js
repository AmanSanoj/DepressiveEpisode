import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/auth/signin",
    name: "signin",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/auth/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/post/create",
    name: "createPost",
    component: () => import("../views/PostEditor.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
