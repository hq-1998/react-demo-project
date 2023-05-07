<script lang="ts" name="gainsTabs" setup>
interface IListItem {
  title: string
  key: string
}

interface IProps {
  list: IListItem[]
  current: number
}

withDefaults(defineProps<IProps>(), {
  list: () => [],
  current: 0
})

defineEmits(['update:current'])
</script>

<template>
  <div>
    <div class="tab-nav">
      <div class="tab-nav-item-wrap">
        <div class="tab-nav-item-scroll">
          <div class="tab-nav-item-list" :style="{ transform: 'translateX(0px)' }">
            <div
              class="tab-bar tab-bar-horizontal"
              :style="{
                transform: 'translateX(' + (current * 112 + 20) + 'px)'
              }"
            />
            <div
              v-for="(item, index) in list"
              :key="item.key"
              :data-id="`tab-${item.key}`"
              :class="['tab-nav-item', index === current && 'tab-nav-active']"
              @click="$emit('update:current', index)"
            >
              <span class="tab-nav-item-text">{{ item.title }}</span>
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
