import { createRouter, createWebHistory } from "vue-router";
import Main from "@/components/pages/Main";
import About from "@/components/pages/About";
import Enter from "@/components/pages/Enter";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/enter",
    component: Enter,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
