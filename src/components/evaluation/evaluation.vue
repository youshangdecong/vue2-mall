<template>
  <div class="evaluation-item">
    <div class="user">
      <img src="" alt="" />
      <span>橙子妈妈DDDD</span>
    </div>

    <p>质量挺好，款式好看，喜欢，合身！</p>
    <div class="about-info">
      <span>2018</span>
      <span>颜色 7222白色</span>
      <span>尺码 m</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped lang="less"></style>
