<template>
  <div class="wrap">
    <mu-container>
      <mu-drawer :open.sync="isSidebarShow" :docked="false">
        <mu-list>
          <mu-list-item button to="/poster">
            <mu-list-item-title>生成我的个性海报</mu-list-item-title>
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
      isSidebarShow: false,
      isDialogShow: false
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
</style>
