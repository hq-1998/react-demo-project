<script setup lang="ts">
import { IconLeft } from '@arco-design/web-vue/es/icon/index.js'
</script>

<template>
  <nav class="view-nav web-only">
    <li class="nav-text">
      <a href="/">
        <icon-left />
        返回个人主页
      </a>
    </li>
  </nav>
</template>

<style lang="less" scoped>
.view-nav {
  display: flex;
  align-items: center;
  margin: 24px auto 16px;
  padding-left: 22px;
  box-sizing: border-box;
  position: sticky;
  left: 0;
  background-color: #fff;

  top: 5rem;
  width: 100%;
  height: 3.833rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all 0.2s;
  transform: translateZ(0);

  &::before {
    background-color: unset;
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 200%;
    z-index: -1;
  }

  .nav-text {
    font-size: 14px;
    color: #4e5969;
  }
}
</style>
