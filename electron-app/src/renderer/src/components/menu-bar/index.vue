<script setup lang="tsx">
import { CSSProperties, useSlots } from 'vue'

import styles from './styles.module.less'

type PropsType = {
  dataSource: { label: string }[]
  style?: CSSProperties
}

const props = withDefaults(defineProps<PropsType>(), {
  dataSource: () => []
})

const emit = defineEmits(['handleClickPane'])

const slots = useSlots()

const handleClickPane = (item) => {
  console.log('???', item)
  emit('handleClickPane', item)
}

const Render = () => {
  return (
    <nav style={props.style} class={styles['view-nav']}>
      <div class={styles['nav-list']}>
        <a-tabs
          onTabClick={handleClickPane}
          v-slots={slots}
          default-active-key={props.dataSource?.[0].label || ''}
          lazy-load
        >
          {props.dataSource.map((item) => {
            return <a-tab-pane key={item.label} title={item.label} />
          })}
        </a-tabs>
      </div>
    </nav>
  )
}
</script>

<template>
  <Render />
</template>
