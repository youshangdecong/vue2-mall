<template>
  <div class="profile">
    <nav-header class="nav-header">
      <template #center>
        <div class="center">我的商城</div>
      </template>
    </nav-header>

    <profile-login></profile-login>

    <div class="account">
      <div class="item">
        <div class="num"><span>0.00</span>元</div>
        <p>我的余额</p>
      </div>
      <div class="item">
        <div class="num"><span>0.00</span>元</div>
        <p>我的余额</p>
      </div>
      <div class="item">
        <div class="num"><span>0.00</span>元</div>
        <p>我的余额</p>
      </div>
    </div>

    <div class="line"></div>

    <div class="user-info">
      <div class="item" v-for="item in userInfoList1" :key="item.icon">
        <div class="content">
          <i
            class="iconfont"
            :style="{ color: item.color }"
            :class="item.icon"
          ></i>
          <span>{{ item.message }}</span>
        </div>
      </div>

      <div class="line"></div>
      <div class="item" v-for="item in userInfoList2" :key="item.icon">
        <div class="content">
          <i
            class="iconfont"
            :style="{ color: item.color }"
            :class="item.icon"
          ></i>
          <span>{{ item.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/navHeader/navHeader";
import profileLogin from "./profileChild/profileLogin.vue";
export default {
  components: {
    navHeader,
    profileLogin,
  },
  data() {
    return {
      userInfoList1: [
        {
          icon: "icon-xiaoxi",
          message: "我的消息",
          color: "pink",
        },
        {
          icon: "icon-yly_jifenshangcheng",
          message: "积分商城",
          color: "red",
        },
        {
          icon: "icon-huiyuan",
          message: "会员卡",
          color: "pink",
        },
      ],
      userInfoList2: [
        {
          icon: "icon-gouwuche",
          message: "我的购物车",
          color: "pink",
        },
        {
          icon: "icon-xiazai",
          message: "下载购物app",
          color: "pink",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.profile {
  .nav-header {
    background-color: var(--color-int);

    .center {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
  .account {
    display: flex;

    .item {
      padding: 15px 0;
      flex: 1;
      text-align: center;
      &:nth-child(n + 1) {
        border-left: 1px solid #eee;
      }

      div,
      p {
        margin: 5px 0;
        color: #666;
      }
      .num {
        color: var(--color-int);
        span {
          font-size: 22px;
          font-weight: 700;
        }
      }
    }
  }
  .user-info {
    .item {
      &:nth-child(n + 1) {
        border-top: 1px solid #eee;
      }
      .content {
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: 16px;

        i {
          font-size: 24px;
          margin-right: 8px;
        }
        span {
          color: #666;
        }
      }
    }
  }
  .line {
    height: 12px;
    background-color: rgb(242, 242, 242);
  }
}
</style>
