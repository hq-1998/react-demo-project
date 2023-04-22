<script lang="ts" setup>
import UserCard from '@renderer/components/user-card/index.vue'
import RecommendCard from '../RecommendCard/index.vue'
import BoilingCard from '../BoilingCard/index.vue'

const list = [
  {
    name: '沸点',
    num: 0
  },
  {
    name: '圈子',
    num: 1
  },
  {
    name: '关注',
    num: 4
  },
  {
    name: '关注者',
    num: 0
  }
]
</script>

<template>
  <div>
    <UserCard :list="list" />
    <BoilingCard />
    <RecommendCard />
    <div class="guide-link">如何玩转沸点</div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
