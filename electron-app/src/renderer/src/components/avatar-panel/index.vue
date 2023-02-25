<script setup lang="ts">
import { IconRight, IconUser } from '@arco-design/web-vue/es/icon/index.js'

const dropList = [
  {
    label: '我的主页',
    icon: 'icon-user'
  },
  {
    label: '成长福利',
    icon: 'icon-trophy'
  },
  {
    label: '闪念笔记',
    icon: 'icon-edit'
  },
  {
    label: '会员中心',
    icon: 'icon-relation'
  },
  {
    label: '课程中心',
    icon: 'icon-calendar-clock'
  },
  {
    label: '我的优惠',
    icon: 'icon-gift'
  },
  {
    label: '我的报名',
    icon: 'icon-layers'
  },
  {
    label: '我的足迹',
    icon: 'icon-tags'
  }
]
</script>

<template>
  <div class="light-shadow">
    <div class="user-card">
      <div class="user-info">
        <a-row class="user-wrapper" :wrap="false">
          <div class="avatar">
            <img
              alt="头像"
              class="lazy avatar"
              src="https://p3-passport.byteimg.com/img/user-avatar/de16d482f450fe84e9eb317c32ea717a~100x100.awebp"
            />
            <div class="vip-level vip-icon">
              <span class="tooltip">
                <span class="byte-tooltip__wrapper">
                  <img
                    alt="vip"
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/162b40efbd71af9a806dd2b54c4580ef.svg"
                  />
                </span>
              </span>
            </div>
          </div>
          <div class="user-detail">
            <a class="username">
              <span> 用户3440788758002 </span>
            </a>
            <a class="ore">
              矿石
              <span>3.5w</span>
              <icon-right />
            </a>
          </div>
        </a-row>

        <a class="progress-bar">
          <div class="jscore">
            <div class="jscore-level">掘友等级 <span class="bold">JY.5</span></div>
            <div class="progress">
              <span> 592.5 / 2000 </span>
              <icon-right :style="{ color: '#8a919f' }" />
            </div>
          </div>
          <div class="bar">
            <div class="current-bar" style="width: 61.62px"></div>
          </div>
        </a>

        <ul class="actions-count-list">
          <li class="item">
            <a>
              <div class="item-count">3</div>
              <div class="item-name">关注</div>
            </a>
          </li>
          <li class="item">
            <a>
              <div class="item-count">7</div>
              <div class="item-name">赞过</div>
            </a>
          </li>
          <li class="item">
            <a>
              <div class="item-count">7</div>
              <div class="item-name">收藏</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <ul class="dropdown-list">
      <li v-for="item in dropList" :key="item.icon" class="drop-item">
        <a class="open-menu-page">
          <a-badge :count="9" dot :offset="[-4, 2]">
            <icon-user class="menu-icon" :size="20" />
          </a-badge>
          <!-- <icon :type="item.icon" /> -->
          <span class="menu-name">{{ item.label }}</span>
        </a>
      </li>
    </ul>
    <div class="group">
      <a href="/user" class="setting">我的设置</a>
      <a class="logout">退出登录</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.light-shadow {
  background: #fff;
  border-radius: 4px;
  .user-card {
    color: #86909c;
    font-size: 1.167rem;

    .user-info {
      .user-wrapper {
        margin-bottom: 16px;
      }

      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 12px;
        position: relative;

        .vip-icon {
          position: absolute;
          bottom: 0;
          right: 0;
        }

        .vip-level {
          width: 16px;
          height: 16px;
          cursor: pointer;
          display: flex;
          margin-left: 4px;

          .tooltip {
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #fff;

            .byte-tooltip__wrapper {
              font-weight: 400;
              font-size: 14px;
              line-height: 24px;
              color: #fff;

              img {
                width: auto;
                height: auto;
              }
            }
          }
        }
      }

      .user-detail {
        width: 164px;

        .username {
          word-break: break-all;
          font-size: 16px;
          line-height: 18px;
          color: #252933;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          margin-bottom: 8px;
          margin-top: 2px;
          cursor: pointer;

          &:hover {
            color: #515767;
          }
        }

        .ore {
          display: inline-block;
          color: #252933;
          font-size: 12px;
          line-height: 18px;
          cursor: pointer;
        }
      }
      .progress-bar {
        display: block;
        font-size: 12px;
        color: #1e80ff;
        line-height: 18px;
        border-radius: 4px;
        box-sizing: border-box;
        width: 224px;
        padding: 6px 8px 8px;
        background: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/progress-bar.a63566c.png)
          no-repeat;
        background-size: 100% 100%;
        margin-bottom: 16px;

        .jscore {
          display: flex;
          margin-bottom: 4px;
          justify-content: space-between;

          .jscore-level {
            .bold {
              font-weight: 600;
            }
          }

          .progress {
            cursor: pointer;
          }
        }

        .bar {
          width: 208px;
          height: 5px;
          border-radius: 4px;
          background: rgba(30, 128, 255, 0.2);
          position: relative;

          .current-bar {
            height: 5px;
            background: #1e80ff;
            border-radius: 4px;
            position: absolute;
            left: 0;
          }
        }
      }

      .actions-count-list {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid rgba(228, 230, 235, 0.5);
        padding-bottom: 12px;
        margin-bottom: 10px;

        .item {
          width: 74px;
          height: 40px;
          text-align: center;
          line-height: 40px;

          .item-count {
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            color: #252933;
            margin-bottom: 4px;
          }
          .item-name {
            color: #8a919f;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
          }
        }
      }
    }
  }

  .dropdown-list {
    width: 224px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(228, 230, 235, 0.5);
    padding-bottom: 10px;
    box-sizing: border-box;

    .drop-item {
      width: 104px;
      height: 40px;
      line-height: 40px;
      color: #252933;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: #f7f8fa;
      }

      .open-menu-page {
        color: #252933;
        height: 40px;
        display: flex;
        align-items: center;

        .menu-name {
          display: inline-block;
        }

        .menu-icon {
          margin: 0 8px;
          color: #8a919f;
        }
      }
    }
  }

  .group {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #8a919f;
    .setting,
    .logout {
      cursor: pointer;
      color: #8a919f;
      &:hover {
        color: #1e80ff;
      }
    }
  }
}
</style>
