<script lang="ts" setup>
import { IconSearch, IconDelete } from '@arco-design/web-vue/es/icon/index.js'
import ClearRecordModal from './components/ClearRecordModal/index.vue'
import { ref } from 'vue'

const descriptList = [
  {
    time: '2023.02.26',
    id: 1,
    list: [
      {
        title: '迄今为止我写过最复杂的算法',
        abstract:
          '《亲戚计算器》大概是我迄今为止写过最复杂的算法了，它可能看起来它好像逻辑简单，仅1个方法调用而已，却耗费了我大量的时间！从一开始灵光乍现，想到实现它的初步思路，到如今开源已7年多了。这期间，我一直在不',
        username: 'passer-by6061',
        read: '607阅读',
        praise: '1赞',
        comment: '0评论',
        url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2cbfafe8bb94e4f90758ee4de3620b8~tplv-k3u1fbpfcp-watermark.image?',
        id: 1
      },
      {
        title: 'package.json 配置完全解读',
        abstract:
          'package.json 是前端每个项目都有的 json 文件，里面有许许多多的配置，与项目息息相关，了解它们有助于了解项目，提效开发，规范代码。',
        username: 'Leecason',
        read: '1w+阅读',
        praise: '319赞',
        comment: '16评论',
        url: 'http://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b04ee6fe4b0845b0bba56343961dc331~tplv-k3u1fbpfcp-watermark.image?',
        id: 2
      },
      {
        title: '冷知识，Chrome 控制台console.log()为什么返回undefined',
        abstract:
          '在Chrome控制台中，使用`console.log()`输出数据，例如`console.log("Hello World")`,第二个返回值是`undefiend',
        username: '半夏的故事',
        read: '861阅读',
        praise: '8赞',
        comment: '3评论',
        url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35500177142f4402a4ab396bb3f902ac~tplv-k3u1fbpfcp-watermark.image?',
        id: 3
      },
      {
        title: 'vue中Axios的封装和API接口的管理',
        abstract:
          '回归正题，我们所要的说的axios的封装和api接口的统一管理，其实主要目的就是在帮助我们简化代码和利于后期的更新维护。 在vue项目中，和后台交互获取数据这块，我们通常使用的是axios库，它是基于promise的http库，可运行在浏览器端和node.js中。他有很多优秀的…',
        username: '愣锤',
        read: '24w+阅读',
        praise: '4k+赞',
        comment: '340评论',
        url: '',
        id: 4
      }
    ]
  },
  {
    time: '2023.02.25',
    id: 2,
    list: [
      {
        title: 'Docker 是怎么实现的？前端怎么用 Docker 做部署？',
        abstract:
          '代码开发完之后，要经过构建，把产物部署到服务器上跑起来，这样才能被用户访问到。 不同的代码需要不同的环境，比如 JS 代码的构建需要 node 环境，Java 代码 需要 JVM 环境，一般我们会把',
        username: 'zxg_神说要有光',
        read: '1w+阅读',
        praise: '191赞',
        comment: '14评论',
        url: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4086c903fa4346f1929b4ac0f2491b11~tplv-k3u1fbpfcp-watermark.image?',
        id: 1
      },
      {
        title: '如何使用jenkins搭建一个中小企业前端项目部署环境',
        abstract:
          '文章内容 传统发布和现在发布的对比和区别 项目案例-手动上传服务器，使用jenkins上传服务器 配置不同的发布环境 配置域名 配置https 配置钉钉机器人通知 服务器购买：抢占式实例 Jenkin',
        username: '白哥学前端',
        read: '8k+阅读',
        praise: '153赞',
        comment: '11评论',
        url: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fe37baf75494af8bc0a63295702a12f~tplv-k3u1fbpfcp-watermark.image?',
        id: 2
      },
      {
        title: '前端工程化基石 -- AST（抽象语法树）以及AST的广泛应用🔥',
        abstract:
          '本文将从一道小学语文题出发，由浅入深的讲述AST的设计原理以及各种衍生应用，在这过程中会手写各种好玩的插件，弄懂ESLint和代码压缩等这类基建原理，最后通过最佳实践直接助你成为基建大师。',
        username: '不要秃头啊',
        read: '9k+阅读',
        praise: '375赞',
        comment: '51评论',
        url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c94a34948d640fd90d4194c26b79b61~tplv-k3u1fbpfcp-watermark.image?',
        id: 3
      }
    ]
  }
]

const visible = ref(true)

const toggleVisible = () => {
  visible.value = true
  console.log(visible)
}
</script>

