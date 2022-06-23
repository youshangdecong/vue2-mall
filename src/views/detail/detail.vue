<template>
  <div class="detail-goods">
    <detail-nav-bar
      ref="navRef"
      @navBtnIndex="navBtnIndex"
      class="nav-bar"
    ></detail-nav-bar>

    <div class="scroll" ref="scrollRef">
      <detail-swiper ref="goodRef" :topImages="topBennerList"></detail-swiper>
      <detail-info :iteminfo="mainInfo"></detail-info>
      <detail-merchants :merchantsInfo="merchantsInfo"></detail-merchants>
      <detail-show @loadImg="loadImg" :showInfo="showInfo"></detail-show>
      <detail-size-info ref="sizeRef" :sizeInfo="sizeInfo"></detail-size-info>
      <detail-evaluation
        ref="evaluaRef"
        :rateInfo="rateInfo"
      ></detail-evaluation>
      <detail-recommend
        ref="recomRef"
        :recommendlist="recommendlist"
      ></detail-recommend>
    </div>

    <detail-bottom @addGoods="addGoods"></detail-bottom>
    <go-top class="go-top" @goTop="goTop" v-show="scrollTop >= 1000"></go-top>
  </div>
</template>

<script>
import { getDetail, getRecommend } from "@/network/api/getDetailApi.js";
import detailNavBar from "./detailChildren/detailNavBar.vue";
import detailSwiper from "./detailChildren/detailSwiper.vue";
import detailInfo from "./detailChildren/detailInfo.vue";
import detailMerchants from "./detailChildren/detailMerchants.vue";
import detailShow from "./detailChildren/detailShow.vue";
import detailSizeInfo from "./detailChildren/detailSizeInfo.vue";
import detailEvaluation from "./detailChildren/detailEvaluation.vue";
import detailRecommend from "./detailChildren/detailRecommend.vue";
import detailBottom from "./detailChildren/detailBottom.vue";
import goTop from "@/baseUi/goTop/goTop";

export default {
  name: "detail",
  components: {
    detailNavBar, //头部导航
    detailSwiper, //轮播图
    detailInfo, //商品的信息
    detailMerchants, //商家信息
    detailShow, //介绍和图片效果图
    detailSizeInfo, //尺码参数
    detailEvaluation, //评论
    detailRecommend, //推荐模块
    detailBottom, //底部栏
    goTop,
  },
  data() {
    return {
      topBennerList: [],
      mainInfo: {},
      merchantsInfo: {},
      showInfo: {},
      sizeInfo: {},
      rateInfo: {},
      recommendlist: [],
      offsetTopList: [],
      scrollRef: {},
      navIndex: -1,
      iid: "",
      scrollTop: 0,
    };
  },
  created() {
    const iid = this.$route.params.iid;
    this.iid = iid;
    this._getDetail(iid);
    this._getRecomment();
  },
  mounted() {
    const element = this.$refs.scrollRef;
    this.scrollRef = element;

    element.addEventListener("scroll", () => {
      const length = this.offsetTopList.length;
      const scrollTop = element.scrollTop;
      this.scrollTop = scrollTop;
      if (!length) return;
      for (let i = 0; i < length; i++) {
        const offsetTopList = this.offsetTopList;
        //公共函数
        const _exec = () => {
          if (this.navIndex === i) return;
          this.navIndex = i;
          this.$refs.navRef.changeIndex(i);
          return;
        };
        // 如果滑动到了最后一阶段，并且滑动的距离大于等于最后一个值，选中最后一个navitem
        if (i === length - 1 && scrollTop >= offsetTopList[i]) {
          _exec();
        }
        //选择的条件，滑动的距离大于等于数组当前的item，小于下一个item
        if (scrollTop >= offsetTopList[i] && scrollTop < offsetTopList[i + 1]) {
          _exec();
        }
      }
    });
  },
  methods: {
    _getRecomment() {
      getRecommend().then((res) => {
        console.log(res);
        this.recommendlist = res.data.list;
      });
    },
    _getDetail(iid) {
      getDetail(iid).then((res) => {
        const result = res.result;
        console.log(result);
        const itemInfo = result.itemInfo;
        //轮播图数据
        this.topBennerList = itemInfo.topImages;
        //主要信息，轮播图下面的
        this.mainInfo = {
          title: itemInfo.title,
          price: itemInfo.price,
          oldPrice: itemInfo.oldPrice,
          highNowPrice: itemInfo.highNowPrice,
          discountDesc: itemInfo.discountDesc,
          columns: result.columns,
          services: result.shopInfo.services,
        };
        //商家信息
        this.merchantsInfo = result.shopInfo;
        //显示评论图片信息
        this.showInfo = {
          desc: itemInfo.desc,
          detailImage: result.detailInfo.detailImage[0].list,
        };
        //尺寸和参数信息
        this.sizeInfo = result.itemParams;
        // 只有一条的评价信息
        this.rateInfo = result.rate.list && result.rate.list[0];
      });
    },
    loadImg() {
      this.offsetTopList.push(this.$refs.goodRef.$el.offsetTop);
      this.offsetTopList.push(this.$refs.sizeRef.$el.offsetTop);
      this.offsetTopList.push(this.$refs.evaluaRef.$el.offsetTop);
      this.offsetTopList.push(this.$refs.recomRef.$el.offsetTop);
      this.offsetTopList = this.offsetTopList.map((item) => item - 44);
    },
    navBtnIndex(index) {
      this.scrollRef.scrollTo({
        left: 0,
        top: this.offsetTopList[index],
        behavior: "smooth",
      });
    },
    addGoods() {
      const goodsInfo = {
        img: this.topBennerList[0],
        title: this.mainInfo.title,
        desc: this.showInfo.desc,
        price: this.mainInfo.highNowPrice,
        isChecked: true,
        iid: this.iid,
        count: 1,
      };

      this.$store.dispatch("cart/actionAddGoods", goodsInfo);
    },
    goTop() {
      this.scrollRef.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="less">
.detail-goods {
  position: relative;
  z-index: 999;
  background-color: #fff;

  .scroll {
    height: calc(100vh - 44px - 58px);
    overflow-y: auto;
  }
  .go-top {
    right: 10px;
    bottom: 70px;
  }
}
</style>
