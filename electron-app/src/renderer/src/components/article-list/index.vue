<script setup lang="ts">
import type { IArticleItem } from './data'
import { IconEye, IconThumbUp, IconMessage } from '@arco-design/web-vue/es/icon/index.js'

defineProps<{ list: IArticleItem[] }>()
</script>

<template>
  <div class="item">
    <div v-for="item in list" :key="item.id" class="entry">
      <a-row class="meta-container">
        <span class="author">{{ item.author }}</span>
        <span class="date-time">{{ item.datetime }}</span>
        <span class="category">
          <span class="major">{{ item.majorCategory }}</span>
          <span v-if="item.minorCategory" class="minor">{{ item.minorCategory }}</span>
          <span v-if="item.patch" class="patch">{{ item.patch }}</span>
        </span>
      </a-row>
      <div class="content-wrapper">
        <div class="content-main">
          <div class="title">{{ item.title }}</div>
          <div class="abstract">
            <div>{{ item.content }}</div>
          </div>
          <a-row align="center">
            <span class="action-list-item"
              ><icon-eye size="16px" /><span>{{ item.view }}</span></span
            >
            <span class="action-list-item"
              ><icon-thumb-up size="16px" /><span>{{ item.like }}</span></span
            >
            <span class="action-list-item"
              ><icon-message size="16px" /><span>{{ item.comment }}</span></span
            >
          </a-row>
        </div>
        <img v-if="item.url" :src="item.url" class="lazy thumb" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.item {
  cursor: pointer;
  position: relative;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0px;
  width: 100%;

  .entry {
    padding: 12px 20px 0;
    width: 100%;
    box-sizing: border-box;

    &:hover {
      background-color: #fafafa;
    }

    .meta-container {
      line-height: 22px;
      display: flex;
      align-items: center;

      .author {
        display: flex;
        align-items: center;
        margin-right: 8px;
        max-width: 162px;
        font-size: 13px;
        color: #4e5969;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        &:hover {
          color: #1d7dfa;
        }
      }

      .date-time {
        position: relative;
        padding: 0 10px;
        line-height: 22px;
        font-size: 13px;
        flex-shrink: 0;
        &::before {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          width: 1px;
          height: 14px;
          background: #e5e6eb;
          content: ' ';
          left: 0;
        }

        &::after {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          width: 1px;
          height: 14px;
          background: #e5e6eb;
          content: ' ';
          right: 0;
        }
      }
      .date-time,
      .category {
        color: #86909c;
        .major,
        .minor,
        .patch {
          position: relative;
          flex-shrink: 0;
          font-size: 13px;
          padding: 0 8px;
          &:hover {
            color: #1d7dfa;
          }
          &:not(:last-child)::after {
            position: absolute;
            top: 50%;
            right: -1px;
            display: block;
            content: ' ';
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background: #4e5969;
          }
        }
      }
    }
  }
  .main-container {
    color: #86909c;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .content-wrapper {
    border-bottom: 1px solid rgba(228, 230, 235, 0.5);
    display: flex;
    padding-bottom: 12px;
    margin-top: 10px;
    width: 100%;

    .content-main {
      flex: 1 1 auto;
    }

    .thumb {
      flex: 0 0 auto;
      width: 120px;
      height: 80px;
      margin-left: 24px;
      background-color: #fff;
      border-radius: 2px;
    }

    .lazy {
      object-fit: cover;
    }

    .title {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #1d2129;
      width: 100%;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      cursor: pointer;
      margin-bottom: 8px;
    }

    .abstract {
      color: #86909c;
      font-size: 13px;
      line-height: 22px;
      margin-bottom: 10px;

      width: 100%;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }

    .action-list-item {
      position: relative;
      margin-right: 20px;
      font-size: 13px;
      line-height: 20px;
      color: #4e5969;
      flex-shrink: 0;

      span {
        margin-left: 4px;
      }
    }
  }
}
</style>
