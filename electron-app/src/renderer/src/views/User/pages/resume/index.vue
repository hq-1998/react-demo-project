<script setup lang="ts"></script>

<template>
  <div class="sub-view-box">
    <div class="view setting-resume-view">
      <div class="header">
        <h1 class="title">简历管理</h1>
        <span class="desc"> 仅支持pdf格式，文件大小需小于10M </span>
        <a-button type="primary">上传简历</a-button>
      </div>
      <div class="content">
        <div class="empty-box no-data">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/bb7e8441a421dad90658aad7618eac7b.svg"
          />
          <div class="empty-text">
            <span>暂无简历</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './styles.less';
</style>
