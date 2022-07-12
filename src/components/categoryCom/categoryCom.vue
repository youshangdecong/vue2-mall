<template>
  <div class="category">
    <navbar
      class="home-navbar"
      @switchCategory="switchCategory"
      :list="navList"
    ></navbar>
    <goods :goodList="currentGoodslist"></goods>
  </div>
</template>

<script>
import navbar from "@/baseUi/navbar/navbar";
import goods from "@/components/goods/goods";
export default {
  props: {
    currentGoodslist: {
      type: Array,
      default: () => [],
    },
    navList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    navbar,
    goods,
  },
  methods: {
    switchCategory(type) {
      this.$emit("homeswitchCategory", type);
    },
  },
};
</script>

<style scoped lang="less">
.home-navbar {
  background-color: #fff;
  z-index: 2;
  position: sticky;
  top: 0;
}
</style>
