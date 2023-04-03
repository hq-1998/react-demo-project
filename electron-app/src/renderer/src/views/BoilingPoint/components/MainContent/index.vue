<script lang="ts" setup>
import Editor from '../Editor/index.vue'
import PageList from '@renderer/components/page-list/index.vue'
</script>

<template>
  <div class="stram-wrapper">
    <Editor />
    <PageList class="pin-list-view" />
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
