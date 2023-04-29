<script setup lang="tsx">
import { useSlots } from 'vue'
import styles from './style.module.less'

interface IProps {
  title: string
}

const slots = useSlots()

const props = withDefaults(defineProps<IProps>(), {
  title: ''
})

const Render = () => {
  return (
    <div class={styles['growlevel-container']}>
      <div class={styles['tab-header']}>
        <span class={styles['tab-title']}>{props.title}</span>
        {slots.headerExtra?.()}
      </div>
      {slots.content?.()}
    </div>
  )
}
</script>

<template>
  <Render />
</template>
