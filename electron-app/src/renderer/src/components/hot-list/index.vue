<script lang="tsx">
import { defineComponent } from 'vue'
import { IconRight } from '@arco-design/web-vue/es/icon/index.js'

const list = [
  {
    title: '综合文章榜',
    url: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.52e2cca.png',
    children: [
      {
        index: 1,
        title: '放心，前端死不了'
      },
      {
        index: 2,
        title: '一名读懂域名注册'
      },
      {
        index: 3,
        title: 'Echarts无法实现这个曲线图😭，那我手写一个'
      }
    ]
  },
  {
    title: '精选专栏榜',
    url: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/books.ee6cdd2.png',
    children: [
      {
        title: '🥇【Spring技术体系】技术研究院'
      },
      {
        title: 'Fair'
      },
      {
        title: 'JS每日一算法'
      }
    ]
  },
  {
    title: '推荐收藏集',
    url: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/star.641eec7.png',
    children: [
      {
        title: '前端案例'
      },
      {
        title: '前端有意思的东东'
      },
      {
        title: '机器学习'
      }
    ]
  }
]

export default defineComponent({
  name: 'HotList',
  setup() {
    const HotListComponent = () => {
      return (
        <div class="hot-list-wrap">
          {list.map((item) => {
            return (
              <div key={item.title} class="hot-list-item">
                <div class="hot-item-header">
                  <div class="hot-title">
                    <img src={item.url} class="hot-icon" alt="icon" />
                    <span title={item.title} class="title-text">
                      {item.title}
                    </span>
                  </div>
                  <a class="item-header-button" target="_blank">
                    <span>更多</span>
                    <IconRight size="12px" />
                  </a>
                </div>
                <ul class="hot-item-body">
                  <div class="skeleton">
                    {item.children.map((child) => {
                      return (
                        <li key={item.title} class="hot-item">
                          {child.index ? (
                            <div class="body-index">{child.index}</div>
                          ) : (
                            <div class="body-dot"></div>
                          )}

                          <a class="hot-item-text" target="_blank" title={child.title}>
                            <span>{child.title}</span>
                          </a>
                        </li>
                      )
                    })}
                  </div>
                </ul>
              </div>
            )
          })}
        </div>
      )
    }

    return () => <div class="hot-list-container hot-list">{HotListComponent()}</div>
  }
})
</script>

<style lang="less" scoped>
.hot-list-container {
  .hot-list-wrap {
    display: flex;
    flex-direction: row;
    padding: 1.33rem 0 0.66rem;
    background-color: var(--juejin-font-white);
    border-radius: 4px;
    margin-bottom: 1.66rem;

    .hot-list-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 1.66rem;
      border-right: 1px solid var(--juejin-gray-1-2);
      overflow: hidden;

      .hot-item-header {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        align-items: center;

        .hot-title {
          font-weight: 500;
          font-size: 1.33rem;
          line-height: 2rem;
          display: flex;
          flex-direction: row;
          color: var(--juejin-font-1);

          .hot-icon {
            width: 1.66rem;
            height: 1.66rem;
            margin-right: 0.66rem;
          }

          .title-text {
            font-weight: 500;
            font-size: 1.33rem;
            line-height: 2rem;
            color: var(--juejin-font-1);
          }
        }

        .item-header-button {
          font-size: 1rem;
          color: var(--juejin-font-3);
          line-height: 1.66rem;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }

      .hot-item-body {
        min-height: 7.5rem;

        .skeleton {
          .hot-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 0.66rem;
            font-size: 1.16rem;
            line-height: 1.83rem;

            &:first-child .body-dot {
              background-color: var(--juejin-danger-1-normal);
            }

            &:nth-child(2) .body-dot {
              background-color: var(--juejin-warning-1-normal);
            }

            .body-dot {
              display: flex;
              flex-shrink: 0;
              width: 0.25rem;
              height: 0.25rem;
              margin: 0 1.42rem 0 0.75rem;
              background-color: rgba(255, 172, 12, 0.4);
            }

            &:nth-child(2) .body-index {
              background: linear-gradient(180deg, #ff7426 20%, rgba(255, 116, 38, 0.4) 80%);
              background-clip: text;
              -webkit-background-clip: text;
            }

            &:nth-child(3) .body-index {
              background: linear-gradient(180deg, #ffac0c 20%, rgba(255, 172, 12, 0.4) 80%);
              background-clip: text;
              -webkit-background-clip: text;
            }

            .body-index {
              background: linear-gradient(180deg, #f64242 20%, rgba(246, 66, 66, 0.4) 80%);
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              min-width: 0.8rem;
              justify-content: center;
              align-items: center;
              display: flex;
              flex-shrink: 0;
              font-weight: 800;
              margin: 0 0.92rem 0 0.42rem;
              font-family: Archivo;
            }

            .hot-item-text {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              color: var(--juejin-font-1);

              &:hover {
                color: #1e80ff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
