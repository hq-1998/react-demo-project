<script lang="ts" setup>
import { ref, reactive } from 'vue'
const visible = ref(false)

const toggleVisible = () => {
  visible.value = !visible.value
}

const handleOk = () => {}
const handleCancel = () => toggleVisible()
const handleSubmit = () => {}

const form = reactive({
  title: '',
  introduction: '',
  cover_url: ''
})

defineExpose({
  visible,
  toggleVisible
})
</script>

<template>
  <a-modal
    v-model:visible="visible"
    title-align="start"
    :mask-closable="false"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template #title>
      <span class="title">新建专栏</span>
    </template>
    <a-form :model="form" layout="vertical" @submit="handleSubmit">
      <a-form-item required field="title" label="专栏名称">
        <a-input
          v-model="form.title"
          :max-length="50"
          allow-clear
          show-word-limit
          placeholder="请输入专栏名称"
        />
      </a-form-item>
      <a-form-item required field="introduction" label="专栏名称">
        <a-textarea
          v-model="form.introduction"
          :max-length="150"
          allow-clear
          class="textarea"
          show-word-limit
          placeholder="请输入专栏简介"
        />
      </a-form-item>
      <a-form-item field="cover_url" label="专栏封面">
        <a-upload class="upload" draggable action="/" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="less" scoped>
.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.textarea {
  height: 128px;
}

.upload {
  height: 242px;
  background-color: #f7f8fa;
  border: 1px dashed var(--color-neutral-3);

  :deep(.arco-upload) {
    height: 100%;
  }

  :deep(.arco-upload-drag) {
    border: none;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
