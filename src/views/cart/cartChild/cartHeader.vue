<template>
  <div class="cart-header">
    <nav-header>
      <template #center>
        <div class="center">购物车({{ cartListLength }})</div>
      </template>
    </nav-header>
  </div>
</template>

<script>
import navHeader from "@/components/navHeader/navHeader";
export default {
  components: {
    navHeader,
  },
  computed: {
    cartListLength() {
      return this.$store.state.cart.cartList.length;
    },
  },
};
</script>

<style scoped lang="less">
.cart-header {
  background-color: var(--color-int);

  .center {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
}
</style>
