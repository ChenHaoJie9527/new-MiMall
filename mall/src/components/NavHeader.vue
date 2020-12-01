<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">蓝书出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>购物车(0)
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header"></div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
};
</script>

<style lang="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333333;
    font-size: 12px;
    .container {
      width: 1226px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .topbar-menu {
        a {
          margin-right: 18px;
          color: #b0b0b0;
        }
      }
      .topbar-user {
        a {
          margin-left: 18px;
          color: #b0b0b0;
        }
        .my-cart {
          width: 110px;
          background: #ff6600;
          text-align: center;
          display: inline-block;
          color: #fff;
          .icon-cart {
            display: inline-block;
            background: url("/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
            width: 16px;
            height: 12px;
            margin-right: 4px;
          }
        }
      }
    }
  }
  .topbar-user {
  }
}
</style>