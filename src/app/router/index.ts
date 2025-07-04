import { createRouter, type Router, type RouterHistory } from "vue-router";
import AppHome from "../components/AppHome.vue";
import DashboardHome from "../../dashboard/components/DashboardHome.vue";

export function createAppRouter(history: RouterHistory): Router {
  const router = createRouter({
    history,
    routes: [
      {
        path: "/",
        name: "home",
        component: AppHome,
        meta: {
          public: true,
        },
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardHome,
      },
    ],
  });
  return router;
}
