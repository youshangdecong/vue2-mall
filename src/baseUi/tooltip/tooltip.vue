<template>
  <div class="tooltip" @mouseenter="showTooltip" @mouseleave="hiddenTooltip">
    <div class="tooltip-box" v-show="isShow">
      {{ title }}
    </div>
    <slot></slot>
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
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showTooltip() {
      this.isShow = true;
    },
    hiddenTooltip() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped lang="less">
.tooltip {
  position: relative;
  width: 100%;

  .tooltip-box {
    border-radius: 5px;
    position: absolute;
    z-index: 666;
    top: 0;
    left: 0;
    background-color: pink;
    color: #000;
  }
}
</style>
