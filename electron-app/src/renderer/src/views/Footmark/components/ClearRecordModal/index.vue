<script lang="tsx">
import { defineComponent } from 'vue'
import { Button, Modal } from '@arco-design/web-vue'
import styles from './style.module.less'

export default defineComponent({
  name: 'ClearRecordModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const Title = () => {
      return <div class={styles.title}>确定清空浏览记录吗？</div>
    }

    const Content = () => {
      return <div class={styles.content}>浏览记录清除后无法恢复</div>
    }

    const handleCancel = () => {
      emit('update:visible', false)
    }

    const handleClear = () => {
      emit('update:visible', false)
    }

    return () => {
      return (
        <Modal
          visible={props.visible}
          closable={false}
          width={344}
          footer={false}
          class={styles.modal}
        >
          <Title />
          <Content />
          <footer class={styles.footer}>
            <Button onClick={handleCancel} long={true} type="outline" size="large">
              取消
            </Button>
            <Button onClick={handleClear} long={true} type="primary" size="large">
              确定清空
            </Button>
          </footer>
        </Modal>
      )
    }
  }
})
</script>