<template>
  <div class="content">
    <div class="foot-mark-list">
      <div class="search-input">
        <div class="title">浏览记录</div>
        <div class="operation">
          <div class="search-ipt">
            <a-input placeholder="搜索标题关键词" allow-clear>
              <template #suffix>
                <icon-search />
              </template>
            </a-input>
          </div>
          <div class="clear-btn" @click="toggleVisible">
            <icon-delete :size="16" style="margin-right: 4px" />
            清空记录
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-for="item in descriptList" :key="item.id" class="descrip-list">
        <div class="item-list">
          <div class="item-show">
            <div class="time-show">
              <img
                class="date-img"
                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1eb4dc8f8859869b5f936cef665dba44.svg"
              />
              <span class="date">{{ item.time }}</span>
            </div>
            <div v-for="article in item.list" :key="article.id" class="art-list">
              <div class="normal">
                <div class="left">
                  <a class="title">
                    <div class="title-descrip title-article">文章</div>
                    <h2 class="text-highlight title-art">{{ article.title }}</h2>
                  </a>
                  <div class="abstract">
                    {{ article.abstract }}
                  </div>
                  <div class="user-info">
                    <a class="username">{{ article.username }}</a>
                    <div class="separator"></div>
                    <div class="active-info">
                      <li class="read">{{ article.read }}</li>
                      <li class="dot">·</li>
                      <li class="parise">{{ article.praise }}</li>
                      <li class="dot">·</li>
                      <li class="comment">{{ article.comment }}</li>
                    </div>
                  </div>
                </div>
                <div v-if="article.url" class="right">
                  <img :src="article.url" class="cover" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ClearRecordModal v-model:visible="visible" />
  </div>
</template>

<style lang="less" scoped>
.content {
  width: 876px;
  background-color: #fff;
  margin: 24px auto 0;
  border-radius: 2px;
  position: relative;
  top: calc(30px + 5rem);

  .foot-mark-list {
    .search-input {
      padding: 18px 24px 0;
      display: flex;
      height: 32px;
      justify-content: space-between;
      align-items: center;
      font-family: PingFang SC;
      font-style: normal;

      .title {
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: var(--juejin-font-1);
        font-size: 20px;
        font-weight: 600;
      }

      .operation {
        display: flex;
        flex-direction: row;

        .search-ipt {
          width: 240px;
          height: 36px;
          box-sizing: border-box;
        }

        .clear-btn {
          display: flex;
          background-color: transparent;
          align-items: center;
          color: var(--juejin-font-3);
          font-size: 14px;
          margin-left: 24px;
          cursor: pointer;
        }
      }
    }
  }

  .descrip-list {
    overflow-y: auto;
    margin-top: 22px;

    .item-list {
      padding: 0 24px;
      margin: 0 0 0px 0.5px;
      .time-show {
        display: flex;
        align-items: center;
        height: 24px;

        .date-img {
          height: 11px;
          width: 11px;
          margin-right: 8.5px;
        }

        .date {
          height: 24px;
          font-size: 14px;
          font-weight: 500;
          line-height: 24px;
          text-align: center;
        }
      }

      .art-list {
        .normal {
          border-top: 1px solid #e4e6eb;
          padding: 12px 0;
          display: flex;
          justify-content: space-between;

          .left {
            .title {
              color: var(--juejin-font-1);
              cursor: pointer;
              display: flex;
              align-items: center;
              height: 24px;

              .title-descrip {
                min-width: 40px;
                height: 24px;
                border-radius: 4px;
                font-size: 12px;
                text-align: center;
                line-height: 24px;
              }

              .title-article {
                background-color: #eaf2ff;
                color: #1e80ff;
              }

              .title-art {
                padding-left: 8px;
                font-size: 16px;
                font-weight: 600;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
              }

              &:visited {
                color: #86909c;
              }
            }

            .abstract {
              margin-top: 6px;
              height: 22px;
              line-height: 22px;
              font-size: 13px;
              color: #9398a3;
              font-family: PingFang SC;
              font-style: normal;
              font-weight: 400;
              display: -webkit-box;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
            }

            .user-info {
              display: flex;
              margin-top: 12px;

              .username {
                height: 20px;
                font-family: PingFang SC;
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 20px;
                color: #515767;
                margin-right: 8px;
              }

              .separator {
                width: 0;
                height: 12px;
                border: 0.5px solid #e4e6eb;
                margin-right: 8px;
                margin-top: 3px;
              }

              .active-info {
                display: flex;
                align-items: center;
                height: 20px;
                line-height: 20px;
                color: #819a9f;

                .dot {
                  color: #819a9f;
                }

                li {
                  padding: 0 2.5px;
                }
              }
            }
          }

          .right {
            margin-top: 14px;
            min-width: 120px;
            width: 120px;
            min-height: 80px;
            height: 80px;
            margin-left: 24px;
            border-radius: 2px;

            .cover {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
