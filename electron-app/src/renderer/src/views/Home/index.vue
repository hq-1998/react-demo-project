<script setup lang="ts">
import { ref } from 'vue'
import ArticleList from '@renderer/components/article-list/index.vue'
import AsideBar from '@renderer/components/aside-bar/index.vue'
import { IArticleItem } from '@renderer/components/article-list/data'
import MenuBar from '@renderer/components/menu-bar/index.vue'

interface ITagItem {
  label: string
  key: string
}

interface IMenuItem {
  label: string
}

const list: Array<IArticleItem> = [
  {
    author: 'JasonSubmara',
    datetime: '2月前',
    majorCategory: '前端',
    minorCategory: '掘金·日新计划',
    patch: 'Vue.js',
    title: '公共Hooks封装之文件下载useDownloadFile',
    content:
      '开启掘金成长之旅！这是我参与「掘金日新计划 · 12 月更文挑战」的第1天，点击查看活动详情 对于经常需要开发企业管理后台的前端开发来说，必不可少的需要使用表格对于数据进行操作，在对于现有项目进行代码',
    view: 2935,
    like: 57,
    comment: 15,
    id: 1,
    url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/506e4a6fa3004fba9b0356c9e3afd428~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?'
  },
  {
    author: '晨出',
    datetime: '3月前',
    majorCategory: 'React.js',
    minorCategory: '面试',
    patch: '前端',
    title: 'React18中useEffect执行两次',
    content:
      '本文用于记录笔者在看React18官方文档中严格模式那一节的一些收获，涉及到严格模式的作用，React为什么要将useEffect执行两次以及如何优化的问题。',
    view: 4517,
    like: 58,
    comment: 21,
    id: 2,
    url: ''
  },
  {
    author: '前端技术砖家',
    datetime: '1天前',
    majorCategory: '前端',
    minorCategory: '',
    patch: '',
    title: '前端质量体系之纸上谈兵',
    content:
      '海恩法则指出：每一起严重事故的背后，必然有 29 次轻微事故和 300 起未遂先兆以及 1000 起事故隐患。',
    view: 568,
    like: 7,
    comment: 0,
    id: 3,
    url: ''
  },
  {
    author: 'Andy_Qin',
    datetime: '3天前',
    majorCategory: '面试',
    minorCategory: '远程工作',
    patch: '招聘',
    title: '互联网大裁员原因分析',
    content:
      '继谷歌、微软之后，Zoom、eBay、波音、戴尔加入最新一波“裁员潮”中。 2 月 7 日，美国在线会议平台 Zoom 宣布将裁减 1300 名员工，这么多科技公司都在裁员是为什么呢？',
    view: 4924,
    like: 38,
    comment: 4,
    id: 4,
    url: ''
  },
  {
    author: 'GUGGZ',
    datetime: '23天前',
    majorCategory: '前端',
    minorCategory: 'JavaScript',
    patch: 'Vue.js',
    title: '2023 年 8 大 Web 开发趋势预测',
    content:
      '单页应用 (SPA) 及相关框架（例如 React.js、Vue.js、Svelte.js）都已经存在了很多年。然而，随着这些解决方案之上的元框架的兴起，可以看到应用从客户端渲染（CSR）转向服务端渲',
    view: 31000,
    like: 239,
    comment: 34,
    id: 5,
    url: ''
  },
  {
    author: '天行无忌',
    datetime: '1月前',
    majorCategory: 'JavaScript',
    minorCategory: 'TypeScript',
    patch: 'Vite',
    title: '读 2022 年 JavaScript 趋势报告',
    content:
      '2023年1月12日，《JavaScript 2022趋势调查报告》发布了。收集了 39,472 份调查报告，几乎是去年的两倍，涵盖了浏览器、开发者对 JavaScript 特性、代码库、技术、工具、',
    view: 4487,
    like: 64,
    comment: 1,
    id: 6,
    url: ''
  },
  {
    author: '石云升',
    datetime: '1天前',
    majorCategory: '前端',
    minorCategory: '后端',
    patch: '团队管理',
    title: '研发团队绩效考核：Leader 如何做到赏罚分明？',
    content:
      'Leader 如何在绩效考核中做到赏罚分明？要想做到赏罚分明就需要先明确：什么人因为做了什么事，基于什么量化指标和规则，获得什么权益或处罚。',
    view: 917,
    like: 2,
    comment: 1,
    id: 7,
    url: ''
  }
]

const taglist: Array<ITagItem> = [
  {
    label: '推荐',
    key: 'recommend'
  },
  {
    label: '最新',
    key: 'new'
  },
  {
    label: '热榜',
    key: 'hot'
  }
]

const menuList: Array<IMenuItem> = [
  {
    label: '综合'
  },
  {
    label: '关注'
  },
  {
    label: '后端'
  },
  {
    label: '前端'
  },
  {
    label: 'Android'
  },
  {
    label: 'iOS'
  },
  {
    label: '人工智能'
  },
  {
    label: '开发工具'
  },
  {
    label: '代码人生'
  },
  {
    label: '阅读'
  }
]

const currentIndex = ref(0)
const handleNavItemClick = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <MenuBar :data-source="menuList">
    <template #extra><a>标签管理</a></template>
  </MenuBar>
  <main class="container">
    <div class="timeline-content">
      <div class="timeline-entry-list">
        <div class="list-header">
          <div
            v-for="(item, index) in taglist"
            :key="item.key"
            :class="['nav-item', currentIndex === index && 'active']"
            @click="handleNavItemClick(index)"
          >
            <span>{{ item.label }}</span>
          </div>
        </div>
        <ArticleList :list="list" />
      </div>
      <aside>
        <AsideBar />
      </aside>
    </div>
  </main>
</template>

<style lang="less" scoped>
.container {
  top: calc(30px + 5rem + 3.833rem);

  .timeline-content {
    position: relative;
    margin-top: 0.33rem;
    display: flex;

    .timeline-entry-list {
      margin-right: 21.667rem;
      border-radius: 2px;
      width: 700px;
      background-color: #fff;

      .list-header {
        display: flex;
        align-items: center;
        padding: 1.3rem 1rem;
        border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);

        .nav-item {
          font-size: 1.17rem;
          padding: 0 1.2rem;
          cursor: pointer;
          color: #909090;

          &.active {
            color: #007fff;
          }

          &:hover {
            color: #007fff;
          }
        }

        .nav-item:not(:last-child) {
          border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
        }
      }
    }

    aside {
      position: absolute;
      top: 0;
      right: 0;
      width: 20rem;
      z-index: 1;
    }
  }
}
</style>
