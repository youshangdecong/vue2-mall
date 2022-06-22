<template>
  <div class="nav">
    <div class="left">
      <slot name="left"><div></div></slot>
    </div>
    <div class="center">
      <slot name="center"><div></div></slot>
    </div>
    <div class="right">
      <slot name="right"><div></div></slot>
    </div>
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
  text-align: center;
  justify-content: space-between;

  .center {
    flex: 1;
  }
}
</style>
