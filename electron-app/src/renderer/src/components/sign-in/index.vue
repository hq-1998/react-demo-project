<script name="sign-in" setup lang="ts"></script>

<template>
  <div class="signin">
    <div class="first-line">
      <div class="icon-text">
        <span class="title">
          连续签到
          <span class="title-days">200天</span>
        </span>
        <div class="second-line">点亮在社区每一天</div>
      </div>
      <button class="btn signedin-btn">
        <span class="btn-text signed-text">已签到</span>
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.signin {
  width: 240px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #fff;
  box-sizing: border-box;

  .first-line {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .icon-text {
      display: flex;
      flex-direction: column;

      .title {
        color: #1d2129;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;

        .title-days {
          margin-left: 4px;
          color: #1e80ff;
        }
      }
    }
    .second-line {
      color: #8a919f;
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
    }

    .btn {
      border-radius: 4px;
      height: 36px;
      width: 74px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(30, 128, 255, 0.3);
      background-color: rgba(30, 128, 255, 0.05);
      appearance: none;
      color: #fff;
      padding: 0.5rem 1.3rem;
      outline: none;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;

      .signed-text {
        color: #abcdff;
      }

      .btn-text {
        font-size: 14px;
        font-weight: 400;
        white-space: nowrap;
      }
    }
  }
}
</style>
