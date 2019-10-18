import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "assets/js/utils/touch";
import "muse-ui/dist/muse-ui.css";
import "muse-ui-message/dist/muse-ui-message.css";
import "muse-ui-loading/dist/muse-ui-loading.css";
import "assets/css/reset.css";
const VueUploadComponent = require("vue-upload-component");
import "swiper/dist/css/swiper.css";

Vue.component("file-upload", VueUploadComponent);
import MuseUI from "muse-ui";
Vue.use(MuseUI);
import Message from "muse-ui-message";
Vue.use(Message);
import Toast from "muse-ui-toast";
Vue.use(Toast);
import Loading from "muse-ui-loading";
Vue.use(Loading);
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
