<script name="aside-bar" setup lang="ts">
import SignIn from '@renderer/components/sign-in/index.vue'
import AuthorRank from '@renderer/components/author-rank/index.vue'
import LinkRecommend from '@renderer/components/link-recommend/index.vue'
import CopyRight from '@renderer/components/copy-right/index.vue'

const bannerList = [
  {
    url: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b084728411ed451da33065ec644b025d~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?'
  },
  {
    url: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/513e1d89a09b4a0ebab67c6a1dc94901~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?'
  },
  {
    url: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1d5e8b7f7104823bf8b5fceabee38e8~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?'
  }
]
</script>

<template>
  <div>
    <SignIn />
    <div v-for="item in bannerList" :key="item.url" class="sidebar-block banner-block banner">
      <img class="banner-image" :src="item.url" width="240" height="200" />
      <div class="ctrl-box">
        <a class="label">
          <span>广告</span>
        </a>
      </div>
    </div>
    <div class="block-body">
      <a>
        <div class="app-link">
          <img
            class="qr-code"
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
          />
          <div class="content-box">
            <div class="head-line">下载稀土掘金APP</div>
            <div class="desc">一个帮助开发者成长的社区</div>
          </div>
        </div>
      </a>
    </div>
    <div class="sidebar-block user-block">
      <AuthorRank />
    </div>
    <div class="sidebar-block link-block">
      <LinkRecommend />
    </div>
    <div class="index-aside-footer">
      <CopyRight />
    </div>
  </div>
</template>

<style lang="less" scoped>
.banner {
  height: 200px;
  position: relative;
  font-size: 0;
  cursor: pointer;

  .banner-image {
    width: 100%;
    height: 100%;
  }

  .ctrl-box {
    .label {
      position: absolute;
      right: 10px;
      bottom: 10px;
      line-height: 36px;
      height: 36px;
      font-size: 20px;
      z-index: 1;
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
      transform-origin: right bottom;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
      border: 1px solid #fff;
      border-radius: 6px;
      padding-left: 15px;
      padding-right: 15px;
      font-weight: 300;

      span {
        line-height: 36px;
        font-size: 20px;
        vertical-align: top;
      }
    }
  }
}

.sidebar-block.banner-block {
  overflow: hidden;
}

.index-aside-footer {
  background-color: transparent;
  box-shadow: none;
}

.sidebar-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}

.user-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin: 1.3rem 0;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}

.block-body {
  background-color: #fff;
  .app-link {
    display: flex;
    align-items: center;
    padding: 1rem;

    .qr-code {
      margin-right: 16px;
      width: 4.167rem;
      height: 4.167rem;
    }

    .content-box {
      cursor: pointer;
      color: #909090;

      .head-line {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        color: #1d2129;
      }

      .desc {
        margin-top: 0.5rem;
        font-size: 12px;
        line-height: 20px;
        color: #86909c;
      }
    }
  }
}
</style>
