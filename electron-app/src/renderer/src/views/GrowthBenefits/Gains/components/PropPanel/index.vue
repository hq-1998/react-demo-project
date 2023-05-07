<script setup lang="ts">
import { IconCaretRight } from '@arco-design/web-vue/es/icon'
import BaseModal from '@renderer/components/base-modal/index.vue'
import { ref, reactive } from 'vue'

interface IListItem {
  /** 道具名称 */
  title: string
  /** 中奖时间 */
  date: string
  /** 道具图片 */
  url: string
  /** 是否可回收 0 可回收 1 不可回收 */
  isRecycle: number
  /** 类型 0 惊喜好物 1 我的道具 */
  type: number
}

interface IForm {
  /** 用户名称 */
  username: string
  /** 奖品名称 */
  lottery: string
  /** 收货者姓名 */
  receive_name: string
  /** 联系人手机号码 */
  contact: string
  /** 收货地址 */
  address: string
  /** 备注 */
  remark?: string
}

interface IProps {
  list: IListItem[]
}

withDefaults(defineProps<IProps>(), {
  list: () => []
})

const modalVisible = ref(false)
const handlePreview = () => {
  modalVisible.value = true
}

const form = reactive<IForm>({
  username: '用户3440788758002',
  lottery: '稀土掘金口罩',
  receive_name: '黄强',
  contact: '15605031018',
  address: '福建省福州市仓山区建新镇金闽小区二区二期八号楼1001',
  remark: ''
})
</script>

<template>
  <div class="tab-pane">
    <div class="gainlist-container content">
      <div class="gains-wrapper">
        <div class="list-wrapper">
          <div class="list">
            <div v-for="item in list" :key="item.title" class="item">
              <div class="img-wrapper">
                <img :src="item.url" class="item-icon" />
              </div>
              <div class="main">
                <p class="goods-name">{{ item.title }}</p>
                <p class="date">中奖时间：{{ item.date }}</p>
                <div class="buttons">
                  <button class="button-item disabled actived" @click="handlePreview">
                    查看信息
                    <icon-caret-right />
                  </button>
                  <button :disabled="true" class="button-item disabled">
                    官方回收 <icon-caret-right />
                  </button>
                  <button :disabled="true" class="button-item disabled">
                    公益捐赠 <icon-caret-right />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BaseModal v-model:visible="modalVisible">
      <template #title>腾腾小站奖品发放信息</template>
      <a-form
        :label-col-props="{ span: 6 }"
        :style="{ padding: '0 75px', boxSizing: 'border-box' }"
        :model="form"
      >
        <a-form-item label="用户昵称" :required="true">
          <span>{{ form.username }}</span>
        </a-form-item>
        <a-form-item label="中奖奖品" :required="true">
          <span>{{ form.lottery }}</span>
        </a-form-item>
        <a-form-item label="收货姓名" :required="true" field="receive_name">
          <a-input v-model="form.receive_name" readonly max-length="25" :show-word-limit="true" />
        </a-form-item>
        <a-form-item label="联系方式" :required="true" field="contact">
          <a-input v-model="form.contact" readonly max-length="11" :show-word-limit="true" />
        </a-form-item>
        <a-form-item label="收货地址" :required="true" field="address">
          <a-input v-model="form.address" readonly max-length="120" :show-word-limit="true" />
        </a-form-item>
        <a-form-item label="备注" field="remark">
          <a-textarea
            v-model="form.remark"
            placeholder="请输入备注，例如奖品的期望尺码"
            readonly
            max-length="200"
          />
        </a-form-item>
      </a-form>
      <p class="tip">
        * 请您在30个自然日内填写中奖信息（逾期视为放弃），工作人员将在15个工作日内发放
      </p>
      <p class="tip">
        * 如有疑问，可前往
        <a class="link">反馈&建议</a>
        留言，工作人员会与您取得联系
      </p>
      <div class="button-wrapper">
        <button class="finished">已提交</button>
      </div>
    </BaseModal>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
