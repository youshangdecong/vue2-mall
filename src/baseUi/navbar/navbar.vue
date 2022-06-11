<template>
  <div class="nav-bar">
    <div
      class="item"
      v-for="(item, index) in list"
      :key="item.name"
      :class="{ active: currentIndex === index }"
      @click="navto(item)"
    >
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    navto(item) {
      const { index, type } = item;
      this.currentIndex = index;
      this.$emit("switchCategory", type);
    },
  },
};
</script>

<style scoped lang="less">
.nav-bar {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;

  span {
    padding: 5px 7px;
    font-size: 16px;
  }

  .active {
    border-bottom: 2px solid #ff0000;
    color: #ff0000;
  }
}
</style>
