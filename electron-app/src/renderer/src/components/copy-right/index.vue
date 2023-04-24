<script lang="tsx" setup name="CopyRight">
import styles from './style.module.less'

interface IListItem {
  name: string
}

const moreListOne: IListItem[] = [
  {
    name: '用户协议'
  },
  {
    name: '营业执照'
  },
  {
    name: '隐私政策'
  },
  {
    name: '关于我们'
  }
]

const moreListTwo: IListItem[] = [
  {
    name: '站点地图'
  },
  {
    name: '使用指南'
  },
  {
    name: '友情链接'
  },
  {
    name: '更多文章'
  }
]

const moreListThree: IListItem[] = [
  {
    name: '举报邮箱：feedback@xitu.ip'
  }
]

const moreListFour: IListItem[] = [
  {
    name: '座机电话：010-83434395'
  }
]

const moreListFive: IListItem[] = [
  {
    name: '京ICP备18012699号-3'
  },
  {
    name: '©2023 腾腾小站'
  }
]

const Item = ({ list }: { list: IListItem[] }) => {
  return (
    <ul class={styles['more-list']}>
      {list.map((item) => {
        return (
          <li key={item.name} class={styles.item}>
            <a target="_blank" rel="nofollow">
              {item.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

const Wrapper = () => {
  return (
    <>
      <Item list={moreListOne} />
      <Item list={moreListTwo} />
      <Item list={moreListThree} />
      <Item list={moreListFour} />
      <Item list={moreListFive} />
    </>
  )
}
</script>

<template>
  <Wrapper />
</template>
