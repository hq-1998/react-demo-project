<script setup name="RightWrap" lang="ts">
import {
  IconQuestionCircle,
  IconInfoCircle,
  IconCaretLeft,
  IconCaretRight,
  IconCheck
} from '@arco-design/web-vue/es/icon/index.js'
import { getFirstDayByDate, getFullDayByDate, getCurrentDateInfo } from '@renderer/utils'
import diamond from '@renderer/assets/icons/diamond.svg'
import diamondGray from '@renderer/assets/icons/diamond-gray.svg'
import DetailPanel from './components/DetaiPanel/index.vue'
import CommonPanel from '../components/CommonPanel/index.vue'
import TaskPanel from './components/TaskPanel/index.vue'
import { ref, watch } from 'vue'

interface Item {
  index: number
  diamond: number
  disabled: boolean
}

enum EStatus {
  FINISHED = 1,
  UNFINISH = 2
}

const currentDateInfo = getCurrentDateInfo()
const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
const originList: Array<Item | null> = new Array(42)
const currentYear = ref(currentDateInfo.year)
const currentMonth = ref(currentDateInfo.month)
const currentWeekList = ref<Array<Item | null>>([])
const firstDay = ref<number>(0)
const fullDay = ref<number>(0)
const diamonList = [
  100, 150, 512, 250, 300, 350, 1024, 450, 500, 550, 600, 650, 700, 2048, 700, 700, 700, 700, 700,
  700, 4096, 700, 700, 700, 700, 700, 700, 700, 700, 5120
]

const generateWeekList = () => {
  originList.fill(null, 0, firstDay.value)
  for (let i = firstDay.value; i < fullDay.value + firstDay.value; i++) {
    const index = i - firstDay.value + 1
    originList.fill(
      {
        index,
        diamond: diamonList[i - firstDay.value],
        disabled: index > currentDateInfo.day
      },
      i
    )
  }
  originList.fill(null, fullDay.value + firstDay.value, originList.length)
  currentWeekList.value = [...originList]
  console.log(currentWeekList.value, fullDay, 'currentWeekList')
}

watch(
  () => currentMonth.value,
  () => {
    firstDay.value = getFirstDayByDate(currentYear.value, currentMonth.value)
    fullDay.value = getFullDayByDate(currentYear.value, currentMonth.value)
    generateWeekList()
  },
  {
    immediate: true
  }
)

const handleTime = (symbol: 'add' | 'sub') => {
  if (symbol === 'add') {
    if (currentMonth.value === 12) {
      currentMonth.value = 1
      currentYear.value += 1
    } else {
      currentMonth.value += 1
    }
  } else {
    if (currentMonth.value === 1) {
      currentMonth.value = 12
      currentYear.value -= 1
    } else {
      currentMonth.value -= 1
    }
  }
}
const handleTimeLeft = () => {
  handleTime('sub')
}
const handleTimeRight = () => {
  handleTime('add')
}
</script>

