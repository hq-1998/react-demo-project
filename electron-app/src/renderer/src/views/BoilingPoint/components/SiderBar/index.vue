<script lang="ts" setup>
import UserCard from '../UserCard/index.vue'
import RecommendCard from '../RecommendCard/index.vue'
import BoilingCard from '../BoilingCard/index.vue'
</script>

<template>
  <div>
    <UserCard />
    <BoilingCard />
    <RecommendCard />
    <div class="guide-link">如何玩转沸点</div>
  </div>
</template>

<style lang="less" scoped>
.guide-link {
  cursor: pointer;
  display: block;
  line-height: 72px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  padding-left: 108px;
  color: #515767;
  margin-top: 20px;
  background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/guide.1535752.png);
  background-color: #fff;
  background-size: 80px;
  background-repeat: no-repeat;
  background-position: 33px -1px;
}
</style>
