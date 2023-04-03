<script lang="ts" setup>
import { IconRight } from '@arco-design/web-vue/es/icon/index.js'

defineProps<{
  name: string
}>()
</script>

<template>
  <div class="pin-club-box">
    <a class="club">
      <img class="circle" src="../../../../assets/images/boilingPoint/circle.png" />
      {{ name }}
      <icon-right size="8" class="arrow-right" />
    </a>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
