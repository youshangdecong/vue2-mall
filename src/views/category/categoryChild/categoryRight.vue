<template>
  <div class="category-right">
    <div class="right">
      <div class="category-info">
        <div class="item" v-for="item in currentResultList" :key="item.acm">
          <img :src="item.image" alt="" />
          <span>{{ item.title }}</span>
        </div>
      </div>

      <category-com
        :currentGoodslist="currentGoodslist"
        :navList="navList"
        @homeswitchCategory="homeswitchCategory"
      ></category-com>
    </div>
  </div>
</template>

<script>
import categoryCom from "@/components/categoryCom/categoryCom";

export default {
  components: {
    categoryCom,
  },
  props: {
    currentResultList: {
      type: Array,
      default: () => [],
    },
    currentGoodslist: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      navList: [
        { name: "综合", type: "pop" },
        { name: "新品", type: "new" },
        { name: "销量", type: "sell" },
      ],
    };
  },
  methods: {
    homeswitchCategory(type) {
      this.$emit("changeCategory", type);
    },
  },
};
</script>

<style lang="less" scoped>
.category-right {
  flex: 1;
  color: #666;
  font-size: 13px;

  .right {
    padding: 10px;

    .category-info {
      display: flex;
      flex-wrap: wrap;
    }

    .item {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;

      img {
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
