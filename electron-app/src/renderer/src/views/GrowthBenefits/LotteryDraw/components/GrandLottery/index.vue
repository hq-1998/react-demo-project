<script setup lang="tsx">
import styles from './styles.module.less'
import { grandLotteryList } from '../../mock'
import stick from '@renderer/assets/icons/stick.svg'

const Render = () => {
  return (
    <div>
      {grandLotteryList.map((item, index) => {
        return (
          <div key={item.id} id={`grandlottery-item-${index}`} class={styles.item}>
            <div class={styles['left-box']}>
              <div class={styles.image}>
                <img src={item.icon} />
              </div>
            </div>
            <div class={styles['right-box']}>
              <div class={styles['header-box']}>
                <span class={styles['txt']}>恭喜</span>
                <div class={styles['user-box']}>
                  <div class={styles['avatar-box']}>
                    <img src={item.avatar} class={styles['avatar']} />
                  </div>
                  <span class={styles['username']}>{item.username}</span>
                </div>
                <span class={styles['txt']}>抽中</span>
                <span class={styles['grand-name']}>{item.title}</span>
              </div>
              <div class={styles['stick-lucky']}>
                <div class={styles['stick-lucky-wrap']}>
                  <div class={styles['stick-lucky-show']}>
                    <div id="stick-txt-0" class={styles['tooltip-box']}>
                      <img src={stick} class={styles['stick-btn']} />
                    </div>
                    <span class={styles.divide}></span>
                    <span class={styles['user-list']}>{item.list.join('、')}</span>
                    <span class={styles.num}>{item.num}</span>
                    <span class={styles.unit}>{item.unit}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
</script>

<template>
  <Render />
</template>
