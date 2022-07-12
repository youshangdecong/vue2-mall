<template>
  <div class="tabbar">
    <div
      class="item"
      @click="btn('/home')"
      :class="{ active: routePath === '/home' }"
    >
      <img
        v-if="routePath === '/home'"
        src="@/assets/img/tabbar/home_active.svg"
        alt=""
      />
      <img v-else src="@/assets/img/tabbar/home.svg" alt="" />
      <span>首页</span>
    </div>
    <div
      class="item"
      @click="btn('/category')"
      :class="{ active: routePath === '/category' }"
    >
      <img
        v-if="routePath === '/category'"
        src="@/assets/img/tabbar/category_active.svg"
        alt=""
      />
      <img v-else src="@/assets/img/tabbar/category.svg" alt="" />
      <span>分类</span>
    </div>
    <div
      class="item"
      @click="btn('/cart')"
      :class="{ active: routePath === '/cart' }"
    >
      <img
        v-if="routePath === '/cart'"
        src="@/assets/img/tabbar/cart_active.svg"
        alt=""
      />
      <img v-else src="@/assets/img/tabbar/cart.svg" alt="" />
      <span>购物车</span>
    </div>
    <div
      class="item"
      @click="btn('/profile')"
      :class="{ active: routePath === '/profile' }"
    >
      <img
        v-if="routePath === '/profile'"
        src="@/assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <img v-else src="@/assets/img/tabbar/profile.svg" alt="" />
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btn(path) {
      // 重复点击路由直接返回
      if (this.$route.path === path) return;
      this.$router.push(path);
    },
  },
  computed: {
    routePath() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped lang="less">
.active {
  color: #ff0000;
}

.tabbar {
  height: 49px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #f6f6f6;

  display: flex;
  justify-content: space-around;

  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background-color: #f6f6f6;

    img {
      width: 24px;
      height: 24px;
      margin-bottom: 3px;
    }
  }
}
</style>
