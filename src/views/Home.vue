<template>
  <div class="home">
    <mu-container>
      <mu-flex justify-content="center">
        <mu-paper :z-depth="1">
          <mu-grid-list class="gridlist-demo">
            <mu-grid-tile v-for="(tile, index) in list" :key="index">
              <img :src="tile.image" />
              <span slot="title">{{ tile.title }}</span>
              <span slot="subTitle"
                >by <b>{{ tile.author }}</b>
              </span>
              <mu-button slot="action" icon>
                <mu-icon value="star_border"></mu-icon>
              </mu-button>
            </mu-grid-tile>
          </mu-grid-list>
        </mu-paper>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
import lemon from "assets/img/food/柠檬.jpeg";
import pear from "assets/img/food/梨.jpeg";
import orange from "assets/img/food/橙子.jpeg";
import flower from "assets/img/food/西兰花.jpeg";
import dong from "assets/img/food/冬瓜.jpeg";
import milk from "assets/img/food/酸奶.jpeg";
export default {
  data() {
    return {
      list: [
        {
          image: lemon,
          title: "柠檬",
          author: "Myron"
        },
        {
          image: flower,
          title: "西兰花",
          author: "kakali"
        },
        {
          image: orange,
          title: "橙子",
          author: "ruolin"
        },
        {
          image: dong,
          title: "冬瓜",
          author: "yuyang"
        },
        {
          image: pear,
          title: "梨",
          author: "Linyu"
        },
        {
          image: milk,
          title: "低脂酸奶",
          author: "mokayi"
        },
        {
          image: dong,
          title: "冬瓜",
          author: "yuyang"
        },
        {
          image: pear,
          title: "梨",
          author: "Linyu"
        }
      ]
    };
  }
};
</script>
