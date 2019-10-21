import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Travel from "./views/travel/";
import Favorite from "./views/favorites";
import Grade from "./views/grade";
import Edit from "./views/edit";
import Layout from "./components/layout";
import Poster from "./views/poster";
Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "favorite",
      children: [
        {
          path: "/home",
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
          path: "/travel",
          name: "travel",
          component: Travel,
          meta: {
            title: "旅行日记"
          }
        },
        {
          path: "/grade",
          name: "grade",
          component: Grade,
          meta: {
            title: ""
          }
        }
      ]
    },
    {
      path: "/travel/:id",
      name: "travel-detail",
      component: () => import("views/travel/travel-detail.vue"),
      meta: {
        title: "测评",
        oauthLogin: true
      }
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
    },
    {
      path: "/poster",
      name: "poster",
      component: Poster
    }
  ]
});
