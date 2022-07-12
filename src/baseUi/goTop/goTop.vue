<template>
  <div class="go-top" @click="goTop">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  methods: {
    goTop() {
      this.$emit("goTop");
    },
  },
};
</script>

<style scoped lang="less">
.go-top {
  position: fixed;
  z-index: 999;

  img {
    width: 44px;
    height: 44px;
  }
}
</style>
