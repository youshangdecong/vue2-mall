<template>
  <div class="cart-computed">
    <div class="allSelect">
      <img
        :class="{ active: isAllSeleect }"
        src="@/assets/img/cart/tick.svg"
        @click="changeAllSelect"
        alt=""
      />
      <span>全选</span>
      <div class="sum-price">
        合计 <span>￥{{ resultPrice }}</span>
      </div>
    </div>

    <div class="pay">去计算(2)</div>
  </div>
</template>

<script>
export default {
  computed: {
    resultPrice() {
      return this.$store.getters["cart/resultPrice"];
    },
    isAllSeleect() {
      return this.$store.getters["cart/isAllSeleect"];
    },
  },
  methods: {
    changeAllSelect() {
      this.$store.commit("cart/changeAllSelect");
    },
  },
};
</script>

<style scoped lang="less">
.cart-computed {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 44px;
  line-height: 44px;
  background-color: rgba(238, 238, 238);
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666;

  .allSelect {
    display: flex;
    align-items: center;

    img {
      margin: 0 7px 0 10px;
      border-radius: 50%;
      border: 2px solid #ccc;
    }
  }

  .sum-price {
    font-size: 16px;
    margin-left: 20px;
  }

  .pay {
    width: 100px;
    background-color: rgba(255, 69, 0);
    text-align: center;
    color: #fff;
  }
}

.active {
  border: 2px solid transparent;
  background-color: var(--color-int);
}
</style>
