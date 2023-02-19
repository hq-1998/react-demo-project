<script setup lang="tsx">
import { onMounted, ref, onUnmounted } from 'vue'
import logo from '@renderer/assets/images/logo.png'
import { IconMinus, IconClose, IconPlus, IconCopy } from '@arco-design/web-vue/es/icon/index.js'

const isMaximized = ref(false)
const props = defineProps<{ title?: string }>()

const winMaximizedEvent = (): void => {
  isMaximized.value = true
}

const winUnmaximizeEvent = (): void => {
  isMaximized.value = false
}

const closeWindow = () => window.jsBridge.invokeIpcName('closeWindow')
const minimizeWindow = () => window.jsBridge.invokeIpcName('minimizeWindow')
const unmaximizeWindow = () => window.jsBridge.invokeIpcName('unmaximizeWindow')
const maxmizeWin = () => window.jsBridge.invokeIpcName('maxmizeWindow')

onMounted(() => {
  window.jsBridge.onIpcName('windowMaximized', winMaximizedEvent)
  window.jsBridge.onIpcName('windowUnmaximized', winUnmaximizeEvent)
})

onUnmounted(() => {
  window.jsBridge.offIpcName('windowMaximized', winMaximizedEvent)
  window.jsBridge.offIpcName('windowUnmaximized', winUnmaximizeEvent)
})

const Render = () => {
  return (
    <div class="topBar">
      <div class="winTitle">
        <img class="icon" src={logo} alt="腾腾小站" />
        {props.title}
      </div>
      <div class="winTool">
        <div onClick={minimizeWindow}>
          <IconMinus />
        </div>
        {isMaximized.value ? (
          <div onClick={unmaximizeWindow}>
            <IconPlus />
          </div>
        ) : (
          <div onClick={maxmizeWin}>
            <IconCopy />
          </div>
        )}
        <div onClick={closeWindow}>
          <IconClose class="icon-close" />
        </div>
      </div>
    </div>
  )
}
</script>

<template>
  <Render />
</template>

<style lang="less">
.topBar {
  display: flex;
  align-items: center;
  height: 30px;
  -webkit-app-region: drag;
  width: 100%;
}

.winTitle {
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 12px;
  font-size: 13px;
  height: 100%;
  color: #888;

  .icon {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
}

.winTool {
  height: 100%;
  display: flex;
  -webkit-app-region: no-drag;
}

.winTool div {
  height: 100%;
  width: 34px;
  text-align: center;
  color: #999;
  cursor: pointer;
  line-height: 30px;
}

.winTool .icon {
  color: #666666;
  font-weight: bold;
}

.winTool div:hover {
  background: #efefef;
}

.winTool div:last-child:hover {
  background: #f53f3f;
}

.winTool div:last-child:hover .icon-close {
  color: #fff;
}
</style>
