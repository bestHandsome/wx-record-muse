<template>
  <div class="slider-wrap">
    <swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="slider-item">
        <img
          src="../assets/img/swiper/shouye_nvsheng_washcutblow_two.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slider-item">
        <img
          src="../assets/img/swiper/shouye_nvsheng_washblow_one.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slider-item">
        <img
          src="../assets/img/swiper/shouye_nvsheng_hairperm_three.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slider-item">
        <img
          src="../assets/img/swiper/shouye_nvsheng_hairdye_four.png"
          alt=""
        />
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "1",
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.swiper-wrap {
}
.slider-wrap {
  width: 100%;
  .slider-item {
    width: 80%;
    &:not(.swiper-slide-active) {
      opacity: 0.5;
    }
    img {
      width: 80%;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
