<template>
  <mu-paper>
    <div class="menu-header">
      <mu-icon value="keyboard_arrow_left" @click="back"></mu-icon>
    </div>
    <div class="bg-area"></div>
    <div class="comment-area">
      <div v-for="(item, i) in list" :key="i" class="comment-item">
        <div class="avatar">
          <img src="../assets/img/avatar2.eff5aba4.jpg" />
        </div>
        <div class="content-area">
          <p class="author">小飞</p>
          <p class="text">
            {{ item.text }}
          </p>
          <div class="pic-area">
            <div
              v-for="(url, index) in item.imageArr"
              :key="index"
              class="pic-item"
              @click="preview(item.imageArr, index)"
            >
              <img
                :ref="`faView-${i}-${index}`"
                :src="url"
                @load="fixImage(`faView-${i}-${index}`)"
                alt=""
              />
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
    <Preview
      v-if="isPreviewShow"
      :total="files.length"
      :current="chooseIndex"
      :urls="files"
      @hidePreview="isPreviewShow = false"
    ></Preview>
  </mu-paper>
</template>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button {
    margin: 8px;
  }
}
</style>
<script>
import { getCommentList } from "../api";
const urlPrefix = "http://192.168.40.181:3000/upload/images/";
import Preview from "components/wx-preview.vue";
export default {
  components: {
    Preview
  },
  data() {
    return {
      list: [],
      chooseIndex: 0,
      isPreviewShow: false,
      files: []
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    getComments() {
      return new Promise((resolve, reject) => {
        getCommentList()
          .then(data => {
            resolve(data);
          })
          .catch(err => {
            alert(err);
            reject(err);
          });
      });
    },
    preview(arr, index) {
      this.files = arr;
      this.chooseIndex = index;
      this.isPreviewShow = true;
    },
    initData() {
      this.getComments().then(res => {
        this.list = res;
        this.list.forEach(item => {
          item.imageArr = item.imageArr.map(item => urlPrefix + item);
        });
      });
    },
    fixImage(refKey) {
      const el = this.$refs[refKey][0];
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (width >= height) {
        el.style.width = "100%";
      } else {
        el.style.height = "100%";
      }
    }
  },
  mounted() {
    this.initData();
  }
};
</script>

<style scoped lang="less">
.menu-header {
  background: #333;
  padding: 5px 8px;
  text-align: left;
  i {
    color: #fff;
    font-size: 24px;
  }
}
.bg-area {
  margin-bottom: 15px;
  width: 100%;
  height: 200px;
  background: url("../assets/img/bg-comment.jpg") center no-repeat;
  background-size: 100%;
}
.comment-area {
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
  .comment-item {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 16px;
    border-bottom: 1px solid #ddd;
    .content-area {
      flex: 1;
      margin-left: 10px;
      .author {
        color: chocolate;
      }
      p {
        text-align: left;
        margin-bottom: 10px;
      }
      & p.text {
        margin-bottom: 15px;
      }
    }
  }
}
.avatar {
  display: inline-block;
  flex: 0 0 40px;
  height: 40px;
  font-size: 20px;
  color: #fff;
  background-color: #bdbdbd;
  text-align: center;
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
  }
}
.pic-area {
  display: flex;
  flex-wrap: wrap;
  .pic-item {
    flex: 0 0 30%;
    position: relative;
    padding-top: 30%;
    margin: 5px;
    img {
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
}
</style>
