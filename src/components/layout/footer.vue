<template>
  <div class="footer">
    <mu-bottom-nav :value="activeName">
      <mu-bottom-nav-item
        to="home"
        value="home"
        icon="home"
      ></mu-bottom-nav-item>
      <mu-bottom-nav-item
        to="favorite"
        value="favorite"
        icon="favorite"
      ></mu-bottom-nav-item>
      <mu-bottom-nav-item
        class="camera"
        to="edit"
        icon="camera_alt"
      ></mu-bottom-nav-item>
      <mu-bottom-nav-item
        to="grade"
        value="grade"
        icon="grade"
      ></mu-bottom-nav-item>
      <mu-bottom-nav-item
        to="travel"
        value="travel"
        icon="location_on"
      ></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "home"
    };
  },
  watch: {
    $route(to) {
      this.activeName = to.name;
    }
  },
  mounted() {
    this.activeName = this.$route.name;
  }
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 56px;
}
.footer .mu-bottom-item-wrapper {
  display: flex;
}
.footer .mu-bottom-item-active {
  color: lightcoral;
}
.camera i {
  font-size: 32px;
  color: #35bfed;
}
</style>
