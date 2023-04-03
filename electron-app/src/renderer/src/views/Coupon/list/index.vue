<script lang="ts" setup>
import Tabs from './components/Tabs/index.vue'
import List from './components/List/index.vue'

const tabsList = [
  {
    label: '未使用',
    key: 'unused'
  },
  {
    label: '已使用',
    key: 'used'
  },
  {
    label: '已过期',
    key: 'expired'
  }
]
</script>

<template>
  <div class="header-container-wrap">
    <div class="header-container">
      <div class="title-wrap">
        <div class="title">我的优惠卷</div>
      </div>
      <Tabs :tabs-list="tabsList">
        <template #extra>
          <a class="invite-btn">
            <img
              src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/invite.e0afb87.png"
            />
          </a>
        </template>
        <template #content="item">
          <List :item="item" />
        </template>
      </Tabs>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header-container-wrap {
  position: relative;
  box-sizing: border-box;
  width: 800px;
  min-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
  top: calc(30px + 5rem);

  .header-container {
    background-color: var(--juejin-layer-1);
    border-radius: 2px;
    min-height: calc(100vh - 5rem - 70px);

    .title-wrap {
      box-sizing: border-box;
      border-radius: 2px 2px 0 0;
      overflow: hidden;

      .title {
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: var(--juejin-font-1);
        background-color: var(--juejin-layer-1);
        padding: 20px 24px 4px;
      }
    }

    .tabs-container {
      background: var(--juejin-layer-1);
      padding: 0 24px;
      border-radius: 0 0 2px 2px;

      .invite-btn {
        img {
          width: 120px;
          height: 32px;
        }
      }
    }
  }
}
</style>
