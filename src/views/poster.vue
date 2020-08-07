<template>
  <div class="canvas-wrap">
    <canvas
      id="canvas"
      width="750"
      height="1200"
      style="border:1px solid #d3d3d3;background:#ffffff;"
    ></canvas>
  </div>
</template>
<script>
import { imageToCanvas } from '../assets/js/utils/makePoster';

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    initCanvas() {
      const el = document.getElementById('canvas');
      imageToCanvas(
        el,
        'http://192.168.40.181:3000/upload/images/img1.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571376863120&di=2b4536fc89745459832fb7f3a639bdda&imgtype=0&src=http%3A%2F%2F7.pic.pc6.com%2Fup%2F2016-12%2F20161213153647219.png',
        'code.png'
      );
    }
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style>
.post-canvas {
  width: 100vw;
  height: 100vh;
}
</style>
