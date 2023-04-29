<script setup lang="ts">
import TaskSectionCard from '../TaskSectionCard/index.vue'

interface IListItem {
  title: string
  children: [
    {
      title: string
      score: number
      finish: number
      total: number
      icon: string
      btnText: string
    }
  ]
}

interface IProps {
  list: IListItem[]
}

const props = defineProps<IProps>()
</script>

<template>
  <div class="growth-task-list">
    <div v-for="item in props.list" :key="item.title" class="task-section">
      <h2 class="task-section-title">{{ item.title }}</h2>
      <ul class="task-section-list">
        <li v-for="child in item.children" :key="child.title" class="task">
          <TaskSectionCard v-bind="child" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
