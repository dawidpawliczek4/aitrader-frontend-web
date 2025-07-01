import { createRouter, type Router, type RouterHistory } from "vue-router";
import AppHome from "../components/AppHome.vue";

export function createAppRouter(history: RouterHistory): Router {
  const router = createRouter({
    history,
    routes: [
      {
        path: "/",
        name: "home",
        component: AppHome,
      },
    ],
  });
  return router;
}