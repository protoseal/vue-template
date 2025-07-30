import {
  type RouteRecordRaw,
  createMemoryHistory,
  createRouter,
} from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../../../01_pages/layouts/DefaultLayout.vue"),
    children: [
      { path: "/", component: () => import("../../../01_pages/MainPage") },
    ],
  },
]

export const router = createRouter({ history: createMemoryHistory(), routes })
