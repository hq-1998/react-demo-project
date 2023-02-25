<script setup lang="ts">
import HeaderBar from '../header-bar/index.vue'
import TitleBar from '../title-bar/index.vue'
import MenuBar from '../menu-bar/index.vue'
</script>

<template>
  <TitleBar title="腾腾小站" />
  <HeaderBar />
  <MenuBar />
  <RouterView />
</template>

<style lang="less"></style>
