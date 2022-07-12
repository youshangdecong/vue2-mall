<template>
  <div class="recommend" v-if="recommendList.length">
    <div class="item" v-for="item in recommendList" :key="item.title">
      <img v-lazy="item.image" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="less">
.recommend {
  display: flex;

  .item {
    flex: 1;
    text-align: center;
    padding: 10px 0 20px;
    color: #666;

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }
  }
}
</style>
