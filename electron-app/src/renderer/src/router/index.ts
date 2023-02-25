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
  },
  {
    path: '/user',
    component: () => import('@renderer/views/User/index.vue'),
    redirect: '/user/settings/profile',
    children: [
      {
        path: 'settings/profile',
        component: () => import('@renderer/views/User/pages/profile/index.vue')
      },
      {
        path: 'settings/account',
        component: () => import('@renderer/views/User/pages/account/index.vue')
      },
      {
        path: 'settings/message',
        component: () => import('@renderer/views/User/pages/message/index.vue')
      },
      {
        path: 'settings/resume',
        component: () => import('@renderer/views/User/pages/resume/index.vue')
      },
      {
        path: 'settings/block',
        component: () => import('@renderer/views/User/pages/block/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
