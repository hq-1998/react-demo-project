<script lang="tsx">
import { defineComponent } from 'vue'
import { IconRefresh, IconRight } from '@arco-design/web-vue/es/icon/index.js'
import TopicCard from '@renderer/components/topic-card/index.vue'
import { list } from './mock'

export default defineComponent({
  setup: () => {
    const CreateImage = (url: string) => <img src={url} class="tag" alt="" />

    const headerExtra = () => {
      return (
        <span class="refresh">
          <IconRefresh />
          换一换
        </span>
      )
    }

    const content = () => {
      return list.map((item) => {
        return (
          <a key={item.topic} class="item">
            <div class="content">
              {CreateImage(
                'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/rec.476fe07.png'
              )}
              {CreateImage(
                'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lottery.b40d80b.png'
              )}
              <div class="content-label">#{item.topic}#</div>
            </div>
            <p class="hot">{item.view}</p>
          </a>
        )
      })
    }

    const footer = () => {
      return (
        <a class="moreTopics">
          查看更多
          <IconRight size="12px" />
        </a>
      )
    }

    return () => (
      <TopicCard
        title="推荐话题"
        v-slots={{
          headerExtra,
          content,
          footer
        }}
      />
    )
  }
})
</script>

<style lang="less" scoped>
@import './style.less';
</style>
