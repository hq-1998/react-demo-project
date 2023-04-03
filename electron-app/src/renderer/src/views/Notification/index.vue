<script setup lang="tsx">
import MenuBar from '@renderer/components/menu-bar/index.vue'
import { RouterView } from 'vue-router'

const menuList = [
  {
    label: '评论',
    url: '/notification'
  },
  {
    label: '点赞'
  },
  {
    label: '关注'
  },
  {
    label: '私信'
  },
  {
    label: '系统消息'
  }
]

const handleClickPane = (item: typeof menuList[number]) => {
  console.log(item)
}
</script>

<template>
  <main>
    <MenuBar :data-source="menuList" @handle-click-pane="handleClickPane" />
    <RouterView />
  </main>
</template>
