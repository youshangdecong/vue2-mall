<template>
  <div class="app">
    <!-- tabbar -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar";
export default {
  components: {
    tabbar,
  },
};
</script>

<style>
@import url("~@/assets/css/base.css");
</style>
