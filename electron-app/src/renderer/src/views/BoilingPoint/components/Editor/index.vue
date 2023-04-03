<script lang="ts" setup>
import { IconRight } from '@arco-design/web-vue/es/icon/index.js'
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
                <div class="new_topic">
                  <img class="circle" src="../../../../assets/images/boilingPoint/circle.png" />
                  请选择圈子
                  <icon-right size="8" class="arrow-right" />
                </div>
              </span>
            </div>
            <span class="word-counter count"> 0/1000 </span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
