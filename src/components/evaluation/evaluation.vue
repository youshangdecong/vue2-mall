<template>
  <div class="evaluation-item">
    <div class="user" v-if="item.user">
      <img :src="item.user.avatar" alt="" />
      <span> {{ item.user.uname }}</span>
    </div>

    <p>{{ item.content }}</p>
    <div class="about-info">
      <span class="timer" v-format>{{ item.created }}</span>
      <span>{{ item.style }}</span>
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

<style scoped lang="less">
.evaluation-item {
  padding: 20px;

  .user {
    display: flex;
    align-items: center;

    img {
      width: 42px;
      height: 42px;
    }
    span {
      font-size: 15px;
      color: #333;
      margin-left: 13px;
    }
  }

  p {
    color: #777;
    margin: 10px 0;
  }

  .about-info {
    color: #999;
    font-size: 12px;
  }
  .timer {
    margin-right: 10px;
  }
}
</style>
