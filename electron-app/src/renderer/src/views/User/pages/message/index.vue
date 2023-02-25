<script setup lang="ts"></script>

<template>
  <div class="sub-view-box">
    <div class="setting-message">
      <div class="title">消息设置</div>
      <div class="container">
        <h2 class="im-title">私信设置</h2>
        <div class="allow-send-message">
          <span class="setting-type">允许谁给我发私信</span>
          <a-radio-group default-value="1">
            <a-radio value="1">所有人</a-radio>
            <a-radio value="2">我关注的人</a-radio>
            <a-radio value="3">互相关注的人</a-radio>
            <a-radio value="4">关闭 (不允许任何人给我发私信)</a-radio>
          </a-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './styles.less';
</style>
