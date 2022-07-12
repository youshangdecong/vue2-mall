<template>
  <div class="nav-header">
    <nav-header class="category-nav-header">
      <template #center>
        <div class="center">商品分类</div>
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
.nav-header {
  .category-nav-header {
    background-color: var(--color-int);
  }

  .center {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
}
</style>
