<template>
  <div class="app">
    <!-- tabbar -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar v-show="!isDetail"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar";
export default {
  components: {
    tabbar,
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
</style>
