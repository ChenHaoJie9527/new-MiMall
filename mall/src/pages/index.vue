<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box" v-if="slideList">
        <div class="nav-menu">
          <ul class="menu-warp">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, k) of menuList" :key="k">
                  <li v-for="(sub, j) of item" :key="j">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        :src="sub ? sub.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub.name || "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视盒子 电话卡</a>
              <div class="children">电视盒子</div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children">笔记本</div>
            </li>
            1510754178
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children">家电</div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children">出行</div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音箱</a>
              <div class="children">耳机</div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children">电源</div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children">生活</div>
            </li>
          </ul>
        </div>
        <Swiper class="swiper-wrapper" :options="swiperOptions">
          <SwiperSlide v-for="item of slideList" :key="item.id">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" alt="" />
            </a>
          </SwiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next" slot="button-next"></div>
          <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </Swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner-box"></div>
      <div class="product-box"></div>
    </div>
    <server-bar></server-bar>
  </div>
</template>

<script>
import ServerBar from "../components/ServerBar.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowScale: 0.6,
        },
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: 42,
          img: require("../../public/imgs/slider/slide-1.jpg"),
        },
        {
          id: 45,
          img: require("../../public/imgs/slider/slide-2.jpg"),
        },
        {
          id: 46,
          img: require("../../public/imgs/slider/slide-3.jpg"),
        },
        {
          id: "1",
          img: require("../../public/imgs/slider/slide-4.jpg"),
        },
        {
          id: "2",
          img: require("../../public/imgs/slider/slide-5.jpg"),
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: require("../../public/imgs/item-box-1.png"),
            name: "小米CC9",
          },
          {
            id: 31,
            img: require("../../public/imgs/item-box-2.png"),
            name: "小米8青春版",
          },
          {
            id: 32,
            img: require("../../public/imgs/item-box-3.jpg"),
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: require("../../public/imgs/item-box-4.jpg"),
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    };
  },
  components: {
    ServerBar,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
.index {
  .swiper-box {
    position: relative;
    .swiper-wrapper {
      width: 100%;
      height: 450px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-pagination {
        --swiper-theme-color: #ff6600; /*设置小圆点颜色 */
      }
      .swiper-button-prev,
      .swiper-button-next {
        --swiper-navigation-color: #ff6600; /* 单独设置按钮颜色 */
        --swiper-navigation-size: 44px; /* 设置按钮大小 */
        outline: none;
        z-index: 15;
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
    .nav-menu {
      width: 264px;
      height: 100%;
      background: #55585a73;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 30;
      box-sizing: border-box;
      padding: 26px 0px;
      .menu-item {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
        box-sizing: border-box;
        cursor: pointer;
        @include flex(flex, initial);
        &:after {
          @include befored("/imgs/icon-arrow.png", 10px, 15px);
          margin-right: 28px;
          opacity: 0.5;
        }
        &:hover {
          background: #ff6600;
          .children {
            width: 964px;
            opacity: 1;
          }
        }
        a {
          color: #ffffff;
          font-size: 16px;
          font-family: FZLTHJW;
        }
        .children {
          position: absolute;
          background: #fff;
          top: 0;
          left: 262px;
          height: 100%;
          width: 0px;
          opacity: 0;
          border: 1px solid #e5e5e5;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          overflow: hidden;
          transition: all 1s ease-out;
          ul {
            display: flex;
            justify-content: space-between;
            height: 75px;
            li {
              height: 75px;
              line-height: 75px;
              flex: 1;
              padding-left: 23px;
              display: flex;
              align-items: center;
              a {
                color: #333;
                font-size: 14px;
                font-weight: bold;
                font-family: FZLTHJW;
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>