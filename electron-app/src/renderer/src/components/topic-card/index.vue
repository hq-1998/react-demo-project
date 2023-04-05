<script lang="tsx">
import { defineComponent } from 'vue'
import styles from './style.module.less'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props, { slots }) {
    console.log(slots, '===slots===')
    const { headerExtra, content, footer } = slots
    return () => {
      return (
        <div class={styles.fixbox}>
          <div class={styles['list_box']}>
            <p class={styles.title}>
              {props.title}
              {headerExtra?.()}
            </p>
            <div class={styles.content}>{content?.()}</div>
            {footer?.()}
          </div>
        </div>
      )
    }
  }
})
</script>
