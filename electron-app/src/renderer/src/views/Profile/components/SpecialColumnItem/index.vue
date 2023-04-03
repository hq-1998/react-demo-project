<script lang="ts" setup>
import { ref } from 'vue'
import CreateSpecialColumnModal from '../CreateSpecialColumnModal/index.vue'

const modalRef = ref<InstanceType<typeof CreateSpecialColumnModal> | null>(null)

const createSpecialColumn = () => {
  console.log(modalRef.value)
  modalRef.value?.toggleVisible()
}
</script>

<template>
  <div class="list-body">
    <div class="column-container">
      <div class="empty-box empty-container">
        <img
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ed038d31a0ab338af3a27716116e762f.svg"
        />
        <div class="empty-text">
          这里什么都没有.
          <span class="edit-btn" @click="createSpecialColumn">新建一个专栏 </span>
          吧~
        </div>
      </div>
    </div>
    <CreateSpecialColumnModal ref="modalRef" />
  </div>
</template>

<style lang="less" scoped>
.list-body {
  .column-container {
    background-color: #fff;

    .empty-container {
      height: 384px;
    }

    .empty-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 0;
      font-size: 1.167rem;
      font-weight: 500;
      color: #b2bac2;
      cursor: default;
      user-select: none;
      background-color: var(--juejin-layer-1);

      .empty-text {
        margin-top: 1.2rem;
      }

      .edit-btn {
        color: #1d7dfa;
        cursor: pointer;
      }
    }
  }
}
</style>
