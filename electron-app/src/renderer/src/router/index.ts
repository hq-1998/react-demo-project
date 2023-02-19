import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@renderer/views/Home/index.vue')
  },
  {
    path: '/about',
    component: () => import('@renderer/views/About/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
