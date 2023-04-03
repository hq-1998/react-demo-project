<script setup lang="tsx">
import styles from './styles.module.less'
const Render = () => {
  return (
    <div class={styles.container}>
      <div class={styles['chat-view']}>
        <div class={styles['empty']}>
          <img
            style="width: 240px;"
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/08674c4db15f5b16edccacc3f48038f2.svg"
          />
          <p class={styles.hint}>暂无消息</p>
        </div>
      </div>
    </div>
  )
}
</script>

<template>
  <Render />
</template>
