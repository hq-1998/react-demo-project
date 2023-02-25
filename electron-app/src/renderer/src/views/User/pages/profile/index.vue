<script setup lang="ts">
import { reactive } from 'vue'
import { IconPlusCircle } from '@arco-design/web-vue/es/icon/index.js'

const form = reactive({
  username: '',
  job: '',
  company: '',
  homepage: '',
  recommend: ''
})

const handleSubmit = () => {}
const toast = () => {}
</script>

<template>
  <div class="sub-view-box shadow setting-profle">
    <div class="setting-profile-view">
      <div class="nav-text">个人资料</div>
      <div class="user-infos">
        <div class="info-input">
          <a-form
            :model="form"
            :style="{
              minWidth: '340px'
            }"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            @submit="handleSubmit"
          >
            <a-form-item field="username" label="用户名">
              <a-input
                v-model="form.username"
                :max-length="20"
                show-word-limit
                placeholder="填写你的用户名"
              />
            </a-form-item>
            <a-form-item field="job" label="职位">
              <a-input
                v-model="form.job"
                :max-length="50"
                show-word-limit
                placeholder="填写你的职位"
              />
            </a-form-item>
            <a-form-item field="company" label="公司">
              <a-input
                v-model="form.company"
                :max-length="50"
                show-word-limit
                placeholder="填写你的公司"
              />
            </a-form-item>
            <a-form-item field="homepage" label="个人主页">
              <a-input
                v-model="form.homepage"
                :max-length="100"
                show-word-limit
                placeholder="填写你的个人主页"
              />
            </a-form-item>
            <a-form-item field="recommend" label="个人介绍">
              <a-textarea
                v-model="form.recommend"
                style="height: 140px"
                :max-length="100"
                show-word-limit
                placeholder="填写职业技能、擅长的事情、喜欢的事情等"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit">保存修改</a-button>
            </a-form-item>
          </a-form>
        </div>
        <div class="avatar-input">
          <div class="avatar-info">
            <div class="avatar-wrapper">
              <a-avatar :size="90" @click="toast">
                <img
                  class="avatar"
                  alt="avatar"
                  src="https://p3-passport.byteimg.com/img/user-avatar/de16d482f450fe84e9eb317c32ea717a~100x100.awebp"
                />
              </a-avatar>
              <div class="avatar-hover">
                <icon-plus-circle :size="24" />
                <span class="click-text">点击修改头像</span>
              </div>
            </div>

            <div class="title">我的头像</div>
            <div class="description">支持 jpg、png、jpeg 格式大小 5M 以内的图片</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './styles.less';
</style>
