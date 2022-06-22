<template>
  <div class="category-left">
    <div class="left">
      <div
        class="item"
        v-for="(item, index) in categoryList"
        :class="{ left_active: currentIndex === index }"
        :key="item.title"
        @click="changIndex(index, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changIndex(index, item) {
      this.currentIndex = index;
      this.$emit("indexChange", { index, item });
    },
  },
};
</script>

<style scoped lang="less">
.category-left {
  .left {
    width: 100px;
    line-height: 45px;
    text-align: center;
    box-sizing: border-box;

    .item.left_active {
      text-indent: -3px;
      color: red;
      border-left: 3px solid #ff2587;
      background-color: #fff;
      font-weight: 700;
    }
    .item {
      height: 45px;
      background-color: rgb(246, 246, 246);
      color: #666;
    }
  }
}
</style>
