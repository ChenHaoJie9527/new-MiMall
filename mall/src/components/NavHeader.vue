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
    <div class="nav-header">
      <div class="container">
        <div class="header-log">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>小电视米手机</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333333;
    font-size: 12px;
    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
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
  .nav-header {
    .container {
      height: 112px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .header-log {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &:before {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("../../public/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;
            transition: margin 1s ease;
          }
          &:after {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("../../public/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 1s ease;
          }
        }
      }
      .header-menu {
        display: flex;
        padding-left: 210px;
        width: 300px;
        color: #333333;
        font-size: 16px;
        font-weight: 700;
        align-items: center;
        justify-content: space-between;
        .item-menu{
          cursor: pointer;
          &:hover{
            color: #FF6600;
          }
        }
      }
    }
  }
}
</style>