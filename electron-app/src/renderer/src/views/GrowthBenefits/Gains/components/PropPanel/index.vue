<script setup lang="ts">
import { IconCaretRight } from '@arco-design/web-vue/es/icon'

interface IListItem {
  /** 道具名称 */
  title: string
  /** 中奖时间 */
  date: string
  /** 道具图片 */
  url: string
  /** 是否可回收 0 可回收 1 不可回收 */
  isRecycle: number
  /** 类型 0 惊喜好物 1 我的道具 */
  type: number
}

interface IProps {
  list: IListItem[]
}

withDefaults(defineProps<IProps>(), {
  list: () => []
})
</script>

<template>
  <div class="tab-pane">
    <div class="gainlist-container content">
      <div class="gains-wrapper">
        <div class="list-wrapper">
          <div class="list">
            <div v-for="item in list" :key="item.title" class="item">
              <div class="img-wrapper">
                <img :src="item.url" class="item-icon" />
              </div>
              <div class="main">
                <p class="goods-name">{{ item.title }}</p>
                <p class="date">中奖时间：{{ item.date }}</p>
                <div class="buttons">
                  <button class="button-item disabled actived">
                    查看信息
                    <icon-caret-right />
                  </button>
                  <button :disabled="true" class="button-item disabled">
                    官方回收 <icon-caret-right />
                  </button>
                  <button :disabled="true" class="button-item disabled">
                    公益捐赠 <icon-caret-right />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
