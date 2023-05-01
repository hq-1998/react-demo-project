<script setup lang="tsx">
import styles from './styles.module.less'
import { computed } from 'vue'
import arrowLeft from '@renderer/assets/icons/arrow-left.svg'
import arrowRight from '@renderer/assets/icons/arrow-right.svg'
import classnames from 'classnames'

interface IPagination {
  total?: number
  current?: number
  pageSize?: number
}

const props = withDefaults(defineProps<IPagination>(), {
  total: 0,
  current: 1,
  pageSize: 5
})

const totalPage = computed(() => {
  return props.total / props.pageSize
})

const totalPageList = computed(() => {
  return new Array(totalPage.value).fill('').map((_, index) => index + 1)
})

const Render = () => {
  return props.total ? (
    <div class={styles['pagenation-wrap']}>
      <div class={styles['arrow-box']}>
        <img
          src={arrowLeft}
          class={classnames(styles['arrow-icon'], {
            [styles['arrow-icon-disabled']]: true,
            [styles['arrow-icon-left']]: true
          })}
        />
      </div>
      {totalPageList.value.map((item, index) => {
        return (
          <div
            class={classnames(styles['page-code'], {
              [`${styles['page-code-active']}`]: index + 1 === props.current
            })}
            key={item}
          >
            {item}
          </div>
        )
      })}
      <div class={styles['arrow-box']}>
        <div
          class={classnames(styles['arrow-icon'], {
            [styles['arrow-icon-disabled']]: true,
            [styles['arrow-icon-right']]: true
          })}
        >
          <img src={arrowRight} />
        </div>
      </div>
    </div>
  ) : null
}
</script>

<template>
  <Render />
</template>
