<script setup lang="ts">
defineProps<{
  url: string
  username: string
  type: string
}>()
</script>

<template>
  <div class="account-group">
    <a class="user-link">
      <img :src="url" alt="xxx的头像" class="avatar" />
    </a>
    <div class="pin-header-content">
      <a class="username">{{ username }}</a>
      <div class="meta-box">
        <div v-if="type" class="position ellipsis">{{ type }}</div>
        <div v-if="type" class="dot">·</div>
        <a>
          <time datetime="1680530050000" title="2023-04-03 21:54:10">40分钟前</time>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
