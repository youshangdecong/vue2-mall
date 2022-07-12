<template>
  <div class="login">
    <div class="left">
      <img src="@/assets/img/user/头像.png" alt="" />
      <div class="info">
        <div class="login-registr">登陆/注册</div>
        <div class="b-phone">暂无绑定手机号</div>
      </div>
    </div>
    <div class="right">
      <div class="more"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.login {
  background-color: var(--color-int);
  padding: 15px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #fff;
    }
    .info {
      margin-left: 10px;

      div {
        margin: 5px 0;
      }
      .login-registr {
        font-size: 16px;
      }
    }
  }
  .right {
    .more {
      width: 9px;
      height: 9px;
      border-top: 2px solid #fff;
      border-right: 2px solid #fff;
      transform: rotate(45deg);
    }
  }
}
</style>
