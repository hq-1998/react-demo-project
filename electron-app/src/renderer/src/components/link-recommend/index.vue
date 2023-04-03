<script lang="ts" setup>
const recomendList = [
  {
    url: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png',
    title: '稀土掘金漫游指南'
  },
  {
    url: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png',
    title: '安装掘金浏览器插件'
  },
  {
    url: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png',
    title: '前往掘金翻译计划'
  }
]
</script>

<template>
  <ul class="link-list">
    <li v-for="item in recomendList" :key="item.url" class="item">
      <a class="link">
        <img :src="item.url" class="icon" />
        <span class="title">{{ item.title }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.link-list {
  position: relative;
  font-size: 1.16rem;
  line-height: 1;
  color: #333;

  .item {
    position: relative;

    &:hover {
      background-color: hsla(0, 0%, 84.7%, 0.1);
    }

    .link {
      display: flex;
      align-items: center;
      padding: 1rem;
      height: 100%;

      .icon {
        width: 3rem;
        margin-right: 0.8rem;
      }

      .title {
        position: relative;
        font-size: 1.16rem;
        line-height: 1;
        color: #333;
      }
    }
  }
}
</style>
