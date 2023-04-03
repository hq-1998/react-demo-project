<script setup lang="ts">
import { IconSearch } from '@arco-design/web-vue/es/icon/index.js'
import Focus from '../Focus/index.vue'
import Item from '../Item/index.vue'
import ArticleItem from '../ArticleItem/index.vue'
import SpecialColumnItem from '../SpecialColumnItem/index.vue'
</script>

<template>
  <div class="detail-list">
    <a-tabs class="detail-tabs" default-active-key="1">
      <a-tab-pane key="1" class="detail-pane" title="动态">
        <div class="activity-item">
          <Focus />
        </div>
        <div class="activity-item">
          <Item />
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" title="文章">
        <ArticleItem />
      </a-tab-pane>
      <a-tab-pane key="3" title="专栏">
        <SpecialColumnItem />
      </a-tab-pane>
      <a-tab-pane key="4" title="沸点">沸点</a-tab-pane>
      <a-tab-pane key="5" title="收藏集">收藏集</a-tab-pane>
      <a-tab-pane key="6" title="专注">关注</a-tab-pane>
      <a-tab-pane key="6" title="赞7">赞7</a-tab-pane>
      <template #extra>
        <div class="detail-search">
          <icon-search :size="16" />
        </div>
      </template>
    </a-tabs>
  </div>
</template>

<style lang="less" scoped>
.detail-list {
  .detail-tabs {
    background-color: #fff;

    .detail-pane {
      background-color: #f4f5f5;
    }
  }
  .activity-item {
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 0.2rem;
  }
  .detail-search {
    margin-right: 16px;
    display: flex;
    justify-content: center;
  }

  :deep(.arco-tabs-content) {
    padding-top: 0px;
  }
}
</style>
