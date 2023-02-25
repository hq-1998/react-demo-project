<script setup lang="ts">
const menuList = [
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
</script>

<template>
  <nav class="view-nav">
    <div class="nav-list">
      <a-tabs default-active-key="综合" lazy-load>
        <a-tab-pane v-for="item in menuList" :key="item.label" :title="item.label" />
        <template #extra>
          <a>标签管理</a>
        </template>
      </a-tabs>
    </div>
  </nav>
</template>

<style lang="less" scoped>
::v-deep(.arco-tabs-nav::before) {
  height: 0px;
}

::v-deep(.arco-tabs) {
  height: 100%;
}

::v-deep(.arco-tabs-nav-ink) {
  display: none;
}

::v-deep(.arco-tabs) {
  width: 100%;
}

::v-deep(.arco-tabs-tab-title) {
  font-size: 13px;
}

::v-deep(.arco-tabs-nav) {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.view-nav {
  background-color: #fff;
  position: relative;
  top: 0rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all 0.2s;
  transform: translateZ(0);

  .nav-list {
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
