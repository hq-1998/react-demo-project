<script setup lang="ts">
import {
  IconWeiboCircleFill,
  IconGithub,
  IconGoogleCircleFill,
  IconRight
} from '@arco-design/web-vue/es/icon/index.js'
import { useRouter } from 'vue-router'
import Tabs from './components/Tabs/index.vue'
import { onMounted, ref, onUnmounted } from 'vue'

const router = useRouter()

const badgeList = [
  'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff0a4138594d43af9afb97c1165a311e~tplv-k3u1fbpfcp-image.image?',
  'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52812354bef5481793d4b0dfa694b452~tplv-k3u1fbpfcp-image.image',
  'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eff84f037b0b4932929750da9bee428d~tplv-k3u1fbpfcp-image.image',
  'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0817d9fbbc554ce68b2698ed066b7f7b~tplv-k3u1fbpfcp-image.image',
  'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d27e611702284080b73d931990a040a9~tplv-k3u1fbpfcp-image.image'
]

const jumpProfilePage = () => {
  router.push('/user')
}

const currentIndex = ref(0)
let timer: NodeJS.Timer

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value += 1
    if (currentIndex.value > 3) {
      currentIndex.value = 0
    }
  }, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const questionList = [
  '你有哪些爱好？',
  '你的武器库有哪些武 (ji) 器 (shu) ？',
  '你的人生格言是什么？',
  '你的信仰是什么？'
]
</script>

