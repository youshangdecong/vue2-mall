<template>
  <div class="popular">
    <card>
      <template #bd>
        <img src="@/assets/img/home/recommend_bg.jpg" alt="" />
      </template>
    </card>
  </div>
</template>

<script>
import card from "@/baseUi/card/card";
export default {
  components: {
    card,
  },
};
</script>

<style lang="less" scoped>
.popular {
  img {
    width: 100%;
  }
}
</style>
