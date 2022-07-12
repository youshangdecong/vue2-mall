<template>
  <div class="goods-item">
    <div class="check" @click="changSelect">
      <img
        :class="{ active: item.isChecked }"
        src="@/assets/img/cart/tick.svg"
        alt=""
      />
    </div>
    <div class="content">
      <img :src="item.img" alt="" />
      <div class="info">
        <h4 class="overflowEli">
          {{ item.title }}
        </h4>
        <p class="overflowEli">
          {{ item.desc }}
        </p>
        <div class="price">
          <span class="price-new">￥{{ item.price }}</span>
          <div class="handle">
            <button @click="addCount">+</button>
            <span class="count">x{{ item.count }}</span>
            <button @click="subCount">-</button>
          </div>
        </div>
      </div>
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
  methods: {
    changSelect() {
      this.$store.commit("cart/changSelect", this.item.iid);
    },
    addCount() {
      this.$store.commit("cart/handleCount", {
        iid: this.item.iid,
        type: "add",
      });
    },
    subCount() {
      this.$store.commit("cart/handleCount", {
        iid: this.item.iid,
        type: "sub",
      });
    },
  },
};
</script>

<style scoped lang="less">
.goods-item {
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);

  .check {
    padding: 0 6px;
    img {
      border-radius: 50%;
      border: 2px solid #ccc;
    }
    .active {
      background-color: var(--color-int);
      border: 2px solid transparent;
    }
  }
  .content {
    padding: 10px 0;
    overflow: hidden;

    display: flex;
    img {
      width: 80px;
      height: 100px;
      flex-shrink: 0;
      border-radius: 6px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      padding: 0 10px;
      overflow: hidden;
      h4 {
        font-size: 17px;
        font-weight: 400;
        width: 100%;
      }

      p {
        color: #666;
        width: 100%;
      }

      .price {
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        font-size: 17px;

        .price-new {
          color: #ff4500;
        }
        .count {
          color: #333;
          width: 40px;
          text-align: center;
        }

        .handle {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
