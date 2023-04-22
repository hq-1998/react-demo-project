<script lang="ts" setup>
type Item = {
  /** 标题 */
  title: string
  /** 标题左侧-图标 */
  icon?: string
  /** 标题跳转链接 */
  url: string
  children?: Item[]
}

type PropsType = {
  list: Item[]
}

withDefaults(defineProps<PropsType>(), {
  list: () => []
})
</script>

<template>
  <nav role="navigation" class="dock-nav">
    <div v-for="item in list" :key="item.title" class="item">
      <RouterLink class="title" :to="item.url">
        <img :src="item.url" class="icon" />
        <span>{{ item.title }}</span>
      </RouterLink>
      <div class="topic_list">
        <a v-for="child in item.children" :key="child.title" class="topic" target="_self">
          <span>{{ child.title }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
