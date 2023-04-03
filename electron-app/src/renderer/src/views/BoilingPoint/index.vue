<script lang="ts" setup>
import SiderBar from '@renderer/components/sider-bar/index.vue'
import MainContent from './components/MainContent/index.vue'
import RightBar from './components/SiderBar/index.vue'

const list = [
  {
    title: '最新',
    icon: '',
    url: 'new'
  },
  {
    title: '热门',
    icon: '',
    url: ''
  },
  {
    title: '关注',
    icon: '',
    url: ''
  },
  {
    title: '我的圈子',
    icon: '',
    url: ''
  },
  {
    title: '推荐圈子',
    icon: '',
    url: ''
  },
  {
    title: '技术交流圈',
    url: ''
  },
  {
    title: '今日新鲜事',
    url: ''
  },
  {
    title: 'AI聊天室',
    url: ''
  },
  {
    title: '树洞一下',
    url: ''
  },
  {
    title: '上班摸鱼',
    url: ''
  }
]
</script>

<template>
  <main class="container main-container">
    <main class="main">
      <div class="dock shadow">
        <SiderBar :list="list" />
      </div>
      <div class="stream no-topic-list no-hot-new-tag">
        <MainContent />
      </div>
      <div class="sidebar">
        <RightBar />
      </div>
    </main>
  </main>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
