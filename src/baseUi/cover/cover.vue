<template>
  <div class="cover" v-show="!isHidden">
    <slot>
      <div class="content">{{ title }}</div>
    </slot>
  </div>
</template>

<script>
import eventbus from "@/eventbus/eventbus.js";
export default {
  data() {
    return {
      isHidden: true,
      title: "",
    };
  },
  mounted() {
    eventbus.$on("changCover", (res) => {
      this.title = res;
      this.isHidden = false;
      setTimeout(() => {
        this.isHidden = true;
      }, 2000);
    });
  },
};
</script>

<style lang="less" scoped>
.cover {
  .content {
    position: fixed;
    left: 50%;
    top: 50%;
    line-height: 22px;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: pink;
    padding: 0 9px;
    color: #fff;
  }
}
</style>
