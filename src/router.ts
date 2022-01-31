import { createRouter, createWebHashHistory } from "vue-router"
import Casts from './views/Casts.vue'
import Episode from './views/Episode.vue'

const routes = [
  {
    path: "/",
    redirect: "/casts",
  },
  {
    path: "/casts",
    name: "Casts",
    component: Casts,
  },
  { path: "/casts/:id", name: "Episode", component: Episode },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
