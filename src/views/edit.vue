<template>
  <div class="edit-area" :class="isPreviewShow ? 'lock-back' : ''">
    <h1 class="edit-top">
      <router-link to="favorite" class="cancel-text">取消</router-link>
      <mu-button
        color="success"
        :disabled="isUploading"
        small
        @click="publishComment"
        >发表</mu-button
      >
    </h1>
    <mu-text-field
      v-model="value1"
      multi-line
      :rows="3"
      :rows-max="6"
      full-width
      placeholder="写出这一刻的想法..."
    ></mu-text-field>
    <div class="upload-wrap">
      <ul class="upload-list">
        <li v-for="(file, index) in files" :key="file.id" class="upload-area">
          <div class="choose" @click="preview(index)" v-if="file.blob">
            <img ref="preview" :src="file.blob" @load="fixImage(index)" />
          </div>
          <span v-if="chargeProgress(file)" class="progress"
            >{{ Math.floor(file.progress) }}%</span
          >
        </li>
        <li>
          <file-upload
            class="choose"
            name="image"
            :post-action="baseUrl + 'upload/image'"
            extensions="gif,jpg,jpeg,png,webp"
            accept="image/png,image/gif,image/jpeg,image/webp"
            :size="1024 * 1024 * 100"
            multiple
            v-model="files"
            @input-filter="inputFilter"
            @input-file="inputFile"
            ref="upload"
          >
            <div class="add-click">
              <mu-icon value="add" color="#ccc"></mu-icon>
            </div>
          </file-upload>
        </li>
      </ul>
    </div>
    <Preview
      v-if="isPreviewShow"
      :total="files.length"
      :current="chooseIndex"
      :urls="files"
      showDelete
      @delete="deleteImg"
      @hidePreview="isPreviewShow = false"
    ></Preview>
  </div>
</template>

<script>
import Preview from "components/wx-preview.vue";
import { addComment } from "../api";
import { __INTERFACEURL__ } from "../assets/js/constants";

export default {
  components: {
    Preview
  },
  data() {
    return {
      value1: "",
      files: [],
      chooseIndex: 0,
      isPreviewShow: false,
      isUploading: false,
      baseUrl: __INTERFACEURL__
    };
  },
  mounted() {},
  methods: {
    /**
     * Has changed
     * @param  Object|undefined   newFile   只读
     * @param  Object|undefined   oldFile   只读
     * @return undefined
     */
    inputFile(newFile, oldFile) {
      if (newFile && oldFile && !newFile.active && oldFile.active) {
        // 获得相应数据
        console.log("response", newFile.response);
        if (newFile.xhr) {
          //  获得响应状态码
          console.log("status", newFile.xhr.status);
        }
      }

      if (newFile && oldFile) {
        // Update file

        // Start upload
        if (newFile.active !== oldFile.active) {
          console.log("Start upload", newFile.active, newFile);
          this.isUploading = true;
          // max size
          // if (newFile.size >= 100 * 1024) {
          //   newFile = this.$refs.upload.update(newFile, { error: "size" });
          // }
        }

        // Upload progress
        if (newFile.progress !== oldFile.progress) {
          console.log("progress", newFile.progress, newFile);
        }

        // Upload error
        if (newFile.error !== oldFile.error) {
          alert(newFile.error);
          console.log("error", newFile.error, newFile);
        }

        // Uploaded successfully
        if (newFile.success !== oldFile.success) {
          console.log("success", newFile.success, newFile);
          this.isUploading = false;
        }
      }

      if (!newFile && oldFile) {
        // 删除文件

        // 自动删除 服务器上的文件
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/file/delete?id=' + oldFile.response.id,
          // });
        }
      }
      // 自动上传
      if (
        Boolean(newFile) !== Boolean(oldFile) ||
        oldFile.error !== newFile.error
      ) {
        if (!this.$refs.upload.active) {
          this.$refs.upload.active = true;
        }
      }
    },
    /**
     * Pretreatment
     * @param  Object|undefined   newFile   读写
     * @param  Object|undefined   oldFile   只读
     * @param  Function           prevent   阻止回调
     * @return undefined
     */
    inputFilter: (newFile, oldFile, prevent) => {
      if (newFile && !oldFile) {
        // 过滤不是图片后缀的文件
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent();
        }
      }

      // 创建 blob 字段 用于图片预览
      newFile.blob = "";
      let URL = window.URL || window.webkitURL;
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
    },
    deleteImg(val) {
      this.files.splice(val, 1);
    },
    fixImage(index) {
      const el = this.$refs.preview[index];
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (width >= height) {
        el.style.width = "100%";
      } else {
        el.style.height = "100%";
      }
    },
    chargeProgress(file) {
      return file.progress !== undefined && Math.floor(file.progress) !== 100;
    },
    preview(index) {
      this.chooseIndex = index;
      this.isPreviewShow = true;
    },
    publishComment() {
      const data = {
        text: this.value1,
        imageArr: this.files.map(item => item.name)
      };
      addComment(data).then(
        res => {
          console.log(res);
          this.$router.push("/favorite");
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
<style lang="less">
.edit-area {
  padding: 10px;
}
.edit-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  font-weight: normal;
  margin-bottom: 20px;
}
.cancel-text {
  color: #555;
}
.upload-wrap {
  display: flex;
}
.upload-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  li {
    position: relative;
    flex: 0 0 30%;
    margin: 5px;
    padding-top: 30%;
  }
  .file-uploads.choose {
    background: #eee;
  }
}
.file-uploads.choose,
.upload-area .choose {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  cursor: pointer;
  overflow: hidden;
}
.choose img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.add-click i {
  font-size: 32px;
}

.mu-input-line,
.mu-input-focus-line {
  display: none;
}
.progress {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  background: white;
  width: 100%;
  height: 100%;
}
.lock-back {
  height: 100%;
  overflow: hidden;
}
</style>
