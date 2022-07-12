<template>
  <div class="app">
    <!-- tabbar -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar v-show="!isDetail"></tabbar>

    <cover></cover>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar";
import cover from "@/baseUi/cover/cover";
export default {
  components: {
    tabbar,
    cover,
  },
  computed: {
    isDetail() {
      console.log(this.$route.path.includes("/detail"));
      return this.$route.path.includes("/detail");
    },
  },
};
</script>

<style>
@import url("~@/assets/css/base.css");
@import url("~@/assets/css/iconfont.css");
</style>
