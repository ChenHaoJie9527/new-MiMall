<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box" v-if="slideList">
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
        effect: "coverflow",
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true,
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
.index {
  .swiper-box {
    .swiper-wrapper {
      width: 962px;
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
    }
  }
}
</style>