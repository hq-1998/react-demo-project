<script setup lang="ts">
import { IconBook } from '@arco-design/web-vue/es/icon/index.js'
const props = withDefaults(
  defineProps<{
    dataSource: { label: string; value: number; to: string }[]
    activeIndex: number
    setCurrentIndex: (index: number) => void
  }>(),
  {
    dataSource: () => []
  }
)

const handleClick = (index: number) => {
  props.setCurrentIndex(index)
}
</script>

<template>
  <div class="siderbar">
    <RouterLink
      v-for="(item, index) in dataSource"
      :key="item.value"
      :index="String(index)"
      :to="item.to"
    >
      <div :class="['nav-item', activeIndex === index && 'active']" @click="handleClick(index)">
        <span class="icon"><icon-book /></span>{{ item.label }}
      </div>
    </RouterLink>
  </div>
</template>

<style lang="less" scoped>
.siderbar {
  box-sizing: border-box;
  background: #fff;
  width: 230px;
  height: 626px;
  padding: 8px;

  .nav-item {
    display: flex;
    align-items: center;
    font-weight: 400;
    height: 48px;
    width: 214px;
    font-size: 16px;
    color: #4e5969;
    border-radius: 4px;

    &.active {
      background: #e8f3ff;
      color: #1d7dfa;
    }

    .icon {
      margin-right: 12px;
      margin-left: 24px;
    }
  }
}
</style>
