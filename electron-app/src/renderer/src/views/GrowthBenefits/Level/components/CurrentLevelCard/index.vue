<script setup lang="ts"></script>

<template>
  <div class="growth-card level5">
    <div class="corner-icon is-got">当前等级</div>
    <div class="main-content">
      <div class="left-side">
        <img
          calss="level-text"
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8ed722af699c9e28f2cf5dfc41271107.svg"
        />
        <div>
          <div class="title">掘友分</div>
          <a>
            <div class="score">776</div>
          </a>
        </div>
      </div>
      <div class="right-side">
        <img
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/icon-growth-card.5f869e2.png"
          class="icon"
        />
      </div>
    </div>
    <div class="footer">
      <div class="progress-bar-container is-show">
        <div class="progress-bar" style="width: calc(38.8%)">
          <div class="shinning-bar"></div>
        </div>
      </div>
      <div class="upgrade-text is-level56">还需1224分可升至掘友6级</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.level5 {
  background: linear-gradient(104.12deg, #b69ced, #7953c8 46.87%, #4a2697);
}
.growth-card {
  height: 164px;
  width: 327px;
  position: relative;
  margin-right: 20px;
  border-radius: 12px;

  .corner-icon {
    width: 56px;
    height: 18px;
    position: absolute;
    background: #c2c8d1;
    border-radius: 12px 0 8px 0;
    padding: 2px 6px;
    transform: scale(0.83);
    top: -2px;
    left: -6px;
    font-weight: 500;
    font-size: 10px;
    color: #fff;
  }

  .is-got {
    background: #efc01a;
    text-align: center;
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;

    .left-side {
      margin-top: 32px;

      .level-text {
        width: 92px;
        height: 24px;
      }

      .title {
        color: hsla(0, 0%, 100%, 0.9);
        font-size: 10px;
        line-height: 14px;
        margin-top: 11px;
      }

      .score {
        font-weight: 600;
        font-size: 16px;
        color: hsla(0, 0%, 100%, 0.9);
        margin-top: 2px;
        line-height: 20px;
        cursor: pointer;
      }
    }

    .right-side {
      margin-top: 16px;

      .icon {
        mix-blend-mode: luminosity;
        width: 87px;
        height: 90px;
      }
    }
  }

  .footer {
    margin: 12px 20px 0;

    .progress-bar-container {
      height: 5px;
      background: hsla(0, 0%, 100%, 0.16);
      border-radius: 4px;
      visibility: hidden;
      &.is-show {
        visibility: visible;
      }

      .progress-bar {
        background: #fff;
        border-radius: 4px;
        height: 5px;
        position: relative;

        .shinning-bar {
          height: 5px;
          width: 22.09%;
          position: absolute;
          right: 0;
          background: linear-gradient(270deg, #fff 24.48%, hsla(0, 0%, 100%, 0));
          mix-blend-mode: luminosity;
          filter: blur(5px);
          border-radius: 4px;
        }
      }
    }

    .upgrade-text {
      margin-top: 6px;
      color: hsla(0, 0%, 100%, 0.9);
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
