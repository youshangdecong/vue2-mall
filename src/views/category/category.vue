<template>
  <div class="category">
    <categoryNav></categoryNav>

    <div class="content">
      <category-left
        :categoryList="categoryList"
        class="heiddenScroll"
        @indexChange="indexChange"
      ></category-left>
      <category-right
        :currentResultList="currentResultList"
        :currentGoodslist="currentCategorryList"
        class="heiddenScroll"
        @changeCategory="changeCategory"
      ></category-right>
    </div>
  </div>
</template>

<script>
import categoryNav from "./categoryChild/categoryNav.vue";
import categoryLeft from "./categoryChild/categoryLeft.vue";
import categoryRight from "./categoryChild/categoryRight.vue";
const typeArr = ["pop", "new", "sell"];
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "@/network/api/getCategoryApi.js";
export default {
  components: {
    categoryNav,
    categoryLeft,
    categoryRight,
  },
  data() {
    return {
      categoryList: [],
      resultInfo: {},
      currentIndex: 0,
      type: typeArr[0],
    };
  },
  created() {
    getCategory().then((res) => {
      this.categoryList = res.data.category.list;
      // 默认加载第一条的数据
      const { maitKey, miniWallkey } = this.categoryList[0];
      this._getSubcategory(maitKey, miniWallkey, 0);
    });
  },
  methods: {
    changeCategory(type) {
      console.log(type);
      this.type = type;
    },
    indexChange(params) {
      const { item, index } = params;
      this.currentIndex = index;
      // 没有数据才会发起请求，有数据是不会再次发送请求
      if (index in this.resultInfo) return;

      const { maitKey, miniWallkey } = item;
      console.log(miniWallkey);
      this._getSubcategory(maitKey, miniWallkey, index);
    },
    async _getSubcategory(maitKey, miniWallkey, index) {
      const goodsRes = await getSubcategory(maitKey);
      const categoryPromses = [
        getCategoryDetail(miniWallkey, "pop"),
        getCategoryDetail(miniWallkey, "new"),
        getCategoryDetail(miniWallkey, "sell"),
      ];
      const gooodsCategorryList = await Promise.all(categoryPromses);
      const result = {
        list: goodsRes.data.list,
        isFirst: true,
        categoryDetailInfo: {
          pop: gooodsCategorryList[0],
          new: gooodsCategorryList[1],
          sell: gooodsCategorryList[2],
        },
      };
      this.resultInfo[index] = result;
      this.resultInfo = { ...this.resultInfo };
    },
  },
  computed: {
    currentResultList() {
      return (
        this.resultInfo[this.currentIndex] &&
        this.resultInfo[this.currentIndex].list
      );
    },
    currentCategorryList() {
      return (
        this.resultInfo[this.currentIndex] &&
        this.resultInfo[this.currentIndex].categoryDetailInfo &&
        this.resultInfo[this.currentIndex].categoryDetailInfo[this.type]
      );
    },
  },
};
</script>

<style lang="less" scoped>
.category {
  .content {
    display: flex;
    height: calc(100vh - 49px - 44px);
  }

  .heiddenScroll::-webkit-scrollbar {
    display: none;
  }
  .heiddenScroll {
    overflow-y: auto;
  }
}
</style>
