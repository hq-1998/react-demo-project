<script setup lang="ts">
import { ref } from 'vue'
import { IconCaretLeft, IconCaretRight } from '@arco-design/web-vue/es/icon/index.js'

interface IListItem {
  title: string
  icon: string
}

interface IProps {
  list: IListItem[]
}

const props = withDefaults(defineProps<IProps>(), {
  list: () => []
})

const sliderRef = ref<HTMLDivElement>()

const handleSlide = (leftOffset: number) => {
  sliderRef.value?.scroll({
    left: leftOffset,
    behavior: 'smooth'
  })
}

const currentPage = ref(1)
const totalPage = Math.ceil(props.list.length / 8)

const handleSlideLeft = () => {
  currentPage.value = 1
  handleSlide(0)
}

const handleSlideRight = () => {
  currentPage.value = totalPage
  handleSlide(sliderRef.value!.scrollWidth)
}
</script>

<template>
  <div class="level-privilege">
    <div class="header">
      <div class="title">等级权益</div>
      <div class="slide-control">
        <div class="slide-left" @click="handleSlideLeft">
          <icon-caret-left :class="[currentPage === 1 && 'disabled-icon']" />
        </div>
        <span class="slide-number">{{ currentPage }} / {{ totalPage }}</span>
        <div class="slide-right" @click="handleSlideRight">
          <icon-caret-right :class="[currentPage === totalPage && 'disabled-icon']" />
        </div>
      </div>
    </div>
    <div ref="sliderRef" class="privilege-container">
      <div v-for="item in props.list" :key="item.title" class="item">
        <img :src="item.icon" class="image" />
        <span class="privilege-title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
