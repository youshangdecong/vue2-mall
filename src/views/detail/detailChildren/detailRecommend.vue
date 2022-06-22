<template>
  <div class="detail-recommend">
    <div class="hd">热门推荐</div>
    <div class="content">
      <goods :goodList="recommendlist"></goods>
    </div>
  </div>
</template>

<script>
import goods from "@/components/goods/goods";

export default {
  components: {
    goods,
  },
  props: {
    recommendlist: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less">
.detail-recommend {
  .hd {
    padding: 15px;
    font-size: 16px;
  }
}
</style>
