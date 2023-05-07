<script setup lang="tsx">
import { useAttrs, CSSProperties, VNode } from 'vue'
import { Form, FormItem } from '@arco-design/web-vue'
import style from './style.module.less'

const attrs = useAttrs()

type IBaseFormConfigItem = InstanceType<typeof FormItem>['$props']

interface ConfigItem {
  field: string
  label: string
  render: () => VNode
}

export type IFormConfigItem = IBaseFormConfigItem & ConfigItem

interface IProps {
  class?: string
  style?: CSSProperties
  model?: Record<string, unknown>
  config?: IFormConfigItem[]
}

type ModalProps = Omit<InstanceType<typeof Form>['$props'], 'model'>

const Render = (props: IProps & ModalProps) => {
  const {
    model,
    config = [],
    labelColProps = { span: 4 },
    class: _class,
    style: _style,
    ...rest
  } = props

  return (
    <Form
      model={model!}
      labelColProps={labelColProps}
      class={`${_class} ${style.form}`}
      style={_style}
      {...rest}
      {...attrs}
    >
      {config.map((formItem) => {
        return (
          <FormItem key={formItem.field} {...formItem}>
            {formItem.render()}
          </FormItem>
        )
      })}
    </Form>
  )
}
</script>

<template>
  <Render />
</template>
