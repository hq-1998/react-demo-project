<script lang="tsx" setup>
import { ITabsItem } from '../Tabs/index.vue'
import Empty from '../Empty/index.vue'
import { reactive } from 'vue'
import styles from './styles.module.less'

withDefaults(
  defineProps<{
    item: Partial<ITabsItem>
  }>(),
  {
    item: () => ({})
  }
)

const columns = [
  {
    title: '优惠券',
    dataIndex: 'coupon',
    width: 136,
    render: () => (
      <div class={styles['code-item']}>
        <div class={`${styles['name-card']} ${styles['exchange-card']}`}>123</div>
      </div>
    )
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 216
  },
  {
    title: '有效期限',
    dataIndex: 'validate_time',
    width: 300
  },
  {
    title: '操作',
    render: () => {
      return <a>立即兑换</a>
    }
  }
]
const data = reactive([
  {
    key: '1',
    coupon: 'Jane Doe',
    name: '掘金会员69.9元课程兑换券',
    validate_time: '2022.07.24 09:53 - 2032.07.21 09:53'
  },
  {
    key: '2',
    coupon: 'Alisa Ross',
    name: '掘金会员29.9元课程兑换券',
    validate_time: '2022.07.24 09:53 - 2032.07.21 09:53'
  },
  {
    key: '3',
    coupon: 'Kevin Sandra',
    name: '掘金会员49.9元课程兑换券',
    validate_time: '2022.07.24 09:53 - 2032.07.21 09:53'
  }
])
</script>

<template>
  <a-table v-if="data.length" :pagination="false" :columns="columns" :data="data" />
  <Empty v-else />
</template>
