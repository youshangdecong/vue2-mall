<template>
  <div class="merchants">
    <div class="hd">
      <img class="hd-logo" :src="merchantsInfo.shopLogo" alt="" />
      <div class="name">{{ merchantsInfo.name }}</div>
    </div>

    <div class="content">
      <div class="left">
        <div class="left-item">
          <div class="count">{{ formatCount(merchantsInfo.cSells) }}</div>
          <div class="name">总销量</div>
        </div>
        <div class="left-item">
          <div class="count">{{ merchantsInfo.cGoods }}</div>
          <div class="name">总收藏</div>
        </div>
      </div>

      <div class="right">
        <div class="item" v-for="item in merchantsInfo.score" :key="item.name">
          <span class="item-name">{{ item.name }}</span>
          <span
            :style="{ color: item.isBetter ? 'red' : 'yellowGreen' }"
            class="score"
            >{{ item.score }}</span
          >
          <span
            :style="{ backgroundColor: item.isBetter ? 'red' : 'yellowGreen' }"
            class="isBetter"
            >{{ item.isBetter ? "高" : "低" }}</span
          >
        </div>
      </div>
    </div>

    <div class="go-home">进店逛逛</div>
  </div>
</template>

<script>
import { formatCount } from "@/utils/format.js";
export default {
  props: {
    merchantsInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatCount,
  },
};
</script>

<style scoped lang="less">
.merchants {
  border-top: 5px solid #f2f5f8;
  border-bottom: 5px solid #f2f5f8;

  .hd {
    padding: 20px 0;
    display: flex;
    align-items: center;

    .hd-logo {
      width: 45px;
      height: 45px;
      background-color: pink;
      border-radius: 50%;
      margin: 0 4vw;
    }

    .name {
      font-size: 16px;
      color: #666;
    }
  }

  .content {
    display: flex;
    align-items: center;

    .left,
    .right {
      flex: 1;
    }

    .left {
      display: flex;
      justify-content: space-around;
      border-right: 1px solid #ccc;

      .count {
        margin-bottom: 5px;
        font-size: 18px;
      }
    }

    .right {
      margin-left: 20px;

      .item {
        margin: 8px 0;
      }
      span {
        margin: 0 7px;
      }
      .score {
        display: inline-block;
        width: 28px;
      }
      .isBetter {
        color: #fff;
        padding: 0 2px;
      }
    }
  }
  .go-home {
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #666;
    background-color: #f2f5f8;
    border-radius: 10px;
    margin: 20px auto;
  }
}
</style>
