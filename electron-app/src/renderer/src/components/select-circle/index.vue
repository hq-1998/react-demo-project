<script lang="tsx">
import { defineComponent, PropType, ref } from 'vue'
import { Popover, Input, Button } from '@arco-design/web-vue'
import { IconSearch } from '@arco-design/web-vue/es/icon/index.js'

interface ICircleType {
  name: string
  id: number
}

interface ICircleContent extends ICircleType {
  url: string
  desc: string
}

export default defineComponent({
  name: 'SelectCircle',
  props: {
    types: {
      type: Array as PropType<Array<ICircleType>>,
      default: () => []
    },
    contents: {
      type: Array as PropType<Array<ICircleContent>>,
      default: () => []
    },
    popupVisible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:popupVisible'],
  setup(props, { slots, emit }) {
    const activeIndex = ref(0)

    const title = () => {
      return (
        <div class="search">
          <Input
            v-slots={{
              suffix: <IconSearch />
            }}
            placeholder="搜索圈子名称"
            allow-clear
          />
        </div>
      )
    }

    const LeftCircle = () => {
      return (
        <div class="types">
          {props.types.map((item, index) => (
            <div
              onClick={() => (activeIndex.value = index)}
              key={item.id}
              class={`item ${activeIndex.value === index ? 'active' : ''}`}
            >
              {item.name}
            </div>
          ))}
        </div>
      )
    }

    const CircleContent = () => {
      return (
        <div class="contents">
          {props.contents.map((item) => (
            <div key={item.id} class="topic-item">
              <img alt={item.name} src={item.url} />
              <div class="content-main">
                <p class="title">{item.name}</p>
                <p class="desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }

    const footer = () => {
      return (
        <div class="btn-box">
          <Button
            onClick={() => {
              emit('update:popupVisible', false)
            }}
            type="outline"
          >
            不选择圈子
          </Button>
        </div>
      )
    }

    const content = () => {
      return (
        <>
          <div class="wrapper">
            {LeftCircle()}
            {CircleContent()}
          </div>
          {footer()}
        </>
      )
    }

    return () => (
      <Popover
        trigger="click"
        v-model:popup-visible={props.popupVisible}
        position="bottom"
        v-slots={{
          title,
          content
        }}
        content-style={{
          padding: '0px'
        }}
        class="new-topic-picker"
      >
        {slots.default?.()}
      </Popover>
    )
  }
})
</script>

<style lang="less" scoped>
@import './style.module.less';
</style>
