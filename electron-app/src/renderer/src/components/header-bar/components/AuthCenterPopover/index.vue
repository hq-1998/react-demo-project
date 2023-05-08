<script setup lang="tsx">
import styles from './style.module.less'
import classnames from 'classnames'
import { IconRight } from '@arco-design/web-vue/es/icon/index.js'

const menuList = [
  {
    title: '写文章',
    icon: '	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/69704c654798bb27cffca68e5a79976e.svg',
    classname: 'write-article'
  },
  {
    title: '发沸点',
    icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/c225c20007c699a48fe9aa8a32be2ee6.svg',
    classname: 'issue-points'
  },
  {
    title: '写笔记',
    icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/92ff1e17678887b64c952833d9d0dd0b.svg',
    classname: 'write-note'
  },
  {
    title: '写代码',
    icon: '	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/cf3f3dbcd5a32a7a4de5c7b834402cef.svg',
    classname: 'create-jcod'
  },
  {
    title: '草稿箱',
    icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e1f3be67d18df501d0972acfed06c4d6.svg',
    classname: 'drafts'
  }
]

const list = [
  {
    title: '降本提效，学低代码开发就对啦!',
    type: '活动',
    style: {
      color: '#ff7426',
      backgroundColor: '#fff3e5'
    }
  },
  {
    title: '4月更文挑战，持续写作，加速成长｜掘金日新计划',
    type: '活动',
    style: {
      color: '#ff7426',
      background: '#fff3e5'
    }
  },
  {
    title: '每日快讯',
    type: '话题',
    style: {
      color: '#1e80ff',
      background: '#eaf2ff'
    },
    class: 'topic-title'
  }
]

const Render = () => {
  return (
    <div class={styles['more-list']}>
      <ul class={styles.menu}>
        {menuList.map((menuItem) => (
          <li class={styles.item} key={menuItem.title}>
            <div
              style={{ backgroundImage: 'url(' + menuItem.icon + ')' }}
              class={classnames(styles.icon, styles[menuItem.classname])}
            ></div>
            <div class={styles.title}>{menuItem.title}</div>
          </li>
        ))}
      </ul>
      <div class={styles.divider}></div>
      <div class={styles.inspiration}>
        <div class={styles.info}>
          <span class={styles.title}>创作灵感</span>
          <span class={styles['more-info']}>
            查看更多
            <IconRight />
          </span>
        </div>
        <div class={styles.list}>
          {list.map((item) => {
            return (
              <div class={styles.item} key={item.title}>
                <span class={classnames(styles.icon)} style={item.style}>
                  {item.type}
                </span>
                <span class={classnames(styles.title, item.class && styles[item.class])}>
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
</script>

<template>
  <Render />
</template>
