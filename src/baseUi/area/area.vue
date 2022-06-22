<template>
  <div class="area">
    <div class="left">
      用户评价
      <!-- {{ title }} -->
    </div>
    <div class="right">
      <slot>
        <a class="more" href="#">更多</a>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="less">
.area {
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;

  .left {
    font-size: 15px;
  }

  .more {
    display: block;

    &::after {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-top: 1px solid #666;
      border-right: 1px solid #666;
      transform: rotate(45deg);
      margin: 0 6px;
    }
  }
}
</style>
