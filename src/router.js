import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Travel from "./views/travel";
import Favorite from "./views/favorites";
import Edit from "./views/edit";
import Layout from "./components/layout";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "home",
      children: [
        {
          path: "home",
          name: "home",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: Home,
          meta: {
            title: "减肥知识"
          }
        },
        {
          path: "travel",
          name: "travel",
          component: Travel,
          meta: {
            title: "旅行日记"
          }
        }
      ]
    },
    {
      path: "/favorite",
      name: "favorite",
      component: Favorite,
      meta: {
        title: "喜欢"
      }
    },
    {
      path: "/edit",
      name: "edit",
      component: Edit
    }
  ]
});
