<script setup lang="ts">
import logo from '@renderer/assets/images/logo.png'
import { IconCaretDown, IconNotification, IconSearch } from '@arco-design/web-vue/es/icon/index.js'
import Login from '@renderer/components/login/index.vue'
import AvatarPanel from '@renderer/components/avatar-panel/index.vue'
import { ref } from 'vue'
import MenuBar from '@renderer/components/menu-bar/index.vue'
import AuthCenterPopover from './components/AuthCenterPopover/index.vue'

const loginRef = ref<{
  visible: boolean
  setVisible: (visible: boolean) => void
}>()

const showLogin = () => {
  loginRef.value?.setVisible(true)
}

const showAvatarPanel = () => {}

const isLogin = ref(true)

const menuList = [
  {
    label: '首页',
    key: 'comment',
    url: '/'
  },
  {
    label: '沸点',
    key: 'boilingPoint',
    url: '/boilingPoint'
  },
  {
    label: '课程',
    key: 'course',
    tag: '上新',
    url: ''
  },
  {
    label: '直播',
    key: 'liveBroadcast',
    url: ''
  },
  {
    label: '活动',
    key: 'activity',
    url: ''
  },
  {
    label: '竞赛',
    key: 'game',
    url: ''
  },
  {
    label: '商城',
    key: 'mail',
    url: ''
  },
  {
    label: 'APP',
    key: 'app',
    url: ''
  },
  {
    label: '插件',
    key: 'plugin',
    url: ''
  }
]
</script>

<template>
  <div class="main-header-box">
    <header class="main-header">
      <div class="container">
        <div class="container-left">
          <a href="/" class="logo">
            <img class="logo-img" :src="logo" alt="腾腾小站" />
            <span class="logo-text">腾腾小站</span>
          </a>
          <MenuBar :data-source="menuList" />
        </div>

        <div class="right-nav">
          <a-input :style="{ width: '300px' }" placeholder="探索稀土掘金" allow-clear>
            <template #append> <icon-search /> </template>
          </a-input>
          <a-dropdown-button type="primary">
            创作者中心
            <template #icon>
              <icon-caret-down />
            </template>
            <template #content>
              <AuthCenterPopover />
            </template>
          </a-dropdown-button>
          <a-popover :content-style="{ padding: '0px' }">
            <icon-notification size="22" />
            <template #content>
              <a-menu :default-selected-keys="[menuList[0].key]">
                <a-menu-item v-for="item in menuList" :key="item.key"
                  ><a :href="item.url" class="w148">{{ item.label }}</a></a-menu-item
                >
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
        </div>
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
      max-width: 1440px;

      &-left {
        display: flex;
        height: 100%;
        align-items: center;
      }

      .avatar {
        cursor: pointer;
      }

      .logo {
        margin-right: 1rem;
        display: flex;
        font-size: 18px;

        &-img {
          display: block;
          width: 22px;
          height: 22px;
          margin-right: 1rem;
        }

        &-text {
          color: #323232;
          white-space: nowrap;
        }
      }

      .right-nav {
        display: flex;
        align-items: center;
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
