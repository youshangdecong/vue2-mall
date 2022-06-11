<template>
  <div class="home-nav">
    <nav-header class="home-nav-header">
      <template #center>
        <div class="center">购物街</div>
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
};
</script>

<style scoped lang="less">
.home-nav {
  .home-nav-header {
    background-color: var(--color-int);
  }

  .center {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
}
</style>
