<script setup lang="ts">
import { IconCaretDown } from '@arco-design/web-vue/es/icon/index.js'

interface IListItem {
  height: string
  barHeight: string
  score: number
  level: number
}

interface IProps {
  list: IListItem[]
  // 当前等级
  currentLevel: number
  // 当前选中等级
  currentSelectedLevel: number
}

const props = withDefaults(defineProps<IProps>(), {
  list: () => [],
  currentLevel: 0,
  currentSelectedLevel: 0
})

const emit = defineEmits<{
  (e: 'update:currentSelectedLevel', selected: number): void
}>()

const setSelected = (selected: number) => {
  emit('update:currentSelectedLevel', selected)
}
</script>

<template>
  <div class="growth-points">
    <div class="title">等级分值</div>
    <div class="levels-container">
      <div
        v-for="(item, index) in props.list"
        :key="item.height"
        :class="['level-item', index + 1 === props.currentSelectedLevel && 'selected']"
        :style="{ height: `calc(${item.height})` }"
        @click="() => setSelected(item.level)"
      >
        <icon-caret-down v-if="index + 1 === props.currentSelectedLevel" class="select-arrow" />
        <div class="level-score">{{ item.score }}</div>
        <div
          :class="['level-bar', index + 1 <= props.currentLevel && 'selected']"
          :style="{
            height: `calc(${item.barHeight})`
          }"
        ></div>
        <div class="level-text">JY{{ item.level }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
