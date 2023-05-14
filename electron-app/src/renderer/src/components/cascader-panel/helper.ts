/* eslint-disable @typescript-eslint/no-explicit-any */
import { uniqueId } from 'lodash-es'
import { toRaw } from 'vue'

/** 数组转对象字典
 * [{id: 1, label: 'xx', value: 'xx' }]
 * {1: {id: 1, label: 'xx', value: 'xx' }}
 * @param arr 需要转换数组
 */
const transformArrayToObject = <T extends Record<string, any>, K extends keyof T>(
  arr: T[],
  key: K
) => {
  const objMap = arr.reduce((pre, cur) => {
    pre.set(cur[key], cur)
    return pre
  }, new Map<K, T>())
  return objMap
}

interface Item {
  value: string
  label: string
  children?: Item[] | null
  level?: number
  id?: number
  parentId?: number | null
  /** 是否选中 */
  selected?: boolean | undefined
  /** 是否半选 */
  indeterminate?: boolean | undefined
}

type NewItem = Pick<Item, 'children'> & Required<Omit<Item, 'children'>>

/**
 * 树结构带上层级
 */
const transformTreeToObjectWithLayer = (list: NewItem[]) => {
  const treeList: NewItem[] = []
  const fn = (list: NewItem[], parentId: number | null = null, level = 1) => {
    let i = 0
    while (i < list.length) {
      const { id, ...rest } = list[i] as NewItem
      const newItem: NewItem = {
        ...(rest as Item),
        id: id || Number(uniqueId()),
        parentId,
        level,
        selected: false,
        indeterminate: false
      }

      list[i] = {
        ...list[i],
        ...newItem,
        level
      }

      treeList.push(list[i])

      if (list[i].children?.length) {
        fn(list[i].children as NewItem[], newItem.id, level + 1)
      }
      i++
    }
  }
  fn(list, null, 1)
  return transformArrayToObject(treeList, 'id')
}

type TreeMap = Map<number, NewItem>

/** 获取TreeMap key组合的数组 */
const getTreeMapKeys = (treeMap: Map<number, any>): number[] => {
  const keys = treeMap.keys()
  return Array.from(keys)
}

const lastFind = (map: Map<number, NewItem>) => {
  const keys = getTreeMapKeys(map)
  let last: NewItem | null = null
  let i = 0
  while (i < keys.length) {
    const child = map.get(keys[i]) as NewItem
    if (child.level > 2) {
      last = child
      break
    }
    i++
  }
  return last
}

const checkMapHasGreaterLevel2 = (map: Map<number, NewItem>, item: NewItem) => {
  const keys = getTreeMapKeys(map)
  const last = lastFind(map)
  let i = 0
  let flag = false
  while (i < keys.length) {
    const child = map.get(keys[i]) as NewItem
    if (child.level > 2 && last?.parentId !== item.parentId) {
      flag = true
      break
    }
    i++
  }
  return flag
}

/**
 * @param start 起始值
 * @param end 查找停止位置
 * @param treeMap 查找map
 */
const findParent = (start: number, end: number, treeMap: TreeMap) => {
  const item = treeMap.get(start) as NewItem
  const first = getFirst(treeMap)
  const ids: number[] = []
  if (item.level === end) return first

  const map = new Map<number, NewItem>()
  const fn = (item, map) => {
    if (map.has(item.id) || checkMapHasGreaterLevel2(map, item)) return
    if (item.level === end) {
      map.set(item.id, item)
      ids.push(item.id)
      return ids
    }

    if (item.children) {
      const isShallow = checkMapHasGreaterLevel2(map, item)
      if (isShallow) {
        fn(item.children[0], map)
      } else {
        item.children.forEach((child) => fn(child, map))
      }
    } else {
      map.set(item.id, item)
      fn(item, map)
    }
  }
  fn(item, map)
  return ids
}

const filterOptions = (treeMap: TreeMap, level: number, selectedId?: number) => {
  const keys = getTreeMapKeys(treeMap)
  let filterKeys: number[] = []
  if (!selectedId) {
    filterKeys = keys.filter((key) => treeMap.get(key)!.level === level)
  } else {
    const ids = findParent(selectedId, level, treeMap)
    filterKeys = ids
  }
  return filterKeys.map((filterKey) => treeMap.get(filterKey))
}

/** 获取树的最大层级 */
const getMaxLevel = (treeMap: TreeMap): number => {
  const keys = getTreeMapKeys(treeMap)
  const levels = keys.map((key) => treeMap.get(key)!.level)
  return Math.max(...levels)
}

