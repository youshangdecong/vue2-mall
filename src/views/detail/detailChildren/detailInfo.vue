<template>
  <div class="info">
    <div class="title">
      {{ iteminfo.title }}
    </div>
    <div class="price">
      <span class="m-price">{{ iteminfo.price }}</span>
      <span class="last-price">{{ iteminfo.oldPrice }}</span>
      <span class="discount">7折</span>
    </div>

    <div class="count-info">
      <div class="count-item" v-for="item in iteminfo.columns" :key="item">
        {{ item }}
      </div>
    </div>

    <div class="handle" v-if="iteminfo.services">
      <div
        class="handle-item"
        v-for="item in iteminfo.services.slice(1)"
        :key="item.name"
      >
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iteminfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped lang="less">
.info {
  padding: 10px 5px;

  .title {
    font-size: 16px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.3;
    margin-bottom: 10px;
  }

  .price {
    .m-price {
      font-size: 24px;
      color: #ff5777;
    }
    .last-price {
      color: #999;
      text-decoration: line-through;
      font-size: 13px;
      margin: 0 5px;
    }
    .discount {
      background-color: #ff5777;
      padding: 0 6px;
      height: 18px;
      line-height: 18px;
      border-radius: 7px;
      color: #fff;
      position: relative;
      top: -5px;
      left: 5px;
    }
  }

  .count-info {
    margin-top: 10px;
    color: #999;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid #eee;
  }

  .handle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    color: #333;
    font-size: 13px;

    .handle-item {
      display: flex;
      align-items: center;

      img {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>
