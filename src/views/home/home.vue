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
  </div>
</template>

<script>
import homeNav from "./homeChild/homeNav.vue";
import homeBanner from "./homeChild/homeBanner.vue";
import homeRecommend from "./homeChild/homeRecommend.vue";
import homePopular from "./homeChild/homePopular.vue";
import homeCategory from "./homeChild/homeCategory.vue";

import { getHomeInfo, getNavBarInfo } from "@/network/api/getHomeApi.js";
export default {
  components: {
    homeNav,
    homeBanner,
    homeRecommend,
    homePopular,
    homeCategory,
  },
  data() {
    return {
      banners: [],
      recommendList: [],
      categoryInfo: {},
      type: "pop",
    };
  },
  created() {
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

    homeScrollRef.onscroll = () => {
      const scrollHeight = homeScrollRef.scrollHeight;
      const scrollTop = homeScrollRef.scrollTop;

      const homeOffsetHeight = homeScrollRef.offsetHeight;

      if (scrollTop + homeOffsetHeight === scrollHeight) {
        const page =
          this.categoryInfo[this.type] && this.categoryInfo[this.type].page;
        this.requestNavBarInfo(this.type, page);
      }

      //scrollTop是滚动条滚动时，距离顶部的距离
      // var scrollTop =
      //   document.documentElement.scrollTop || document.body.scrollTop;

      // //windowHeight是可视区的高度
      // var windowHeight =
      //   document.documentElement.clientHeight || document.body.clientHeight;
      // //scrollHeight是滚动条的总高度
      // var scrollHeight =
      //   document.documentElement.scrollHeight || document.body.scrollHeight;
      // //滚动条到底部的条件
      // if (scrollTop + windowHeight == scrollHeight) {
      //   this.lastType = this.type;
      //   //到了这个就可以进行业务逻辑加载后台数据了
      //   const page =
      //     this.categoryInfo[this.type] && this.categoryInfo[this.type].page;
      //   this.requestNavBarInfo(this.type, page);
      //   // window.onscroll = '' 用于解除绑定
      // }
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

    homeCategory(type) {
      this.type = type;
    },
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
}
</style>
