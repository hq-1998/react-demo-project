<script setup lang="tsx">
import styles from './styles.module.less'
import { Popover } from '@arco-design/web-vue'
import { IconQuestionCircle } from '@arco-design/web-vue/es/icon/index.js'

interface IProps {
  title: string
  condition?: string
  questionTip: string
  num: string
  iconUrl: string
  status: number
}

enum EStatus {
  FINISHED = 1,
  UNFINISH = 2
}

const Status = {
  [EStatus.FINISHED]: {
    text: '已完成',
    backgroundColor: '#abcdff',
    cursor: 'not-allowed'
  },
  [EStatus.UNFINISH]: {
    text: '去完成',
    backgroundColor: '#1e80ff',
    cursor: 'pointer'
  }
}

const props = defineProps<IProps>()

const Render = () => {
  return (
    <div class={styles.item}>
      <div class={styles.left}>
        <img class={styles.icon} alt="" src={props.iconUrl} />
      </div>
      <div class={styles.right}>
        <div class={styles['item-content']}>
          <div class={styles.rule}>
            <div class={styles['rule-text']}>{props.title}</div>
            {props.condition && <div class={styles.require}>({props.condition})</div>}
            <Popover
              v-slots={{
                content: <div class={styles['popover-content']}>{props.questionTip}</div>
              }}
            >
              <IconQuestionCircle class={styles.icon} />
            </Popover>
          </div>
        </div>
        <div class={styles.bottom}>
          <div class={styles.award}>
            <span class={styles['award-text']}>奖励矿石</span>
            <span class={styles['ore-count']}>{props.num}</span>
          </div>
          <div
            class={styles['task-status']}
            style={{
              backgroundColor: Status[props.status].backgroundColor,
              cursor: Status[props.status].cursor
            }}
          >
            {Status[props.status].text}
          </div>
        </div>
      </div>
    </div>
  )
}
</script>

<template>
  <Render />
</template>
