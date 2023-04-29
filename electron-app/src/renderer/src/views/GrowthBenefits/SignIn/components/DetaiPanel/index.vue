<script lang="ts" setup>
import { toRefs } from 'vue'

interface IProps {
  title: string
  explain: string
  url: string
  btnText: string
}

const props = defineProps<IProps>()
const { title, explain, url, btnText } = toRefs(props)
</script>

<template>
  <a class="common">
    <div class="desc">
      <div class="title">{{ title }}</div>
      <div class="explanation">{{ explain }}</div>
      <button class="entry-btn">
        <div class="btn-desc">{{ btnText }}</div>
        <img
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/929a73ce5b57ca05da7fae6023969492.svg"
          class="right-arrow"
          alt=""
        />
      </button>
    </div>
    <div class="banner">
      <img alt="" :src="url" />
    </div>
  </a>
</template>

<style lang="less" scoped>
.common {
  width: 467px;
  height: 120px;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;

  .desc {
    margin-top: 2px;

    .title {
      font-weight: 500;
      font-size: 18px;
      color: #1d2129;
    }

    .explanation {
      margin-top: 4px;
      font-size: 14px;
      color: #8a919f;
      height: 20px;
      line-height: 20px;
    }

    .entry-btn {
      margin-top: 10px;
      border: 1px solid #1e80ff;
      border-radius: 50px;
      width: 98px;
      height: 32px;
      background-color: unset;
      color: #1c78f0;
      padding: 5px 14px;
      outline: none;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;
      appearance: none;
      display: flex;
      align-items: center;
      justify-content: center;

      .btn-desc {
        margin-right: 8px;
        white-space: nowrap;
        font-size: 12px;
      }

      .right-arrow {
        vertical-align: middle;
      }
    }
  }

  .banner {
    width: 178px;
    height: 96px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
