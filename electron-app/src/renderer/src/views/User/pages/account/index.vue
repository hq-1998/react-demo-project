<script setup lang="ts">
enum ESetting {
  // 手机
  MOBILE = 'mobile',
  // 微信
  WECHAT = 'wechat',
  // 新郎微博
  WEIBO = 'weibo',
  // GitHub
  GITHUB = 'github',
  // 密码
  PASSWORD = 'password',
  // 账号注销
  LOGFF = 'logff'
}

const settingList = [
  {
    label: '手机',
    key: ESetting.MOBILE,
    value: '156****1018'
  },
  {
    label: '微信',
    key: ESetting.WECHAT,
    value: ''
  },
  {
    label: '新浪微博',
    key: ESetting.WEIBO,
    value: ''
  },
  {
    label: 'GitHub',
    key: ESetting.GITHUB,
    value: ''
  },
  {
    label: '密码',
    key: ESetting.PASSWORD,
    value: ''
  },
  {
    label: '账号注销',
    key: ESetting.LOGFF,
    value: ''
  }
]

const getValue = (item: typeof settingList[number]) => {
  if (item.value) return item.value
  const { key } = item
  if ([ESetting.PASSWORD, ESetting.LOGFF].includes(key)) return ''
  return '未绑定'
}

const getBtnText = (item: typeof settingList[number]) => {
  const { key } = item
  switch (key) {
    case ESetting.LOGFF:
      return '注销'
    case ESetting.PASSWORD:
      return '重置'
    default:
      return item.value ? '换绑' : '绑定'
  }
}
</script>

<template>
  <div class="sub-view-box shadow setting-account">
    <div class="view setting-account-view">
      <h1 style="margin-top: 0">账号设置</h1>
      <ul class="setting-list">
        <li v-for="item in settingList" :key="item.key" class="item">
          <span class="title">{{ item.label }}</span>
          <div class="input-box">
            <span class="account">{{ getValue(item) }}</span>
            <div class="action-box">
              <a-button type="text">{{ getBtnText(item) }}</a-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './styles.less';
</style>
