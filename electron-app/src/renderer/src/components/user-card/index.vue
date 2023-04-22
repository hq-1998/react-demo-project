<script setup lang="ts">
interface Item {
  name: string
  num: number
}

interface IProps {
  list: Array<Item>
}
const props = withDefaults(defineProps<IProps>(), {
  list: () => []
})
</script>

<template>
  <div class="userbox">
    <div class="profile">
      <div>
        <img
          src="https://p3-passport.byteimg.com/img/user-avatar/de16d482f450fe84e9eb317c32ea717a~100x100.awebp"
          alt="用户xxx的头像"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <div class="username-container">
          <p class="username">用户3440788758002</p>
          <div class="vip-level">
            <img
              src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/162b40efbd71af9a806dd2b54c4580ef.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="status">
      <a v-for="item in props.list" :key="item.name" class="item">
        <div class="count">{{ item.num }}</div>
        <div class="title">{{ item.name }}</div>
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
