import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User.vue"),
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
