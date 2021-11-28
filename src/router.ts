import { createRouter, createWebHashHistory } from 'vue-router'

import CastList from './components/CastList.vue'

const routes = [
  {
    path: '/',
    name: 'CastList',
    component: CastList
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

