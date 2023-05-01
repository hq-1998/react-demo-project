<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'

interface IListItem {
  title: string
  username: string
  id: number
  date: string
}

const data = reactive<{ list: IListItem[] }>({
  list: [
    {
      title: '随机矿石',
      username: '小der',
      date: '2023-05-01',
      id: 1
    },
    {
      title: '随机矿石',
      username: 'temo',
      date: '2023-05-01',
      id: 2
    },
    {
      title: '随机矿石',
      username: 'BUG预言家',
      date: '2023-05-01',
      id: 3
    },
    {
      title: '随机矿石',
      username: '一斤超人',
      date: '2023-05-01',
      id: 4
    }
  ]
})

const scrollRef = ref<HTMLDivElement>()
let timer: NodeJS.Timeout | null = null

const loop = () => {
  if (!timer) {
    if (scrollRef.value) {
      let count = 0
      timer = setInterval(() => {
        count += 1
        scrollRef.value!.style.transform = `translateY:${count}px`
        if (count >= 30) {
          count = 0
          let flag: Node | null = null
          flag = scrollRef.value!.children[0]!.cloneNode(true)
          scrollRef.value?.removeChild(scrollRef.value.children[0])
          scrollRef.value?.appendChild(flag)
        }
      }, 50)
    }
  }
}

onMounted(() => {
  loop()
})
</script>

<template>
  <div ref="scrollRef" class="content">
    <div v-for="item in data.list" :key="item.id" class="item">
      <p class="message">
        <span class="txt">恭喜</span>
        <span class="username">{{ item.username }}</span>
        <span class="txt">抽中{{ item.title }}</span>
      </p>
      <p class="date">{{ item.date }}</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
    color: #fff;

    .message {
      display: flex;
      align-items: center;
      overflow: hidden;
      flex: 1;
      margin-right: 10px;

      .txt {
        flex: 0 0 auto;
        padding-left: 5px;
      }

      .username {
        color: #fadd95;
        padding-left: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }

      .date {
        color: #e8f3ff;
        flex: 0 0 auto;
      }
    }
  }
}
</style>