/** 填充 */
const generateDataList = (
  list: any[],
  selectedItem: NewItem,
  maxLevel: number,
  treeMap: TreeMap
) => {
  for (let i = selectedItem.level; i < maxLevel; i++) {
    list[i] = filterOptions(treeMap, i + 1, selectedItem.id)
  }
  return list
}

const getFirst = (treeMap: TreeMap): number[] => {
  const keys = getTreeMapKeys(treeMap)
  let i = 0
  const firstItems: number[] = []
  while (i < keys.length) {
    const item = treeMap.get(keys[i])!
    if (item.level === 1) {
      firstItems.push(item.id)
    }
    i++
  }
  return firstItems
}

/** 实际展示的options */
const initDisplayOptions = (treeMap: TreeMap) => {
  const maxLevel = getMaxLevel(treeMap)
  const displayOptions = new Array(maxLevel).fill([])
  const first = getFirst(treeMap)
  for (let i = 0; i < maxLevel; i++) {
    displayOptions[i] = filterOptions(treeMap, i + 1, first.at(0))
  }
  return displayOptions
}

/** 向下递归 修改子级 */
/** TODO 顶级联动处理 */
const downwardModify = (treeItem: NewItem, treeMap: TreeMap) => {
  const { selected, indeterminate } = treeItem
  const fn = (children, selected, indeterminate) => {
    if (!children) return
    for (let i = 0; i < children.length; i++) {
      const item = children[i]
      const edited = {
        ...item,
        selected,
        indeterminate
      }
      const parent = treeMap.get(item.parentId)
      if (parent) {
        const index = parent.children!.findIndex((child) => child.id === item.id)
        parent.children![index] = edited
        treeMap.set(parent.id, parent)
      }
      treeMap.set(item.id!, edited)
      if (item.children) {
        fn(item.children, selected, indeterminate)
      }
    }
  }

  fn(treeItem.children, selected, indeterminate)
}

/** 计算变更范围 */
/** 当取消的时候 如果同级有选择 那么父级为半选 */
/** 当取消的时候 如果同级没选择 那么父级为未选择 如果父级的同级有选择 那么父级的父级为半选 */
/** 当取消的时候 如果同级没选择 那么父级为未选择 如果父级的同级也没选择 那么父级的父级为未选择 */
/** 当确认的时候 如果同级没选择 那么父级以及父级以上为半选 */
/** 当确认的时候 如果同级选择了 但是没有全部选择 父级及父级以上为半选 */
/** 当确认的时候 如果同级选择了 也全部选择了 那么看父级是否全部选择 */
const computedModify = (selectedItem: NewItem, treeMap: TreeMap, shouldChecked: boolean) => {
  let parent = treeMap.get(selectedItem.parentId!)
  const modify = new Map<number, any>()
  const treeItem = {
    ...selectedItem,
    indeterminate: false,
    selected: shouldChecked
  }
  downwardModify(treeItem, treeMap)
  console.log(treeMap, '+++treeMap+++')
  modify.set(selectedItem.level, [treeItem])
  treeMap.set(selectedItem.id, treeItem)
  if (!parent) {
    return modify
  }
  const children = parent!.children
  const newChildrenIndex = children!.findIndex((item) => item.id === selectedItem.id)
  children![newChildrenIndex] = treeItem
  if (children) {
    treeMap.set(parent.id, {
      ...parent,
      children
    })
    while (parent) {
      const selectedNum = children.reduce((pre, cur) => {
        const { selected } = cur
        if (selected) {
          pre += 1
        }
        return pre
      }, 0)
      const parentShouldIndeterminate = selectedNum > 0 && selectedNum < children.length
      const parentShouldChecked = selectedNum > 0 && selectedNum === children.length
      const level = modify.get(parent.level) || []
      modify.set(parent.level, [
        ...level,
        {
          ...parent,
          selected: parentShouldChecked,
          indeterminate: parentShouldIndeterminate
        }
      ])

      parent = treeMap.get(parent.parentId!)
    }
  }
  return Array.from(modify.entries())
}

export type { Item, NewItem, TreeMap }

export {
  transformArrayToObject,
  generateDataList,
  filterOptions,
  transformTreeToObjectWithLayer,
  initDisplayOptions,
  getMaxLevel,
  computedModify,
  getTreeMapKeys
}
