<script lang="tsx">
import { defineComponent, PropType, computed } from 'vue'

export interface ITabsItem {
  label: string
  key: string
}

export default defineComponent({
  props: {
    tabsList: {
      type: Array as PropType<ITabsItem[]>,
      required: true
    }
  },
  setup(props, ctx) {
    const { slots } = ctx

    const defaultActiveKey = computed(() => {
      const [defaultItem] = props.tabsList
      return defaultItem.key
    })

    return () => {
      return (
        <div class="tabs-container-wrap">
          <div class="tabs-container">
            <a-tabs v-slots={slots} default-active-key={defaultActiveKey} lazy-load>
              {props.tabsList.map((item) => {
                return (
                  <a-tab-pane key={item.key} title={item.label}>
                    {slots.content && slots.content(item)}
                  </a-tab-pane>
                )
              })}
            </a-tabs>
          </div>
        </div>
      )
    }
  }
})
</script>

<style lang="less" scoped>
.tabs-container-wrap {
  .tabs-container {
    background: var(--juejin-layer-1);
    padding: 0 24px;
    border-radius: 0 0 2px 2px;

    :deep(.arco-tabs-tab:first-child) {
      margin-left: 0px;
    }
  }
}
</style>
