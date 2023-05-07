<script lang="ts" setup>
import GainsTabs from './components/GainsTabs/index.vue'
import PropPanel from './components/PropPanel/index.vue'
import { ref } from 'vue'

const tabsList = [
  {
    title: '惊喜好物',
    key: 'lottery'
  },
  {
    title: '我的道具',
    key: 'virtual'
  }
]

const list = [
  {
    title: '腾腾小站口罩',
    date: '2023-01-25',
    url: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcad989d25ab4377b0656877721406d7~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?',
    isRecycle: 1,
    type: 0
  },
  {
    title: '随机限量徽章一枚',
    date: '2022-11-26',
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a4bcb86e4614b6ea9857c2ee8372076~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?',
    isRecycle: 1,
    type: 0
  },
  {
    title: '公益助力包-中',
    date: '2022-08-31',
    url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/017eee846bdd49c6ad6f68e033e4b933~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?',
    isRecycle: 0,
    type: 0
  }
]

const tabActiveIndex = ref(0)
</script>

<template>
  <div>
    <div class="gains-container main-content">
      <GainsTabs v-model:current="tabActiveIndex" :list="tabsList" />
      <div class="tabs-content">
        <PropPanel :list="list" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-content {
  min-height: calc(100vh - 130px);
}

.gains-container {
  width: 100%;
  overflow: auto;
  background: #fff;
  border-radius: 2px;

  .tabs-content {
    overflow: hidden;
  }
}
</style>
