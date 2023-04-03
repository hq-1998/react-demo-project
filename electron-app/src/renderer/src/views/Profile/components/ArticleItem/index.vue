<script lang="ts" setup></script>

<template>
  <div class="list-body">
    <div class="post-list-box">
      <div class="sub-header">
        <div class="sub-header-title">文章</div>
        <div class="sub-type-box">
          <a class="sub-type">热门</a>
          <a class="sub-type">最新</a>
        </div>
      </div>
      <div class="entry-list list"></div>
    </div>
    <div class="empty-box">
      <img
        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ed038d31a0ab338af3a27716116e762f.svg"
      />
      <div class="empty-text">
        <span>这里什么都没有</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list-body {
  .post-list-box {
    background-color: #fff;

    .sub-header {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 2.4rem;
      height: 4rem;
      white-space: nowrap;
      border-bottom: 2px solid rgba(230, 230, 231, 0.5);

      &-title {
        margin-right: 1rem;
        font-size: 1.25rem;
        font-weight: 600;
        color: #000;
      }

      .sub-type-box {
        margin-left: auto;

        .sub-type {
          position: relative;
          padding: 1rem 0;
          font-size: 1.167rem;
          color: #72777b;
        }

        .sub-type:not(:last-child) {
          margin-right: 2rem;

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: -1rem;
            margin-top: -0.5em;
            width: 1px;
            height: 1em;
            background-color: #b2bac2;
            opacity: 0.5;
          }
        }
      }
    }
  }

  .empty-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    font-size: 1.167rem;
    font-weight: 500;
    color: #b2bac2;
    cursor: default;
    user-select: none;
    background-color: var(--juejin-layer-1);

    .empty-text {
      margin-top: 1.2rem;
    }
  }
}
</style>
