<template>
  <div class="test-flex">
    <jxh-tabs v-model="value1" type="normal" @tab-change="handleChange">
      <tab-panel label="未支付" name="1">
        标签一内容
      </tab-panel>
      <tab-panel label="已支付" name="2">
        标签二内容
      </tab-panel>
      <tab-panel label="已完成" name="3">
        标签三内容
      </tab-panel>
    </jxh-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "1"
    };
  },
  methods: {
    handleChange(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="less">
.test-flex {
}
</style>
