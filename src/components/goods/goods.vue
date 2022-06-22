<template>
  <div class="goods">
    <div
      class="item"
      v-for="item in goodList"
      :key="item.id"
      @click="goDetailPage(item.iid)"
    >
      <img :src="item.img || item.image || item.show.img" alt="" />
      <p class="title">{{ item.title }}</p>
      <div class="count">
        <span class="price">￥{{ item.price }}</span>
        <span class="collection"> {{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goDetailPage(iid) {
      if (iid) {
        this.$router.push(`/detail/${iid}`);
      }
    },
  },
};
</script>

<style scoped lang="less">
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 3px;
  color: #666;

  .item {
    width: 48%;
    margin-bottom: 10px;

    a {
      display: block;
    }

    img {
      width: 100%;
      border-radius: 5px;
    }

    .title {
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }

    .count {
      display: flex;
      justify-content: center;
      font-size: 12px;

      span {
        margin: 5px;
      }
      .collection {
        &::before {
          content: "";
          position: relative;
          display: inline-block;
          width: 14px;
          height: 14px;
          background: url("~@/assets/img/common/collect.svg");
          background-size: 14px 14px;
          vertical-align: middle;
          top: -2px;
          left: 2px;
        }
      }
    }
  }
}
</style>
