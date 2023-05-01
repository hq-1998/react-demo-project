<script lang="tsx" setup>
import styles from './style.module.less'
import { IconRight } from '@arco-design/web-vue/es/icon'
import stone from '@renderer/assets/icons/stone.svg'
import GrandLottery from './components/GrandLottery/index.vue'
import SmartPagination from './components/SmartPagination/index.vue'
import BroadCastLottery from './components/BroadCastLottery/index.vue'
import { lotteryList } from './mock'

interface ILotteryBtn {
  title: string
  num: number
}

const Dot = () => {
  return (
    <>
      <div class={`${styles['dot']} ${styles['vertex']}`}></div>
      <div class={`${styles['dot']} ${styles['border']} ${styles['left-border-dot']}`}></div>
      <div class={`${styles['dot']} ${styles['white']}`}></div>
      <div class={`${styles['dot']} ${styles['border']} ${styles['right-border-dot']}`}></div>
      <div class={`${styles['dot']} ${styles['vertex']}`}></div>
    </>
  )
}

const Header = () => {
  return (
    <>
      <img
        class={styles.background}
        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/background.e716ce5.png"
      />
      <div class={styles['title-box-outer']}>
        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/title.b704296.png" />
        <p>惊喜大奖等你来拿</p>
      </div>
      <div class={`${styles['lotteryrules-container']} ${styles['rules-box']}`}>
        抽奖规则
        <IconRight class={styles['arrow-right-icon']} />
      </div>
    </>
  )
}

const LotteryBtn = ({ title, num }: ILotteryBtn) => {
  return (
    <>
      <div class={styles['lottery-text']}>{title}</div>
      <div class={styles['icon-num-box']}>
        <img src={stone} class={styles['lottery-icon']} />
        <div class={styles.text}>{num}</div>
      </div>
    </>
  )
}

const MainContent = () => {
  return (
    <div class={styles.main}>
      <div class={styles['current-box']}>
        <div class={styles['current-value']}>
          <img src={stone} class={styles['lottery-icon']} />
          <span class={styles.value}>156573</span>
        </div>
      </div>
      <div class={styles.box}>
        <div class={styles['left-part']}>
          <div class={styles['left-part-header']}></div>
          <div class={styles['title-box']}>
            <p class={styles.title}>幸运大转盘</p>
            <div class={`${styles.tosignin} ${styles.done}`}>已签到</div>
          </div>
          <div class={styles['lottery']}>
            <div class={styles['turntable-wrap']}>
              <div class={styles['turntable-box']}>
                <div class={`${styles['upper-border']} ${styles['up-down']}`}>
                  <Dot />
                </div>
                <div class={`${styles['lower-border']} ${styles['up-down']}`}>
                  <Dot />
                </div>
                <div class={`${styles['left-border']} ${styles['left-right']}`}>
                  <Dot />
                </div>
                <div class={`${styles['right-border']} ${styles['left-right']}`}>
                  <Dot />
                </div>
                <div class={styles.blocks}>
                  <div class={styles['item-container']}>
                    {lotteryList.map((item) => {
                      return (
                        <div key={item.title} class={`${styles['turntable-item']} ${styles.item}`}>
                          <div class={styles.image}>
                            <img src={item.icon} alt="image" />
                          </div>
                          <div class={styles.text}>{item.title}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div id="cost-box" class={styles['cost-box']}>
                <div id="turntable-item-0" class={`${styles['turntable-item']} ${styles.lottery}`}>
                  <LotteryBtn title="单抽" num={200} />
                </div>
                <div id="turntable-item-1" class={`${styles['turntable-item']} ${styles.lottery}`}>
                  <LotteryBtn title="十连抽" num={2000} />
                </div>
              </div>
            </div>
          </div>
          <div
            id="progress-guide-box"
            class={`${styles['lucky-wrap']} ${styles['lucky-progress-wrap']}`}
          >
            <div id="progress-wrap" class={styles['progress-wrap']}>
              <span class={styles.title}>幸运值</span>
              <div class={styles['progress-box']}>
                <div class={styles['progress']}>
                  <div
                    class={styles['progress-icon']}
                    style={{ width: '29.23%', minWidth: '4px' }}
                  ></div>
                  <span class={styles.tooltip} style={{ right: '70.77%' }}>
                    <span class={styles['tooltip-block']}></span>
                  </span>
                </div>
              </div>
              <div class={styles['value-wrap']}>
                <span class={styles['current-value']}>1754</span>
                <span>/6000</span>
              </div>
            </div>
            <div class={styles.desc}>
              * 抽奖和沾喜气可提升幸运值，幸运值满格必出转盘内奖励（非矿石及bug）
            </div>
          </div>
        </div>
        <div class={styles['right-part']}>
          <div id="lottery-gifts" class={styles.title}>
            围观大奖
          </div>
          <div class={`${styles['grandlottery-container']} ${styles['grand-lottery']}`}>
            <div class={styles.wrapper}>
              <GrandLottery />
              <div class={styles['pagantion-box']}>
                <SmartPagination total={25} />
              </div>
            </div>
          </div>
          <p class={styles.title}>中奖播报</p>
          <div class={`${styles['winninglist-container']} ${styles['winning-list']}`}>
            <BroadCastLottery />
          </div>
        </div>
      </div>
    </div>
  )
}

const Render = () => {
  return (
    <div>
      <div class={`${styles['lottery-container']} ${styles['main-content']}`}>
        <div class={styles['lottery-wrapper']} style={{ opacity: 1 }}>
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  )
}
</script>

<template>
  <Render />
</template>
