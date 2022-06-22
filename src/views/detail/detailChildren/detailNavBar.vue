<template>
  <div class="detail-navbar">
    <nav-header>
      <template #left>
        <div class="left" @click="backBtn">
          <img src="@/assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template #center>
        <div class="center">
          <div
            class="item"
            v-for="(item, index) in ['商品', '参数', '评论', '推荐']"
            :key="item"
            @click="navBtn(index)"
            :class="{ active: currentIndex === index }"
          >
            {{ item }}
          </div>
        </div>
      </template>
      <template #right>
        <div class="right"></div>
      </template>
    </nav-header>
  </div>
</template>

<script>
import navHeader from "@/components/navHeader/navHeader";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {
    navHeader,
  },
  methods: {
    backBtn() {
      this.$router.back();
    },
    navBtn(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
      this.$emit("navBtnIndex", index);
    },
    changeIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.active {
  border-bottom: 1px solid red;
  color: red;
}

.detail-navbar {
  color: #666;

  .center {
    display: flex;
    justify-content: center;

    .item {
      margin: 0 14px;
    }
  }

  .right,
  .left {
    width: 60px;
  }

  .left {
    img {
      margin-left: 18px;
    }
  }
}
</style>
