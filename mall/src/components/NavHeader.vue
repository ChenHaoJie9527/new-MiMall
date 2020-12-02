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
            <div class="children">
              <ul>
                <li class="product">
                  <!--target属性：打开新窗口 _black-->
                  <a href="" target="_black">
                    <div class="pro-imgs">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <!--target属性：打开新窗口 _black-->
                  <a href="" target="_black">
                    <div class="pro-imgs">
                      <img src="/imgs/nav-img/nav-2.png" alt="" />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <!--target属性：打开新窗口 _black-->
                  <a href="" target="_black">
                    <div class="pro-imgs">
                      <img src="/imgs/nav-img/nav-3.png" alt="" />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <!--target属性：打开新窗口 _black-->
                  <a href="" target="_black">
                    <div class="pro-imgs">
                      <img src="/imgs/nav-img/nav-4.png" alt="" />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <!--target属性：打开新窗口 _black-->
                  <a href="" target="_black">
                    <div class="pro-imgs">
                      <img src="/imgs/nav-img/nav-5.png" alt="" />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <!--target属性：打开新窗口 _black-->
                  <a href="" target="_black">
                    <div class="pro-imgs">
                      <img src="/imgs/nav-img/nav-6.png" alt="" />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
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
        <div class="header-search">
          <div class="wraper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  created() {
    
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
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
      @include flex();
      .topbar-menu {
        a {
          margin-right: 18px;
          color: #b0b0b0;
          @include hoverColor();
        }
      }
      .topbar-user {
        a {
          margin-left: 18px;
          color: #b0b0b0;
          @include hoverColor();
        }
        .my-cart {
          width: 110px;
          background: $colorA;
          text-align: center;
          display: inline-block;
          color: #fff;
          @include hoverBgColor();
          .icon-cart {
            display: inline-block;
            @include bgImg("/imgs/icon-cart-checked.png" ，16px, 12px);
            margin-right: 4px;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;
      .header-log {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &:before {
            content: "";
            display: inline-block;
            @include bgImg("../../public/imgs/mi-logo.png", 55px, 55px);
            @include transition();
          }
          &:after {
            content: "";
            display: inline-block;
            @include bgImg("../../public/imgs/mi-home.png", 55px, 55px);
          }
          &:hover:before {
            margin-left: -55px;
            @include transition();
          }
        }
      }
      .header-menu {
        @include flex();
        padding-left: 166px;
        width: 300px;
        color: $colorB;
        font-size: 16px;
        font-weight: 700;
        font-family: $familyA;
        .item-menu {
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px $colorH solid;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            clear: left;
            z-index: 10;
            transition: all 1s ease;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              position: relative;
              box-sizing: border-box;
              &:hover {
                background: $colorE;
                overflow: none;
              }
              &:hover:before {
                display: none;
              }

              // &:before {
              //   content: "";
              //   position: absolute;
              //   top: 28px;
              //   right: 0;
              //   border: 1px solid #d7d7d7;
              //   height: 99px;
              // }
              // &:last-child:before{
              //   display: none;
              // }
              a {
                box-sizing: border-box;
                @include flex(flex, column, normal, center);
                height: 100%;
                .pro-imgs {
                  margin-bottom: 20px;
                }
                .pro-name {
                  color: $colorB;
                  font-size: 12px;
                  margin-bottom: 8px;
                  font-family: $familyA;
                }
                .pro-price {
                  color: $colorA;
                  font-family: $familyA;
                }
              }
              img {
                width: auto;
                height: 112px;
                margin-top: 26px;
              }
            }
          }
        }
      }
      .header-search {
        width: 320px;
        margin-left: 330px;
        .wraper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          cursor: pointer;
          input {
            border: none;
            border-right: 1px #e0e0e0 solid;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            display: inline-block;
            @include bgImg("/imgs/icon-search.png", 18px, 18px);
            margin-left: 18px;
          }
        }
      }
    }
  }
}
</style>