<template>
  <div class="bottom">
    <div class="service">
      <div class="item">
        <i></i>
        <span>客服</span>
      </div>
      <div class="item">
        <i></i>
        <span>店铺</span>
      </div>
      <div class="item">
        <i></i>
        <span>收藏</span>
      </div>
    </div>

    <div class="shop shopcart" @click="addCart">加入购物车</div>
    <div class="shop buy">购买</div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$cover("已经加入购物车了哦~");
      this.$emit("addGoods");
    },
  },
};
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 58px;
  // position: fixed;
  // bottom: 0;
  // left: 0;
  display: flex;
  background-color: #fff;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);

  .service {
    display: flex;
    flex: 1;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        color: #666;
        font-size: 13px;
        margin-top: 3px;
      }

      i {
        width: 22px;
        height: 22px;
        background: url("~@/assets/img/detail/detail_bottom.png") no-repeat;
        background-size: 100%;
      }
      &:nth-child(1) i {
        background-position: 0 -53px;
      }
      &:nth-child(2) i {
        background-position: 0 -100px;
      }
      &:nth-child(3)i {
        background-position: 0 0;
      }
    }
  }

  .shop {
    width: 94px;
    line-height: 58px;
    text-align: center;
    font-size: 15px;
  }
  .shopcart {
    background-color: #ffe817;
  }
  .buy {
    background-color: #ff6699;
    color: #fff;
  }
}
</style>
