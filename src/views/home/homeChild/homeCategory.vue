<template>
  <div class="category">
    <category-com
      :currentGoodslist="currentGoodslist"
      :navList="list"
      @homeswitchCategory="homeswitchCategory"
    ></category-com>
  </div>
</template>

<script>
import categoryCom from "@/components/categoryCom/categoryCom";
export default {
  props: {
    currentGoodslist: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    categoryCom,
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
    homeswitchCategory(type) {
      this.$emit("homeCategory", type);
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
