<script setup lang="tsx">
import { CSSProperties, useSlots } from 'vue'

import styles from './styles.module.less'
import { useRouter } from 'vue-router'

type PropsType = {
  dataSource: { label: string; tag?: string; url: string }[]
  style?: CSSProperties
}

const props = withDefaults(defineProps<PropsType>(), {
  dataSource: () => []
})

const emit = defineEmits(['handleClickPane'])

const slots = useSlots()

const handleClickPane = (item) => {
  emit('handleClickPane', item)
}

const Render = () => {
  const router = useRouter()
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
            return (
              <a-tab-pane
                key={item.label}
                v-slots={{
                  title: (
                    <span
                      onClick={() => {
                        router.push(item.url)
                      }}
                    >
                      {item.label}
                    </span>
                  )
                }}
              />
            )
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
