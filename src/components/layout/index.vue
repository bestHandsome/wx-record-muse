<template>
  <div class="wrap">
    <mu-container>
      <mu-drawer :open.sync="isSidebarShow" :docked="false">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>知识就是力量</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>学会做人</mu-list-item-title>
          </mu-list-item>
          <mu-list-item @click="close" button>
            <mu-list-item-title>Close</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
    </mu-container>
    <Header @showSidebar="showSidebar" />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "./header";
import Footer from "./footer";
export default {
  data() {
    return {
      isSidebarShow: false
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    showSidebar(val) {
      this.isSidebarShow = val;
    },
    close() {
      this.isSidebarShow = false;
    }
  }
};
</script>

<style class="content">
.content {
  height: calc(100vh - 140px);
  margin: 70px 0;
  box-sizing: border-box;
  overflow-y: auto;
}

/*滚动条整体样式*/
.content::-webkit-scrollbar {
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

/*滚动条里面小方块*/
.content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}

/*滚动条里面轨道*/
.content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
