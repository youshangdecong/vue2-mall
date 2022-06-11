<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  height: 44px;
  align-items: center;

  .center {
    flex: 1;
  }
}
</style>