<template>
  <div>
    <div class="signin-container main-content">
      <div class="signin">
        <CommonPanel title="每日签到">
          <template #headerExtra>
            <div class="rules"><icon-question-circle class="icon" />签到规则</div>
          </template>
          <template #content>
            <div class="content-padding">
              <div class="content-left">
                <div class="figures">
                  <div class="figure-card mini-card">
                    <div class="figure active">202</div>
                    <div class="attention">
                      <span class="text">连续签到天数</span>
                    </div>
                  </div>
                  <div class="figure-card mid-card">
                    <div class="figure">226</div>
                    <div class="attention">
                      <span class="text">累计签到天数</span>
                    </div>
                  </div>
                  <div class="figure-card large-card">
                    <div class="figure">153743</div>
                    <div class="attention">
                      <span class="text">当前矿石数</span>
                      <icon-info-circle class="icon" />
                    </div>
                  </div>
                </div>
                <div class="signin-calendar">
                  <div class="calendar">
                    <div class="first-line">
                      <div class="time">
                        <icon-caret-left class="time-left-icon" @click="handleTimeLeft" />
                        <span class="time-label">{{ currentYear }}年{{ currentMonth }}月</span>
                        <icon-caret-right class="time-right-icon" @click="handleTimeRight" />
                      </div>
                      <div class="info">
                        <img
                          alt="icon"
                          class="sign-card-icon"
                          src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6de761f6dddc438aafe6b83a913a6ded~tplv-k3u1fbpfcp-no-mark:96:96:84:96.awebp"
                        />
                        补签卡：
                        <span class="count">0</span>
                        张
                      </div>
                    </div>
                    <div class="second-line">
                      <div v-for="item in weekdays" :key="item" class="weekday">{{ item }}</div>
                    </div>
                    <div class="day-container">
                      <div
                        v-for="item in currentWeekList"
                        :key="item?.index"
                        :class="item ? 'calendar-day day' : 'blank-box'"
                      >
                        <div
                          v-if="item"
                          :class="['pre-signed', 'universal', item.disabled && 'future-day']"
                        >
                          <icon-check v-if="!item.disabled" class="yes-icon" />
                          <span
                            :class="[
                              'figure',
                              'bold',
                              item.disabled && 'figure-gray',
                              item.index === currentDateInfo.day &&
                                currentMonth === currentDateInfo.month &&
                                currentYear === currentDateInfo.year &&
                                'back-blue'
                            ]"
                            >{{ item.index }}</span
                          >
                          <span :class="['add-mine-store', item.disabled && 'gray']">
                            <img :src="item.disabled ? diamondGray : diamond" class="diamond" />
                            +{{ item.diamond }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-right">
                <div class="code-calender">
                  <button class="signedin btn">今日已签到</button>
                </div>
                <div class="divide" />
                <div class="signin-banner">
                  <div class="banner">
                    <div class="view-box transition-next">
                      <a class="link item" target="_self" />
                    </div>
                  </div>
                </div>
                <div class="coder-calendar code-cal">
                  <div class="block-one ellipse">
                    <div class="inner-ellipse"></div>
                  </div>
                  <div class="block-two ellipse">
                    <div class="inner-ellipse"></div>
                  </div>
                  <div class="part-top">
                    <span class="current-day">{{ currentDateInfo.day }}</span>
                    <span class="date">Apr.{{ currentDateInfo.year }}</span>
                  </div>
                  <div class="part-mid">
                    <div class="title">宜周五上线</div>
                    <div class="chicken-soup">阴阳相生，天道有缺，故完美之程序亦有BUG</div>
                  </div>
                  <div class="part-down">
                    <div class="logo-text">
                      <img
                        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                        alt="tengteng-logo"
                        class="logo"
                      />
                      <span class="text">扫描右侧二维码分享给好友</span>
                    </div>
                    <img
                      src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/web-qrcode.90661f6.png"
                      class="qrcode"
                    />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </CommonPanel>
      </div>
      <div class="game-entry">
        <div class="game-entry-wrap">
          <DetailPanel
            title="掘金公告"
            explain="游戏入口调整"
            url="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/565b12d54ac84965bc7e99c7b7e0d239~tplv-k3u1fbpfcp-no-mark:356:192:0:0.awebp"
            btn-text="了解详情"
          />
          <DetailPanel
            title="公益计划"
            explain="用矿石兑换公益基金"
            url="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ad1297038a845b7b0cca4f2d172400b~tplv-k3u1fbpfcp-no-mark:356:192:0:0.awebp"
            btn-text="捐赠详情"
          />
        </div>
      </div>
      <CommonPanel title="我的任务" class="common-panel">
        <template #content>
          <div class="content-padding">
            <TaskPanel
              title="首次成功发布文章"
              condition=">400字"
              question-tip="我们鼓励大家迈出创作第一步，成功发布第一篇文章且满足字数要求（以编辑器统计字数为准），即可获得相应奖励。"
              num="10000"
              icon-url="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article-icon.cb8af82.png"
              :status="EStatus.UNFINISH"
            />
            <TaskPanel
              title="首次成功发布沸点"
              question-tip="我们鼓励大家在沸点分享生活，成功发布第一条沸点即可获得相应奖励。想获得更大的曝光？建议添加圈子或话题噢。"
              num="5000"
              icon-url="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/pin-icon.c8ea3e1.png"
              :status="EStatus.FINISHED"
            />
          </div>
        </template>
      </CommonPanel>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-content {
  min-height: calc(100vh - 130px);

  .signin {
    background-color: #fff;

    .rules {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      color: #4e5969;
      cursor: pointer;
      white-space: nowrap;

      .icon {
        margin-right: 4px;
      }
    }

    .content-padding {
      padding: 20px 32px 20px 32px;
      display: flex;
      justify-content: space-between;

      .content-left {
        width: 576px;

        .signin-calendar {
          width: 100%;
          margin-top: 24px;

          .calendar {
            width: 100%;

            .first-line {
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 20px;
              color: #1d2129;
              line-height: 28px;
              font-weight: 500;
              margin-bottom: 24px;

              .time {
                .time-left-icon,
                .time-right-icon {
                  color: #c2c8d1;
                  width: 16px;
                  height: 16px;
                  cursor: pointer;
                }

                .time-label {
                  margin: 0 8px;
                }
              }

              .info {
                font-size: 16px;
                line-height: 24px;
                font-weight: 400;
                color: #86909c;
                white-space: nowrap;
                display: flex;
                align-items: center;

                .sign-card-icon {
                  height: 24px;
                  margin-right: 6px;
                }

                .count {
                  color: #ff7d00;
                  font-weight: 500;
                  margin-right: 0.2em;
                }
              }
            }

            .second-line {
              display: flex;
              margin-bottom: 16px;

              .weekday {
                width: 72px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #86909c;
                margin-right: 12px;
                font-size: 16px;
                border-radius: 2px;

                &:last-child {
                  margin-right: 0;
                }
              }
            }

            .day-container {
              display: flex;
              flex-wrap: wrap;

              .day:nth-child(7n) {
                margin-right: 0;
              }

              .blank-box:nth-child(7n) {
                margin-right: 0;
              }

              .future-day {
                background-color: #f2f3f6 !important;
              }

              .day {
                background: #f2f3f6;
                flex: none;
                width: 72px;
                height: 68px;
                margin-right: 12px;
                margin-bottom: 16px;
                border-radius: 2px;

                .pre-signed {
                  background-color: #e8f3ff;
                  position: relative;
                }

                .universal {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  border-radius: 2px;

                  .yes-icon {
                    position: absolute;
                    top: 2px;
                    right: 2px;
                    color: #ff7d00;
                  }

                  .figure {
                    color: #1d2129;
                    font-size: 20px;
                    line-height: 28px;
                    margin-bottom: 2px;
                  }

                  .figure-gray {
                    color: #86909c;
                  }

                  .back-blue {
                    color: #fff;
                    background-color: #1e80ff;
                    border-radius: 50px;
                    width: 28px;
                    height: 28px;
                    text-align: center;
                  }

                  .gray {
                    color: #86909c !important;
                  }

                  .add-mine-store {
                    height: 22px;
                    color: #1e80ff;
                    font-size: 12px;
                    display: flex;
                    align-items: center;

                    .diamond {
                      width: 14px;
                      height: 14px;
                    }
                  }
                }
              }

              .blank-box {
                flex: none;
                width: 72px;
                height: 68px;
                margin-right: 12px;
                margin-bottom: 16px;
                border-radius: 2px;
              }
            }
          }
        }

        .figures {
          display: flex;
          flex-shrink: 0;
          min-width: 586px;
          justify-content: space-between;
          background-color: #f7f8fa;
          border-radius: 2px;
          padding: 20px 55px;
          box-sizing: border-box;

          .figure-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .figure {
              font-weight: 700;
              font-size: 32px;
              color: #1d2129;
              line-height: 36px;
              font-family: DIN Alternate;
              white-space: nowrap;
              margin-right: 12px;
              position: relative;
              top: 1px;

              &.active {
                color: #1e80ff;
              }
            }

            .attention {
              display: flex;
              align-items: flex-end;
              margin-top: 4px;

              .icon {
                width: 16px;
                height: 16px;
                color: #c9cdd4;
              }

              .text {
                color: #86909c;
                font-weight: 400;
                font-size: 14px;
                white-space: nowrap;
              }
            }
          }
        }
      }

      .content-right {
        flex: 0 0 auto;
        width: 240px;

        .code-calender {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: 24px 0;

          .signedin {
            background-color: #e8f3ff;
            color: #1e80ff;
          }

          .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 240px;
            height: 56px;
            border-radius: 4px;
            font-size: 18px;
            font-weight: 500;
            border: none;
            padding: 0.5rem 1.3rem;
            outline: none;
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;
            appearance: none;
          }
        }

        .divide {
          border-bottom: 1px solid #e5e8ef;
          margin: 0 0 23px;
        }

        .signin-banner {
          height: 64px;
          width: 240px;
          background-color: #e8f3ff;
          flex-shrink: 0;

          .banner {
            height: 100%;
            width: 100%;
            position: relative;

            .view-box {
              border-radius: 2px;
              overflow: hidden;
              position: relative;
              width: 100%;
              height: 100%;

              .link {
                display: block;
                width: 100%;
                height: 100%;
                background-color: #ccc;
                background-position: 50%;
                background-size: cover;
                background-repeat: no-repeat;
                background-image: url('//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/invitation.cc0f66e.png');
              }
            }
          }
        }

        .coder-calendar {
          box-sizing: border-box;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          position: relative;

          .ellipse {
            width: 12px;
            height: 20px;
            padding: 2px;
            border-radius: 50px;
            background-color: #fff;
            transform: translateY(-50%);
            box-sizing: border-box;

            .inner-ellipse {
              width: 100%;
              height: 100%;
              border-radius: 50px;
              background-color: #6aa1ff;
            }
          }

          .block-one {
            position: absolute;
            left: 56px;
          }

          .block-two {
            position: absolute;
            right: 56px;
          }

          .part-top {
            padding: 30px 0 30px 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            box-sizing: border-box;
            background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/web-png.b00ed3b.png);
            background-repeat: no-repeat;
            color: #e8f3ff;
            background-size: 100% 158px;
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;

            .current-day {
              line-height: 74px;
              font-size: 57px;
              font-weight: 700;
            }

            .date {
              font-size: 16px;
              line-height: 24px;
              font-weight: 400;
            }
          }

          .part-mid {
            height: calc(100% - 238px);
            padding: 34px 24px;
            overflow: hidden;
            background-color: #fff;
            border: 1px solid #e5e6eb;
            border-top: none;
            border-bottom: none;

            .title {
              color: #1e80ff;
              font-size: 24px;
              line-height: 36px;
              font-weight: 600;
              margin-bottom: 12px;
            }

            .chicken-soup {
              font-weight: 400;
              font-size: 14px;
              line-height: 24px;
              color: #4e5969;
            }
          }

          .part-down {
            padding: 16px;
            display: flex;
            justify-content: space-between;
            background-color: #f7f8fa;
            border: 1px solid #e5e6eb;
            border-top: none;
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;

            .qrcode {
              width: 48px;
              height: 48px;
            }

            .logo-text {
              font-size: 12px;
              font-weight: 400;
              color: #86909c;
              display: flex;
              flex-direction: column;

              .logo {
                width: 116.82px;
                height: 24px;
              }

              .text {
                line-height: 20px;
                margin-top: 8px;
              }
            }
          }
        }

        .code-cal {
          width: 240px;
          height: 404px;
          margin-top: 28px;
        }
      }
    }
  }

  .game-entry {
    margin-top: 16px;

    .game-entry-wrap {
      display: flex;
      gap: 12px;
    }
  }

  .common-panel {
    margin-top: 16px;
    background-color: #fff;

    .content-padding {
      padding: 20px 32px 20px 32px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
