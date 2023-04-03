<script lang="ts" setup></script>

<template>
  <div class="empty-container empty">
    <img
      src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23317ef66324498897588ee41059055a~tplv-k3u1fbpfcp-zoom-1.image"
      class="img"
    />
    <span class="text">暂无可用优惠券</span>
  </div>
</template>

<style lang="less" scoped>
.empty {
  width: 100%;
  padding-top: 100px;
  text-align: center;
  background-color: var(--juejin-layer-1);

  .img {
    margin-top: 56px;
    width: 180px;
  }

  .text {
    margin-top: 16px;
    font-size: 14px;
    line-height: 24px;
    color: var(--juejin-font-3);
  }
}

.empty-container {
  height: 400px;
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
