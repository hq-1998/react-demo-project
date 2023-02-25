<script setup lang="ts">
import logo from '@renderer/assets/images/logo.png'
import {
  IconDown,
  IconNotification,
  IconSearch,
  IconCaretDown
} from '@arco-design/web-vue/es/icon/index.js'
import Login from '@renderer/components/login/index.vue'
import AvatarPanel from '@renderer/components/avatar-panel/index.vue'
import { ref } from 'vue'

const loginRef = ref<{
  visible: boolean
  setVisible: (visible: boolean) => void
}>()

const showLogin = () => {
  loginRef.value?.setVisible(true)
}

const showAvatarPanel = () => {}

const isLogin = ref(true)
</script>

<template>
  <div class="main-header-box">
    <header class="main-header">
      <div class="container">
        <a-row align="center">
          <a href="/" class="logo">
            <img class="logo-img" :src="logo" alt="腾腾小站" />
            <span class="logo-text">腾腾小站</span>
          </a>
          <a-dropdown>
            <a-button type="text"><span class="icon-text">首页</span><icon-caret-down /></a-button>
            <template #content>
              <a-doption>Option 1</a-doption>
              <a-doption disabled>Option 2</a-doption>
              <a-doption :value="{ value: 'Option3' }">Option 3</a-doption>
            </template>
          </a-dropdown>
        </a-row>

        <a-input :style="{ width: '300px' }" placeholder="探索稀土掘金" allow-clear>
          <template #append> <icon-search /> </template>
        </a-input>

        <a-row align="center" class="right-nav">
          <a-dropdown-button type="primary">
            创作者中心
            <template #icon>
              <icon-down />
            </template>
            <template #content>
              <a-doption>写文章</a-doption>
              <a-doption>发沸点</a-doption>
              <a-doption>写笔记</a-doption>
              <a-doption>写代码</a-doption>
              <a-doption>草稿箱</a-doption>
            </template>
          </a-dropdown-button>
          <a-popover :content-style="{ padding: '0px' }">
            <icon-notification size="22" />
            <template #content>
              <a-menu :default-selected-keys="['1']">
                <a-menu-item key="1"><span class="w148">评论</span></a-menu-item>
                <a-menu-item key="2"><span class="w148">点赞</span></a-menu-item>
                <a-menu-item key="3"><span class="w148">关注</span></a-menu-item>
                <a-menu-item key="4"><span class="w148">私信</span></a-menu-item>
                <a-menu-item key="5"><span class="w148">系统消息</span></a-menu-item>
              </a-menu>
            </template>
          </a-popover>

          <a-popover position="br" trigger="click">
            <a-avatar class="avatar" :size="32" @click="isLogin ? showAvatarPanel : showLogin">
              <img alt="avatar" :src="logo" />
            </a-avatar>
            <template #content>
              <AvatarPanel />
            </template>
          </a-popover>
        </a-row>
      </div>
    </header>
    <Login ref="loginRef" />
  </div>
</template>

<style lang="less" scoped>
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
      justify-content: space-between;
      height: 100%;

      .avatar {
        cursor: pointer;
      }

      .logo {
        margin-right: 1rem;
        display: flex;
        width: auto;
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

      .right-nav {
        gap: 20px;
      }
    }
  }
}

.w148 {
  display: inline-block;
  width: 148px;
}
.icon-text {
  margin-right: 4px;
}
</style>
