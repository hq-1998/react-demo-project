<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import {
  transformTreeToObjectWithLayer,
  initDisplayOptions,
  getMaxLevel,
  generateDataList,
  computedModify
} from './helper'
import type { NewItem } from './helper'
import { IconRight } from '@arco-design/web-vue/es/icon/index.js'

let treeMap = new Map()
export default defineComponent({
  name: 'CascaderPanel',
  props: {
    options: {
      type: Array as PropType<NewItem[]>,
      default: () => []
    }
  },
  setup(props) {
    const data = reactive<{
      list: any[]
    }>({
      list: []
    })

    const transformOptionsWithLayer = () => {
      generateTreeMap()
      data.list = initDisplayOptions(treeMap)
    }

    const generateTreeMap = () => {
      if (!Object.keys(treeMap)?.length) {
        const transformResult = transformTreeToObjectWithLayer(props.options)
        treeMap = transformResult
      }
    }

    const getSelectedItem = (selectedItem: NewItem) => {
      const shouldChecked = !selectedItem.selected
      const modify = computedModify(selectedItem, treeMap, shouldChecked)
      for (const iterator of modify) {
        const [level, modifies] = iterator
        modifies.forEach((mo) => {
          const dataIndex = data.list[level - 1].findIndex((item) => item.id === mo.id)
          data.list[level - 1][dataIndex] = mo
        })
      }
    }

    const handleClick = (event: Event, selectedItem: NewItem) => {
      event?.preventDefault()
      getSelectedItem(selectedItem)
      const maxLevel = getMaxLevel(treeMap)
      data.list = generateDataList(data.list, selectedItem, maxLevel, treeMap)
    }

    onMounted(() => {
      transformOptionsWithLayer()
    })

    return {
      data,
      handleClick
    }
  }
})
</script>

<template>
  <div class="cascader-wrapper">
    <div v-for="(item, index) in data.list" :key="index" class="cascader-wrapper-column">
      <div v-for="child in item" :key="child.value" class="cascader-panel">
        <span class="cascader-panel-label" @click="(event) => handleClick(event, child)"
          ><a-checkbox
            :indeterminate="child.indeterminate"
            :model-value="child.selected"
            :value="child.value"
            >{{ child.label }}</a-checkbox
          >
        </span>
        <icon-right />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
