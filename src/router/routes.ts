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
  }
];

export default routes;
