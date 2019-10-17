<template>
  <div class="detail-wrap">
    <img src="../../assets/img/WechatIMG6.jpeg" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style lang="less" scoped>
.detail-wrap {
  img {
    width: 100%;
  }
}
</style>
