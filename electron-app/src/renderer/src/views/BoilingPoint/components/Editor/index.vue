<script lang="ts" setup>
import { ref } from 'vue'
import { IconRight } from '@arco-design/web-vue/es/icon/index.js'
import SelectCircle from '@renderer/components/select-circle/index.vue'
import { circleTypes, circleContents } from './mock'
import code from '@renderer/assets/icons/code.svg'
import face from '@renderer/assets/icons/face.svg'
import image from '@renderer/assets/icons/image.svg'
import topic from '@renderer/assets/icons/topic.svg'
import link from '@renderer/assets/icons/link.svg'

const popupVisible = ref(false)
const iconList = [
  {
    name: '表情',
    url: face
  },
  {
    name: '图片',
    url: image
  },
  {
    name: '链接',
    url: link
  },
  {
    name: '话题',
    url: topic
  },
  {
    name: '代码',
    url: code
  }
]
</script>

<template>
  <div class="pin-editor-dialog pin-editor">
    <div class="editor-body">
      <div class="content">
        <div class="editor-content editor">
          <div class="auth-card">
            <div
              :contenteditable="true"
              :spellcheck="false"
              placeholder="快和掘友一起分享新鲜事！告诉你个小秘密，发布沸点时添加圈子和话题会被更多掘友看到哦～"
              class="rich-editor"
            >
              <span data-node="theme" :contenteditable="false" style="color: #1e80ff"
                >#新人报道#</span
              >
            </div>
            <div class="topicwrapper">
              <span>
                <SelectCircle
                  v-model:popup-visible="popupVisible"
                  :types="circleTypes"
                  :contents="circleContents"
                >
                  <div class="new_topic">
                    <img class="circle" src="../../../../assets/images/boilingPoint/circle.png" />
                    请选择圈子
                    <icon-right size="8" class="arrow-right" />
                  </div>
                </SelectCircle>
              </span>
            </div>
            <span class="word-counter count"> 0/1000 </span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="editor-toolbar">
        <div class="tool">
          <div v-for="item in iconList" :key="item.name" class="picker">
            <img class="icon" :src="item.url" />
            <span class="link">{{ item.name }}</span>
          </div>
        </div>
        <a-button type="primary" size="large" disabled>发布</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
