import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    redirect: "/main",
    component: Layout,
    children: [
      {
        path: "/main",
        name: "main",
        component: () => import("@/views/main/index.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/error-page/401.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error-page/404.vue")
  }
];

export default routes;
