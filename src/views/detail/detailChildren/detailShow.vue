<template>
  <div class="show">
    <div class="comments">
      <div class="comments-hd">
        <decoration-line></decoration-line>
        <div class="desc">{{ showInfo.desc }}</div>

        <div class="line-right">
          <decoration-line lineType="right"></decoration-line>
        </div>
      </div>

      <div class="comments-imgs">
        <div class="item-img" v-for="item in showInfo.detailImage" :key="item">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import decorationLine from "@/baseUi/decoration-line/decorationLine.vue";
export default {
  components: {
    decorationLine,
  },
  props: {
    showInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped lang="less">
.show {
  padding: 0 12px;

  .comments {
    padding: 20px 0;

    .line-right {
      display: flex;
      justify-content: flex-end;
    }

    .desc {
      padding-top: 10px;
    }

    .comments-imgs {
      .item-img {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
