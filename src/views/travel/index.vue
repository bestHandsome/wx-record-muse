<template>
  <div class="wrap-travel">
    <swiper>
      <swiper-slide v-for="(item, index) in 2" :key="index">
        <img @click.prevent="goDetail(item)" :src="list[index]" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      list: [
        require("assets/img/1571197338278.jpg"),
        require("assets/img/1571197338278.jpg")
      ]
    };
  },
  mounted() {},
  methods: {
    goDetail(id) {
      this.$router.push(`/travel/${id}`);
    }
  }
};
</script>

<style scoped lang="less">
@keyframes scroll {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0px);
  }
}
.wrap-travel {
  position: relative;
  width: 100%;
  height: 100%;
  .swiper-container {
    height: 100%;
    img {
      width: 100%;
    }
  }
}
.scroll-icon {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 99;
  i {
    color: #fff;
    font-weight: normal;
    font-size: 76px;
    transform: translateY(0);
    animation: scroll 0.5s infinite alternate-reverse;
  }
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
