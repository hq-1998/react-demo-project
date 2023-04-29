<script setup name="Sider" lang="ts">
const menuList = [
  {
    title: '每日签到',
    url: 'signIn',
    icon: ''
  },
  {
    title: '成长等级',
    url: 'level',
    icon: ''
  },
  {
    title: '幸运抽奖',
    url: '',
    icon: ''
  },
  {
    title: '福利兑换',
    url: '',
    icon: ''
  },
  {
    title: '收集Bug',
    url: '',
    icon: ''
  },
  {
    title: '我的收获',
    url: '',
    icon: ''
  }
]
</script>

<template>
  <div>
    <div class="user-info">
      <a target="_blank">
        <img
          src="https://p3-passport.byteimg.com/img/user-avatar/de16d482f450fe84e9eb317c32ea717a~180x180.awebp"
          class="avatar"
        />
      </a>
      <a target="_blank" class="username">
        <span class="name">用户3440788758008</span>
        <span class="jueyou-level">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/cf19b122213ebdbd25b66f02500b8c27.svg"
            alt="掘友等级"
          />
        </span>
        <div class="vip-level"></div>
      </a>
    </div>
    <SiderBar :list="menuList" class="menu" />
    <div class="agreement-wrap side-bar-footer">
      <a class="agreement-item">用户协议</a>
      ·
      <a class="agreement-item">法律声明</a>
      © 2023 腾腾小站
    </div>
  </div>
</template>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  padding: 0 20px;

  .avatar {
    width: 5.33rem;
    height: 5.33rem;
    border-radius: 50%;
  }

  .username {
    width: 100%;
    display: flex;
    justify-content: center;

    .name {
      max-width: 187px;
      display: inline-block;
      vertical-align: top;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--juejin-font-1);
    }

    .jueyou-level {
      margin-left: 4px;

      img {
        width: 3.75rem;
        height: 1.3333rem;
        object-fit: contain;
      }
    }
  }
}

.menu {
  position: static !important;
  width: 100% !important;
  margin-top: 24px;
  height: calc(100% - 157px);
  min-height: 200px;
  position: relative;
  border: none;
}

.agreement-wrap {
  text-align: center;
  font-size: 12px;
  color: #8a919f;
  padding: 8px 0 16px;

  .agreement-item {
    color: #8a919f;
    font-size: 12px;

    &:hover {
      color: #1e80ff;
    }
  }
}

.side-bar-footer {
  position: absolute;
  bottom: 0;
  width: 260px;
  background-color: #fff;
}
</style>
