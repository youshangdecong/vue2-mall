<template>
  <div class="category">
    <navbar
      class="home-navbar"
      :class="{ isFiexd: isFiexd }"
      @switchCategory="switchCategory"
      :list="list"
    ></navbar>
    <goods :goodList="currentGoodslis"></goods>
  </div>
</template>

<script>
import navbar from "@/baseUi/navbar/navbar";
import goods from "@/components/goods/goods";
export default {
  props: {
    currentGoodslis: {
      type: Array,
      default: () => [],
    },
    isFiexd: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    navbar,
    goods,
  },
  data() {
    return {
      list: [
        { name: "流行", type: "pop" },
        { name: "新歌", type: "new" },
        { name: "精选", type: "sell" },
      ],
    };
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
