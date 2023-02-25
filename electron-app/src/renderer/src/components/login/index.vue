<script setup lang="ts">
import { ref } from 'vue'

enum ELoginType {
  verifyCode = 1,
  passwordCode = 2
}

const visible = ref(false)
const loginType = ref<ELoginType>(ELoginType.verifyCode)

const toggleLoginType = () => {
  loginType.value =
    loginType.value === ELoginType.verifyCode ? ELoginType.passwordCode : ELoginType.verifyCode
}

const setVisible = (open: boolean) => {
  visible.value = open
}

const handleOk = () => {
  setVisible(false)
}
const handleCancel = () => {
  setVisible(false)
}

defineExpose({
  visible,
  setVisible
})
</script>

<template>
  <a-modal
    v-model:visible="visible"
    :mask-closable="false"
    title-align="start"
    :footer="false"
    modal-class="modal"
    :width="590"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template #title>
      <header class="login-title">登录腾腾小站畅享更多权益</header>
    </template>
    <div class="content">
      <a-row justify="space-between" :wrap="false">
        <div class="login-main">
          <div class="panel">
            <h1 class="title">
              {{ loginType === ELoginType.verifyCode ? '验证码登录' : '密码登录' }}
            </h1>
            <div class="input-group">
              <a-space direction="vertical" :size="24">
                <a-input
                  :placeholder="
                    loginType === ELoginType.verifyCode ? '请输入手机号' : '请输入邮箱/手机号'
                  "
                  allow-clear
                  :style="{ width: '277px' }"
                >
                  <template v-if="loginType === 1" #prepend> +86 </template>
                </a-input>
                <a-input
                  :placeholder="loginType === ELoginType.verifyCode ? '请输入验证码' : '请输入密码'"
                  allow-clear
                  :style="{ width: '277px' }"
                >
                  <template #append>
                    <a class="send-vcode-btn">{{
                      loginType === ELoginType.verifyCode ? '获取验证码' : '忘记密码'
                    }}</a>
                  </template>
                </a-input>
                <a-button long type="primary">登录</a-button>
                <div class="other-login-box">
                  <div class="oauth-box">
                    <span>其他登录：</span>
                    <div class="oauth">
                      <div class="oauth-bg">
                        <img
                          title="微博"
                          alt="微博"
                          class="oauth-btn"
                          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/fa758ebd6691cf5931bbbed63230327b.svg"
                        />
                      </div>
                      <div class="oauth-bg">
                        <img
                          title="微信"
                          alt="微信"
                          class="oauth-btn"
                          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e0ff12435b30910520c9a3aac9b90487.svg"
                        />
                      </div>
                      <div class="oauth-bg">
                        <img
                          title="GitHub"
                          alt="Github"
                          class="oauth-btn"
                          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/547dd8a9450cd7be39ff97c40a23e794.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <span class="clickable" @click="toggleLoginType">{{
                    loginType === 1 ? '密码登录' : '验证码登录'
                  }}</span>
                </div>
              </a-space>
            </div>
          </div>
        </div>
        <div class="auth-qrcode">
          <h1 class="title">
            扫码登录
            <span class="app-version">（6.4.1及以上版本支持）</span>
          </h1>
          <div class="qrcode-img-wrap">
            <img
              src="https://img.atobo.com/ProductImg/EWM/UWeb/1/5/4/4/5124/15445124/1.gif"
              class="qrcode-img"
            />
            <img
              src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin.7c9cb48.png"
              alt="juejin-app"
              class="qrcode-img-logo"
            />
          </div>
          <div class="qrcode-text">
            打开
            <a class="app">稀土掘金APP</a>
            <div>点击“我-左上角扫一扫”登录</div>
          </div>
        </div>
      </a-row>
    </div>
    <footer class="agreement-box">
      注册登录即表示同意
      <a class="terms">用户协议</a>
      和
      <a class="privacy">隐私政策</a>
    </footer>
  </a-modal>
</template>

<style lang="less" scoped>
.modal {
  :global(.arco-modal-header) {
    height: 100%;
    padding: 1.67rem 2.33rem;
  }
  .login-title {
    font-size: 18px;
    color: #252933;
    font-weight: 500;
    line-height: 2.33rem;
  }

  .login-main {
    .panel {
      .title {
        font-size: 1.33rem;
        font-weight: 500;
        margin: 0 0 1.33rem;
        color: 252933;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .input-group {
        margin-bottom: 0.5rem;

        .send-vcode-btn {
          color: #1e80ff;
          font-weight: 500;
          cursor: pointer;
        }

        .other-login-box {
          display: flex;
          color: #515767;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .oauth-box {
            display: flex;
            align-items: center;
            .oauth {
              display: flex;
              align-items: center;
              .oauth-bg {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background-color: #f2f3f5;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 8px;
                .oauth-btn {
                  height: 1.3rem;
                  cursor: pointer;
                }
              }
            }
          }

          .clickable {
            color: #515767;
            cursor: pointer;
          }
        }
      }
    }
  }

  .content {
    position: relative;

    .auth-qrcode {
      padding-left: 3rem;
      margin-left: 3rem;
      border-left: 1px solid rgba(228, 230, 235, 0.5);
      .title {
        font-size: 1.33rem;
        font-weight: 500;
        margin: 0 0 1.33rem;
        color: #252933;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .app-version {
          color: #8a919f;
          font-size: 12px;
          line-height: 20px;
          font-weight: 400;
        }
      }

      .qrcode-img-wrap {
        width: 130px;
        height: 130px;
        position: relative;
        margin-bottom: 16px;
      }

      .qrcode-img {
        width: 100%;
        height: 100%;
        border: 1.5px solid #e4e6eb;
        border-radius: 4px;
      }

      .qrcode-img-logo {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .qrcode-text {
        font-size: 14px;
        color: #515767;
        line-height: 22px;

        .app {
          color: #1e80ff;
          cursor: pointer;
        }
      }
    }
  }

  .agreement-box {
    margin-top: 3.33rem;
    color: #8a919f;
    text-align: center;

    a {
      color: #1e80ff;
      cursor: pointer;
    }
  }
}
</style>
