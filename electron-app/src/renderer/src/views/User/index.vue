<script setup lang="ts">
import Navigation from '@renderer/components/navigate/index.vue'
import { ref } from 'vue'
import SiderBar from './components/SiderBar/index.vue'

const siderBarList = [
  {
    label: '个人资料',
    value: 1,
    to: '/user/settings/profile'
  },
  {
    label: '账号设置',
    value: 2,
    to: '/user/settings/account'
  },
  {
    label: '消息设置',
    value: 3,
    to: '/user/settings/message'
  },
  {
    label: '简历管理',
    value: 4,
    to: '/user/settings/resume'
  },
  {
    label: '屏蔽管理',
    value: 5,
    to: '/user/settings/block?type=author'
  }
]

const currentIndex = ref(0)
const setCurrentIndex = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="container main-container">
    <Navigation />
    <div class="view setting-view">
      <SiderBar
        :active-index="currentIndex"
        :set-current-index="setCurrentIndex"
        :data-source="siderBarList"
      />
      <RouterView />
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-container {
  max-width: 1200px;
  position: relative;
  top: calc(30px + 5rem);

  .setting-view {
    display: flex;
    justify-content: space-between;
  }
}
</style>
