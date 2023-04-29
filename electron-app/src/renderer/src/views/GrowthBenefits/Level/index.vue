<script setup lang="tsx">
import { ref } from 'vue'
import CommonPanel from '../components/CommonPanel/index.vue'
import CurrentLevelCard from './components/CurrentLevelCard/index.vue'
import LevelScoreCard from './components/LevelScoreCard/index.vue'
import LevelEquityCard from './components/LevelEquityCard/index.vue'
import LevelBehavior from './components/LevelBehavior/index.vue'
import styles from './style.module.less'
import { levelBehaviorList, levelEquiltyList, levelScoreList } from './mock'

const currentLevel = 5
const currentSelectedLevel = ref(currentLevel)

const Render = () => {
  const GrowthLevel = () => {
    return (
      <>
        <div class={styles['card-points-container']}>
          <CurrentLevelCard />
          <LevelScoreCard
            list={levelScoreList}
            currentLevel={currentLevel}
            v-model:currentSelectedLevel={currentSelectedLevel.value}
          />
        </div>
        <div class={styles['level-privilege-container']}>
          <LevelEquityCard list={levelEquiltyList} />
        </div>
      </>
    )
  }

  return (
    <div class={`${styles['userlevel-container']} ${styles['main-content']}`}>
      <CommonPanel
        title="成长等级"
        v-slots={{
          content: <GrowthLevel />
        }}
      ></CommonPanel>
      <div class={styles['growth-task']}>
        <CommonPanel
          title="升级行为"
          v-slots={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            content: <LevelBehavior list={levelBehaviorList} />,
            headerExtra: <span class={styles['today-jscore']}>今日掘友分 +4.5</span>
          }}
        ></CommonPanel>
      </div>
    </div>
  )
}
</script>

<template>
  <Render />
</template>
