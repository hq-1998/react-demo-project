<script lang="tsx" setup>
import OperationBar from './components/operation-bar/index.vue'
import Club from './components/club/index.vue'
import AuthorInfo from './components/author-info/index.vue'

const list = [
  {
    url: 'https://p3-passport.byteimg.com/img/user-avatar/e515e40f9e01ba8c9a68cfc2c2c73993~100x100.awebp',
    username: '今天宜喝冰阔落',
    type: '前端',
    href: '一书一世界',
    content:
      '大刘的球状闪电也很棒呀，在你无法观察到的概率云中，我会悄悄送你一朵量子玫瑰。这大概就是理科生的浪漫。',
    club: '读书会',
    id: 1
  },
  {
    url: 'https://p3-passport.byteimg.com/img/mosaic-legacy/3795/3047680722~100x100.awebp',
    username: '凤2018',
    type: 'web',
    href: '打工人的生活攻略',
    content: '奔波在打工路上的友友们，不要忘了停下脚步，欣赏沿途的风景哦～',
    club: '打工人的日常',
    id: 2
  }
]
</script>

<template>
  <div class="pin-list-wrap">
    <ul class="pin-list">
      <span>
        <li v-for="item in list" :key="item.id" class="item shadow">
          <div class="pin">
            <div class="pin-header-row pin-header">
              <AuthorInfo :url="item.url" :type="item.type" :username="item.username" />
            </div>
            <div class="pin-content-row middle-row">
              <div class="content-box">
                <span class="content">
                  <span :contenteditable="false" style="color: #1e80ff">#{{ item.href }}#</span>
                  {{ item.content }}
                </span>
              </div>
            </div>
            <div class="club-digg-row middle-row">
              <Club :name="item.club" />
              <div style="flex: 1 1 auto" />
            </div>
            <div class="pin-action-row">
              <OperationBar />
            </div>
          </div>
        </li>
      </span>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
