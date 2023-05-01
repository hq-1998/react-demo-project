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
  },
  {
    path: '/footmark',
    component: () => import('@renderer/views/Footmark/index.vue')
  },
  {
    path: '/profile',
    component: () => import('@renderer/views/Profile/index.vue')
  },
  {
    path: '/notification',
    component: () => import('@renderer/views/Notification/index.vue'),
    redirect: '/notification/comment',
    children: [
      {
        path: 'comment',
        component: () => import('@renderer/views/Notification/pages/comment/index.vue')
      }
    ]
  },
  {
    path: '/coupon',
    redirect: '/coupon/list',
    children: [
      {
        path: 'list',
        component: () => import('@renderer/views/Coupon/list/index.vue')
      }
    ]
  },
  {
    path: '/boilingPoint',
    redirect: '/boilingPoint/new',
    children: [
      {
        path: 'new',
        component: () => import('@renderer/views/BoilingPoint/index.vue')
      }
    ]
  },
  {
    path: '/growthBenefits',
    redirect: '/growthBenefits/signIn',
    component: () => import('@renderer/views/GrowthBenefits/index.vue'),
    children: [
      {
        path: 'signIn',
        component: () => import('@renderer/views/GrowthBenefits/SignIn/index.vue')
      },
      {
        path: 'level',
        component: () => import('@renderer/views/GrowthBenefits/Level/index.vue')
      },
      {
        path: 'lotteryDraw',
        component: () => import('@renderer/views/GrowthBenefits/LotteryDraw/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
