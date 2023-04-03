<script setup lang="ts">
import { IconRight } from '@arco-design/web-vue/es/icon/index.js'
const userList = [
  {
    name: '西木鹿亚',
    avatar:
      'https://p3-passport.byteimg.com/img/user-avatar/17864ebbcbaecd76e6d55a3b68882101~100x100.awebp',
    alt: '西木鹿亚的头像',
    signal: '',
    level: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-3.7938ebc.png'
  },
  {
    name: '前端小魔女',
    avatar:
      'https://p3-passport.byteimg.com/img/user-avatar/28ab03cb2f209da155a518f64759512f~100x100.awebp',
    alt: '前端小魔女的头像',
    signal: '向全栈方向奔跑的前端工程师',
    level: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png'
  },
  {
    name: '飞桨PaddlePaddle',
    avatar:
      'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/29/1708fd4ea0213444~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp',
    alt: '飞桨PaddlePaddle的头像',
    signal: 'RD @ 百度',
    level: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png'
  }
]
</script>

<template>
  <div class="recommend-author-block">
    <header class="user-block-header">🎖️作者榜</header>
    <div class="user-list">
      <div v-for="item in userList" :key="item.name" class="item">
        <a class="link">
          <img :src="item.avatar" class="avatar" />
          <div class="user-info">
            <a class="username">
              <span class="name" :style="{ maxWidth: '128px' }"> {{ item.name }} </span>
              <span class="rank">
                <img :src="item.level" alt="lv" title="创作等级" />
              </span>
            </a>
            <div class="position">{{ item.signal }}</div>
          </div>
        </a>
      </div>
      <a class="item">
        <div class="more">
          <span>完整榜单</span>
          <icon-right />
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.recommend-author-block {
  background-color: #fff;

  .user-block-header {
    padding: 1rem 1.3rem;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  }

  .user-list {
    .item {
      .link {
        padding: 1rem 1.3rem;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: hsla(0, 0%, 84.7%, 0.1);
        }

        .avatar {
          flex: 0 0 auto;
          width: 3.8rem;
          height: 3.8rem;
          border-radius: 50%;
          margin-right: 0.5rem;
        }

        .user-info {
          overflow: hidden;

          .username {
            font-size: 1.16rem;
            font-weight: 400;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 3px;
            display: flex;
            align-items: center;
            .name {
              display: inline-block;
              vertical-align: top;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .rank {
              display: inline-flex;
              align-items: center;
              margin-left: 0.33rem;
              vertical-align: middle;

              img {
                width: 35px;
                height: 16px;
              }
            }
          }

          .position {
            color: #909090;
            font-size: 1rem;
            margin-bottom: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }

  .more {
    color: #007fff;
    padding: 1rem 0;
    text-align: center;
    border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);

    span {
      margin-right: 5px;
    }
  }
}
</style>
