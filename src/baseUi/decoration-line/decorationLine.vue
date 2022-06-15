<template>
  <div class="decoration-line" :style="lineStyle">
    <div class="item left" v-if="lineType === 'left'"></div>
    <div class="item right" v-else></div>
  </div>
</template>

<script>
export default {
  props: {
    lineType: {
      type: String,
      default: "left",
    },
    lineWidth: {
      type: Number,
      default: 90,
    },
    lineHeight: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    lineStyle() {
      return {
        width: `${this.lineWidth}px`,
        height: `${this.lineHeight}px`,
      };
    },
  },
};
</script>

<style scoped lang="less">
.decoration-line {
  border-bottom: 1px solid #333;
  position: relative;
  margin-bottom: 10px;

  .item {
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 5px;
    background-color: #000;
  }
}
.decoration-line .left {
  left: 0;
}

.decoration-line .right {
  right: 0;
}
</style>