<template>
  <div class="container main-container">
    <div class="view user-view">
      <div class="major-area">
        <div class="user-info-block block shadow">
          <img
            class="avatar"
            alt="用户34407888758002的个人资料头像"
            src="https://p3-passport.byteimg.com/img/user-avatar/de16d482f450fe84e9eb317c32ea717a~180x180.awebp"
          />
          <div class="info-box">
            <div class="top">
              <div class="left">
                <h1 class="username">
                  <span class="user-name">用户34407888758002</span>
                </h1>
              </div>
              <div class="link-box">
                <a
                  title="绑定微博"
                  rel="nofollow noopener noreferrer"
                  class="weibo-link link inactive"
                  :size="21"
                >
                  <icon-weibo-circle-fill />
                </a>
                <a
                  title="绑定 Github"
                  rel="nofollow noopener noreferrer"
                  class="github-link link inactive"
                  :size="21"
                >
                  <icon-github />
                </a>
                <a
                  title="设置个人主页地址"
                  rel="nofollow noopener noreferrer"
                  class="site-link link inactive"
                  :size="21"
                >
                  <icon-google-circle-fill />
                </a>
              </div>
            </div>
            <div class="user-info-icon">
              <img
                alt="掘友等级"
                title="掘友等级"
                class="jueyou-level"
                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/cf19b122213ebdbd25b66f02500b8c27.svg"
              />
              <div class="vip-level">
                <span class="tooltip">
                  <span class="byte-tooltip__wrapper">
                    <img
                      src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/162b40efbd71af9a806dd2b54c4580ef.svg"
                    />
                  </span>
                </span>
              </div>
            </div>
            <div class="introduction">
              <div class="left">
                <div class="position">
                  <div title="填写职位信息" class="info-input">你从事什么职业？</div>
                </div>
                <div class="intro">
                  <div title="填写个人介绍" class="info-input">
                    {{ questionList[currentIndex] }}
                  </div>
                </div>
              </div>
              <div class="right">
                <a-button type="outline" @click="jumpProfilePage">编辑个人资料</a-button>
              </div>
            </div>
          </div>
        </div>
        <a class="badge-wall">
          <div class="badge-wrap">
            <div class="badge-left">
              <img
                alt=""
                class="count-icon"
                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/badge-count-icon.0586ac4.png"
              />
              <div class="badge-count">获得徽章 5</div>
            </div>
            <ul class="badge-list">
              <li v-for="item in badgeList" :key="item" class="badge-item">
                <img alt="" :src="item" class="badge-item-img" />
              </li>
              <icon-right class="badge-icon" />
            </ul>
          </div>
        </a>
        <div class="list-block">
          <Tabs />
        </div>
      </div>
      <div class="minor-area">
        <div class="sticky-wrap sticky">
          <div class="follow-block block shadow">
            <a class="follow-item">
              <div class="item-title">关注了</div>
              <div class="item-count">4</div>
            </a>
            <a class="follow-item">
              <div class="item-title">关注了</div>
              <div class="item-count">4</div>
            </a>
          </div>
          <div class="more-block block">
            <a class="more-item">
              <div class="item-title">收藏集</div>
              <div class="item-count">1</div>
            </a>
            <a class="more-item">
              <div class="item-title">关注标签</div>
              <div class="item-count">5</div>
            </a>
            <a class="more-item">
              <div class="item-title">加入于</div>
              <div class="item-count">2022-05-17</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-container {
  top: calc(30px + 5rem);

  .user-view {
    display: flex;
    margin-bottom: 6rem;
    margin-top: 1.767rem;

    .major-area {
      flex: 1 1 auto;
      min-width: 0;

      .user-info-block {
        display: flex;
        padding: 2.5rem;

        .avatar {
          flex: 0 0 auto;
          margin-right: 2.4rem;
          width: 7.5rem;
          height: 7.5rem;
          background-color: #f9f9f9;
          border-radius: 50%;
        }

        .info-box {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;

            .left {
              display: flex;

              .username {
                display: flex;
                align-items: center;
                margin: 0;
                padding: 0;
                font-size: 20px;
                font-weight: 600;
                line-height: 1.2;
                color: #000;

                .user-name {
                  display: inline-block;
                }
              }
            }

            .link-box {
              .link.inactive {
                opacity: 0.5;
                filter: grayscale(100%);

                &:not(:first-child) {
                  margin-left: 1rem;
                }
              }
            }
          }

          .user-info-icon {
            display: flex;
            align-items: center;
            line-height: 1.2;
            margin-bottom: 8px;

            .jueyou-level {
              margin-left: 0.667rem;
              width: 3.75rem;
              height: 1.3333rem;
              object-fit: contain;
            }

            .vip-level {
              width: 16px;
              height: 16px;
              cursor: pointer;
              display: flex;
              position: relative;
              margin-left: 4px;

              .tool-top {
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                color: #fff;
              }
            }
          }

          .introduction {
            display: flex;
            justify-content: space-between;

            .left {
              .position {
                font-size: 1.25rem;
                line-height: 1.5;
                color: #72777b;
                overflow: hidden;

                .info-input {
                  color: #4a68ad;
                  cursor: pointer;

                  &:hover {
                    opacity: 0.8;
                  }

                  &::before {
                    content: '+ ';
                  }
                }
              }

              .intro {
                margin-top: 0.4rem;
                font-size: 1.25rem;
                line-height: 1.5;
                color: #72777b;
                overflow: hidden;

                .info-input {
                  color: #4a68ad;
                  cursor: pointer;

                  &:hover {
                    opacity: 0.8;
                  }

                  &::before {
                    content: '+ ';
                  }
                }
              }
            }

            .right {
              display: flex;
              align-items: flex-end;
            }
          }
        }
      }

      .badge-wall {
        display: flex;
        background-color: #fff;
        height: 52px;
        align-items: center;
        font-family: PingFang SC;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #1d2129;
        padding: 0 2.5rem;

        .badge-wrap {
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #e4e6eb;

          .badge-left {
            display: flex;
            align-items: center;
            height: 28px;

            .count-icon {
              width: 20px;
              height: 20px;
              margin-right: 8px;
            }
          }

          .badge-list {
            display: flex;
            height: 28px;
            align-items: center;

            .badge-item {
              height: 28px;
              margin-right: 4px;

              .badge-item-img {
                width: 28px;
                height: 28px;
              }
            }

            .badge-icon {
              margin-left: 10px;
              width: 14px;
              height: 14px;
              color: #959ea8;
            }
          }
        }
      }

      .list-block {
        margin-top: 1rem;
      }

      .block {
        background-color: #fff;
        border-radius: 2px;
      }

      .shadow {
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
      }
    }

    .minor-area {
      flex: 0 0 auto;
      margin-left: 1rem;
      width: 20rem;
      line-height: 1.2;

      .sticky {
        position: fixed;
        top: calc(6.767rem + 30px);
        width: 20rem;
        transition: all 0.2s;

        .follow-block {
          display: flex;
          position: relative;
          margin-bottom: 1rem;

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 1px;
            height: 50%;
            background-color: #f3f3f4;
            transform: translate(-50%, -50%);
          }

          .follow-item {
            flex: 1 1 auto;
            padding: 1.333rem 0;
            text-align: center;
            color: #31445b;

            .item-title {
              font-size: 1.333rem;
              font-weight: 500;
            }

            .item-count {
              margin-top: 0.5rem;
              font-size: 1.25rem;
              font-weight: 600;
            }
          }
        }

        .more-block {
          background-color: transparent;

          .more-item {
            display: flex;
            padding: 1.25rem 0.417rem;
            font-size: 1.25rem;
            color: #000;
            border-top: 1px solid rgba(230, 230, 231, 0.5);

            &:last-child {
              border-bottom: 1px solid rgba(230, 230, 231, 0.5);
            }

            .item-title {
              margin-right: auto;
            }
          }
        }
      }
    }
  }
}
</style>
