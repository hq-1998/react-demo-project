<script setup lang="ts">
import Sider from './components/Sider/index.vue'
</script>

<template>
  <main class="container">
    <Sider class="sidebar" />
    <RouterView class="right-wrap" />
  </main>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
