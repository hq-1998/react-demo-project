<script setup lang="ts">
interface IProps {
  title: string
  score: number
  finish?: number
  total?: number
  icon: string
  btnText: string
}

const props = defineProps<IProps>()
</script>

<template>
  <div class="task-inner-wrap">
    <img :src="props.icon" class="avatar task-icon" />
    <div class="task-info">
      <span :title="props.title" class="task-info-title">{{ props.title }}</span>
      <span class="task-info-desc"
        >掘友分+{{ props.score }}
        <span v-if="props.total">，已完成{{ props.finish }}/{{ props.total }}</span></span
      >
    </div>
    <button
      :class="[
        'ui-btn',
        'task-btn',
        'primary',
        'medium',
        'default',
        props.finish === props.total && props.total && 'disabled'
      ]"
    >
      {{ props.btnText }}
    </button>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
