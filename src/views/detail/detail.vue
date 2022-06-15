<template>
  <div class="detail-goods">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topBennerList"></detail-swiper>
    <detail-info :iteminfo="mainInfo"></detail-info>
    <detail-merchants :merchantsInfo="merchantsInfo"></detail-merchants>
    <detail-show :showInfo="showInfo"></detail-show>
    <detail-size-info :sizeInfo="sizeInfo"></detail-size-info>
  </div>
</template>

<script>
import { getDetail } from "@/network/api/getDetailApi.js";
import detailNavBar from "./detailChildren/detailNavBar.vue";
import detailSwiper from "./detailChildren/detailSwiper.vue";
import detailInfo from "./detailChildren/detailInfo.vue";
import detailMerchants from "./detailChildren/detailMerchants.vue";
import detailShow from "./detailChildren/detailShow.vue";
import detailSizeInfo from "./detailChildren/detailSizeInfo.vue";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailInfo,
    detailMerchants,
    detailShow,
    detailSizeInfo,
  },
  data() {
    return {
      topBennerList: [],
      mainInfo: {},
      merchantsInfo: {},
      showInfo: {},
      sizeInfo: {},
    };
  },
  created() {
    const iid = this.$route.params.iid;
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
    });
  },
};
</script>

<style scoped lang="less">
.detail-goods {
  height: 2000px;

  position: relative;
  z-index: 999;
  background-color: #fff;
}
</style>
