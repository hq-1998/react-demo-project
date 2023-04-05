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
  },
  {
    url: 'https://p3-passport.byteimg.com/img/user-avatar/00dc71aa34b1926b52c2e18811275613~100x100.awebp',
    username: 'Hypocrite',
    type: '前端',
    href: '',
    content: '定了，明天加班...',
    club: '打工人的日常',
    id: 3
  },
  {
    url: 'https://p3-passport.byteimg.com/img/user-avatar/c5fad8b28f7cdf50f2de45d5fd415dc7~100x100.awebp',
    username: '来自艾欧尼亚的最强王者',
    type: '前端',
    href: '',
    content:
      '张鑫旭大佬出的新书《css新世界》讲解了很多css的新属性，尤其是我们平时不常用的样式里面也讲的很详细，通过学习我们可以实现很多我们平时用css实现不了的效果，除此之外，我们还能提高对css知识的理解。',
    club: '读书会',
    id: 4
  },
  {
    url: 'https://p3-passport.byteimg.com/img/user-avatar/9ca2f1f6c909a21f93aff757867e3986~100x100.awebp',
    username: '苏木子',
    type: '后端后发 @ 拒绝996',
    href: '',
    content: '今天放假，外面下雨，在家呆一天吧。',
    club: '打工人的日常',
    id: 5
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
                  <span v-if="item.href" :contenteditable="false" style="color: #1e80ff"
                    >#{{ item.href }}#</span
                  >
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
