<script lang="tsx" setup>
import { RouterLink } from 'vue-router'
import styles from './styles.module.less'

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

const props = withDefaults(defineProps<PropsType>(), {
  list: () => []
})

const Render = () => {
  return (
    <nav role="navigation" class={styles['dock-nav']}>
      {props.list.map((item) => {
        return (
          <div key={item.title} class={styles.item}>
            <RouterLink class={styles.title} to={item.url}>
              <img class={styles.icon} src={item.icon} />
              <span>{item.title}</span>
              <div class={styles['topic_list']}>
                {item.children?.map((child) => {
                  return (
                    <a key={child.title} class={styles.topic} target="_self">
                      <span>{child.title}</span>
                    </a>
                  )
                })}
              </div>
            </RouterLink>
          </div>
        )
      })}
    </nav>
  )
}
</script>

<template>
  <Render />
</template>
