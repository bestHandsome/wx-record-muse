<template>
  <div class="preview-wrap">
    <transition name="slide-fade">
      <div class="operate-area" v-if="isOperateShow">
        <div class="back" @click="hide">
          <mu-icon value="keyboard_arrow_left"></mu-icon>
        </div>
        <div class="count">{{ currentIndex + 1 }}/{{ total }}</div>
        <div class="delete" @click="deleteImg" v-if="showDelete">
          <mu-icon value="delete"></mu-icon>
        </div>
      </div>
    </transition>
    <div class="img-area">
      <ul ref="scroll-area">
        <li
          class="item"
          v-for="(item, index) in list"
          :key="index"
          v-swipe="scroll"
          v-tap="showBar"
          v-swipe-left="scrollLeft"
          v-swipe-right="scrollRight"
        >
          <img
            :src="typeof item === 'string' ? item : item.blob"
            alt=""
            ref="imgEl"
            @load="fixImage(index)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    current: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    urls: {
      type: Array,
      default() {
        return [];
      }
    },
    showDelete: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndex: this.current,
      list: this.urls,
      isOperateShow: false
    };
  },
  watch: {
    currentIndex(val) {
      const el = this.$refs["scroll-area"];
      el.style.transform = `translateX(-${val * 100}vw)`;
    }
  },
  methods: {
    showBar() {
      this.isOperateShow = !this.isOperateShow;
    },
    deleteImg() {
      console.log(this.currentIndex);
      this.$confirm("确定要删除？", "提示", {
        type: "error"
      }).then(({ result }) => {
        if (result) {
          this.$toast.message("已删除");
          this.$emit("delete", this.currentIndex);
          if (this.list.length === 0) {
            this.$emit("hidePreview");
          } else if (this.currentIndex !== 0) {
            this.currentIndex--;
          }
        } else {
          this.$toast.message("已取消");
        }
      });
    },
    scrollLeft() {
      if (this.currentIndex < this.total - 1) {
        this.currentIndex++;
      }
    },
    scrollRight() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    hide() {
      this.$emit("hidePreview");
    },
    scroll() {
      this.isOperateShow = false;
    },
    scrollDown() {
      this.isOperateShow = false;
    },
    fixImage(index) {
      //使图片自适应屏幕 image load 方法中
      const mediaW = document.body.clientWidth;
      const mediaH = document.body.clientHeight;
      const el = this.$refs.imgEl[index];
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (width < mediaW && height < mediaH) {
        el.style.width = width + "px";
      } else {
        if (mediaW / mediaH <= width / height) {
          el.style.width = mediaW + "px";
        } else {
          el.style.width = height * (width / height) + "px";
        }
      }
    }
  },
  mounted() {
    const el = this.$refs["scroll-area"];
    if (this.total > 1) {
      el.style.transform = `translateX(-${this.currentIndex * 100}vw)`;
    }
  }
};
</script>

<style scoped lang="less">
.img-area {
  width: 100%;
  overflow-x: hidden;
  background: #000000;
}
.operate-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  padding: 0 15px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  z-index: 999;
  .count {
    color: #000;
  }
}
.preview-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 999;
}
.img-area ul {
  width: 3000px;
  transition: all 0.35s linear;
  background: rgba(0, 0, 0, 1);
  height: 100vh;
  overflow: hidden;
  .item {
    float: left;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
