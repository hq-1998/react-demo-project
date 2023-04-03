<script lang="tsx" setup>
import styles from './styles.module.less'

const Header = () => (
  <div class={styles['source-header']}>
    <a class={styles['username']}>用户3440788758002</a>
    <span>赞了这篇文章</span>
  </div>
)

const Content = () => {
  return (
    <div class={styles['content-item']}>
      <div class={styles['post-header']}>
        <div class={styles['author-info']}>
          <a class={styles['user-link']}>
            <img
              class={styles['avatar']}
              src="https://p3-passport.byteimg.com/img/user-avatar/94f004d109b8a46c7c6af8bda6ad9f56~100x100.awebp"
            />
          </a>
          <div class={styles['author-info-content']}>
            <div class={styles['author-info-head']}>
              <a class={styles['username']}>oil欧哟</a>
              <div class={styles['vip-level']}>
                <span class={styles['byte-tooltip__wrapper']}>
                  <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/162b40efbd71af9a806dd2b54c4580ef.svg" />
                </span>
              </div>
            </div>
            <div class={styles['meta-box']}>
              <div class={`${styles['position']} ${styles['ellipsis']}`}>前端开发 @ API7.AI</div>
              <div class={styles['dot']}>·</div>
              22天前
            </div>
          </div>
          <button class={styles['follow-button']}>关注</button>
        </div>
      </div>
      <div class={styles['post-item-content']}>
        <a class={styles['post-link']}>
          <div class={styles['post-item-title']}>
            <h3>都什么时代还在发传统请求？来看看 SWR 如何用 React Hook 实现优雅请求</h3>
          </div>
          <div class={styles['rich-content']}>
            <div class={styles['post-item-excerpt']}>
              如果你是一名经验丰富的 react
              开发者，那么你肯定有遇到过以下几种情况：请求库封装复杂，手动实现各种缓存验证去重逻辑，还需要维护请求加载或错误状态，由于组件的重复渲染导...
            </div>
            <img
              class={styles['post-item-image']}
              alt="image"
              src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5ac1c4f0df7458fac56194987cac7d1~tplv-k3u1fbpfcp-no-mark:240:240:240:240.awebp?"
            />
          </div>
        </a>
      </div>
      <div class={styles['action-box']}>
        <div class={`${styles['action']} ${styles['like-action']} ${styles['active']}`}>
          <div class={`${styles['action-title-box']} ${styles['active']}`}>
            <span class={`${styles['icon']} ${styles['like-icon']}`}></span>
            <span class={`${styles['action-title']}`}>20</span>
          </div>
        </div>
        <div class={`${styles['action']} ${styles['comment-action']} ${styles['active']}`}>
          <div class={`${styles['action-title-box']}`}>
            <span class={`${styles['icon']} ${styles['comment-icon']}`}></span>
            <span class={`${styles['action-title']}`}>12</span>
          </div>
        </div>
        <div class={`${styles['action']} ${styles['share-action']} ${styles['active']}`}>
          <div class={`${styles['action-title-box']}`}>
            <span class={`${styles['icon']} ${styles['share-icon']}`}></span>
            <span class={`${styles['action-title']}`}>分享</span>
          </div>
        </div>
      </div>
    </div>
  )
}
</script>

<template>
  <Header />
  <Content />
</template>
