<script setup lang="ts">
import logo from '@renderer/assets/images/logo.png'
</script>

<template>
  <div class="main-header-box">
    <header class="main-header">
      <div class="container">
        <a href="/" class="logo">
          <img class="logo-img" :src="logo" alt="腾腾小站" />
          <span class="logo-text">腾腾小站</span>
        </a>
        <a-dropdown>
          <a-button>首页</a-button>
          <template #content>
            <a-doption>Option 1</a-doption>
            <a-doption disabled>Option 2</a-doption>
            <a-doption :value="{ value: 'Option3' }">Option 3</a-doption>
          </template>
        </a-dropdown>
        <a-input :style="{ width: '300px' }" placeholder="Please enter something" allow-clear>
          <template #append> RMB </template>
        </a-input>
      </div>
    </header>
  </div>
</template>

<style lang="less">
.main-header-box {
  .main-header {
    position: fixed;
    top: 30px;
    left: 0;
    right: 0;
    transition: all 0.2s;

    background: #fff;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    height: 5rem;
    z-index: 250;

    .container {
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0 2rem !important;
      position: relative;

      .logo {
        margin-right: 1rem;
        display: flex;
        width: auto;
        align-items: center;
        font-size: 18px;

        &-img {
          display: block;
          width: 22px;
          height: 22px;
          margin-right: 1rem;
        }

        &-text {
          color: #323232;
        }
      }
    }
  }
}
</style>
