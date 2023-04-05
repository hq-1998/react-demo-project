<script lang="tsx">
import { defineComponent } from 'vue'
import TopicCard from '@renderer/components/topic-card/index.vue'
import { list } from './mock'

export default defineComponent({
  setup: () => {
    const content = () => {
      return list.map((item) => {
        return (
          <a key={item.topic} class="item">
            <div class="hot_content">
              <div class="content">
                <img src={item.icon} class="emoji" />
                {item.topic}
              </div>
              <div class="count">
                {item.like}赞 · {item.comment}评论
              </div>
            </div>
            {item.url && <img class="item_img" src={item.url} />}
          </a>
        )
      })
    }

    return () => <TopicCard title="精选沸点" v-slots={{ content }} />
  }
})
</script>

<style lang="less" scoped>
@import './style.less';
</style>
