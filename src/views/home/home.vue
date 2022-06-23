<template>
  <div class="home" ref="homeScrollRef">
    <home-nav></home-nav>
    <home-banner :banners="banners"></home-banner>
    <home-recommend
      class="home-recommend"
      :recommendList="recommendList"
    ></home-recommend>

    <home-popular></home-popular>

    <home-category
      ref="categoryRef"
      @homeCategory="homeCategory"
      :currentGoodslist="currentGoodslist"
    ></home-category>

    <go-top class="go-top" @goTop="goTop" v-show="scrollTop >= 1000"></go-top>
  </div>
</template>

<script>
import homeNav from "./homeChild/homeNav.vue";
import homeBanner from "./homeChild/homeBanner.vue";
import homeRecommend from "./homeChild/homeRecommend.vue";
import homePopular from "./homeChild/homePopular.vue";
import homeCategory from "./homeChild/homeCategory.vue";
import goTop from "@/baseUi/goTop/goTop";

import { getHomeInfo, getNavBarInfo } from "@/network/api/getHomeApi.js";
export default {
  components: {
    homeNav,
    homeBanner,
    homeRecommend,
    homePopular,
    homeCategory,
    goTop,
  },
  data() {
    return {
      banners: [],
      recommendList: [],
      categoryInfo: {},
      type: "pop",
      homeScrollRef: {},
      scrollTop: 0,
    };
  },
  created() {
    console.log("--------");
    //获取轮播图信息和推荐信息
    getHomeInfo().then((res) => {
      const data = res.data;
      this.banners = data.banner.list;
      this.recommendList = data.recommend.list;
    });

    this.requestNavBarInfo("pop", 0);
    this.requestNavBarInfo("new", 0);
    this.requestNavBarInfo("sell", 0);
  },
  mounted() {
    const homeScrollRef = this.$refs.homeScrollRef;
    this.homeScrollRef = homeScrollRef;

    homeScrollRef.onscroll = () => {
      const scrollHeight = homeScrollRef.scrollHeight;
      const scrollTop = homeScrollRef.scrollTop;
      this.scrollTop = scrollTop;
      const homeOffsetHeight = homeScrollRef.offsetHeight;

      if (scrollTop + homeOffsetHeight >= scrollHeight) {
        const page =
          this.categoryInfo[this.type] && this.categoryInfo[this.type].page;
        this.requestNavBarInfo(this.type, page);
      }
    };
  },
  destroyed() {
    window.onscroll = null;
  },
  computed: {
    currentGoodslist() {
      return this.categoryInfo[this.type] && this.categoryInfo[this.type].list;
    },
  },
  methods: {
    requestNavBarInfo(type, page) {
      page++;
      getNavBarInfo(type, page).then((res) => {
        if (!this.categoryInfo[type]) {
          const result = {
            list: res.data.list,
            page,
          };
          this.categoryInfo[type] = result;
          this.categoryInfo = { ...this.categoryInfo };
        } else {
          this.categoryInfo[type].list.push(...res.data.list);
          this.categoryInfo[type].page++;
        }
      });
    },
    goTop() {
      this.homeScrollRef.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    homeCategory(type) {
      this.type = type;
    },
  },
  activated() {
    // 实现返回页面，到滚动的位置
    this.homeScrollRef.scrollTo({
      left: 0,
      top: this.scrollTop,
    });
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = this.homeScrollRef.scrollTop;
    next(true);
  },
};
</script>

<style lang="less" scoped>
.home {
  // padding-bottom: 49px;
  height: calc(100vh - 49px);
  overflow-y: auto;

  .home-recommend {
    border-bottom: 10px solid #eee;
  }
  .go-top {
    right: 10px;
    bottom: 70px;
  }
}
</style>
