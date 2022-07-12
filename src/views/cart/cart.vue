<template>
  <div class="cart">
    <cart-header></cart-header>

    <div class="noCart" v-if="!cartList.length">
      <h4>您没有商品添加购物车, 快去购买把~</h4>
    </div>

    <div class="content" v-else>
      <goods-item
        v-for="item in cartList"
        :key="item.iid"
        :item="item"
      ></goods-item>
      <cart-computed></cart-computed>
    </div>
  </div>
</template>

<script>
import cartHeader from "./cartChild/cartHeader.vue";
import goodsItem from "./cartChild/goodsItem.vue";
import cartComputed from "./cartChild/cartComputed.vue";
export default {
  components: {
    cartHeader,
    goodsItem,
    cartComputed,
  },
  computed: {
    cartList() {
      // console.log(this.$store.state.cart.cartList);
      return this.$store.state.cart.cartList;
    },
  },
};
</script>

<style scoped lang="less">
.cart {
  .content {
    padding-bottom: 93px;
  }

  .noCart {
    height: calc(100vh - 44px - 44px - 49px);
    display: flex;
    justify-content: center;
    color: #666;
    align-items: center;
  }
}
</style>
