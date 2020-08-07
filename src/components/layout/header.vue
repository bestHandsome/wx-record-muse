<template>
  <mu-appbar class="header">
    <mu-button icon slot="left" @click="showBar">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    {{ title }}
    <mu-button flat slot="right" @click="login">LOGIN</mu-button>
  </mu-appbar>
</template>
<script>
export default {
  data() {
    return {
      title: '标题'
    };
  },
  watch: {
    $route: {
      handler: function(to) {
        this.title = to.meta && to.meta.title ? to.meta.title : '标题';
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    showBar() {
      this.$emit('showSidebar', true);
    },
    login() {}
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
