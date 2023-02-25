<script setup lang="tsx">
import { onMounted, ref, onUnmounted } from 'vue'
import logo from '@renderer/assets/images/logo.png'
import { CLOSE_WINDOW, SHOW_TRAY, APP_QUIT } from '@main/event'
import { IconInfoCircleFill } from '@arco-design/web-vue/es/icon/index.js'
import {
  IconMinus,
  IconClose,
  IconFullscreen,
  IconCopy
} from '@arco-design/web-vue/es/icon/index.js'

const isMaximized = ref(false)
const props = defineProps<{ title?: string }>()
const visible = ref(false)

const winMaximizedEvent = (): void => {
  isMaximized.value = true
}

const winUnmaximizeEvent = (): void => {
  isMaximized.value = false
}
const handleOk = () => {
  window.jsBridge.sendIpcName(APP_QUIT)
}
const handleOpen = () => {
  visible.value = true
}

const handleCancel = () => {
  visible.value = false
}

const handleTray = () => {
  handleCancel()
  window.jsBridge.invokeIpcName(SHOW_TRAY)
}

const minimizeWindow = () => window.jsBridge.invokeIpcName('minimizeWindow')
const unmaximizeWindow = () => window.jsBridge.invokeIpcName('unmaximizeWindow')
const maxmizeWin = () => window.jsBridge.invokeIpcName('maxmizeWindow')

onMounted(() => {
  window.jsBridge.onIpcName('windowMaximized', winMaximizedEvent)
  window.jsBridge.onIpcName('windowUnmaximized', winUnmaximizeEvent)
  window.jsBridge.onIpcName(CLOSE_WINDOW, handleOpen)
})

onUnmounted(() => {
  window.jsBridge.offIpcName('windowMaximized', winMaximizedEvent)
  window.jsBridge.offIpcName('windowUnmaximized', winUnmaximizeEvent)
  window.jsBridge.offIpcName(CLOSE_WINDOW, handleOpen)
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
            <IconFullscreen />
          </div>
        ) : (
          <div onClick={maxmizeWin}>
            <IconCopy />
          </div>
        )}
        <div onClick={handleOpen}>
          <IconClose class="icon-close" />
        </div>
      </div>
    </div>
  )
}
</script>

<template>
  <Render />
  <a-modal
    v-model:visible="visible"
    :mask-closable="false"
    :hide-cancel="true"
    :closable="false"
    :width="400"
    title="温馨提示"
    :footer="false"
  >
    <div class="exit-process">
      <icon-info-circle-fill
        :style="{
          color: '#ff7d00',
          marginRight: '4px'
        }"
        size="20"
      />
      <span>是否退出程序？</span>
    </div>
    <a-row justify="end">
      <a-space>
        <a-button @click="handleCancel">取消</a-button>
        <a-dropdown>
          <a-button type="primary">确认退出</a-button>
          <template #content>
            <a-doption @click="handleOk">退出主程序</a-doption>
            <a-doption @click="handleTray">最小到托盘</a-doption>
          </template>
        </a-dropdown>
      </a-space>
    </a-row>
  </a-modal>
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

.exit-process {
  display: flex;
  align-items: center;
}
</style>
