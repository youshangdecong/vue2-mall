<template>
  <div class="p-swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="banners.length">
      <swiper-slide
        v-for="item in banners"
        :key="item.image"
        :style="{ height: `${imgHeight}px` }"
      >
        <a :href="item.link">
          <img :src="item.image || item" alt="" />
        </a>
      </swiper-slide>
      <!-- 根据情况引入控件 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
// 注意下边引入的swiper和swiperSlide第一个字母s都是小写的，大写会报错
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
    },
    imgHeight: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto", // 一屏幕显示几个? 数字或者默认  auto 自动。
        notNextTick: true, // true:加载后允许触发事件 false:加载后不可以触发事件
        initialSlide: 0, // 从第几个开始
        autoplay: {
          delay: 2000, // 等5秒下一个
          disableOnInteraction: false, // 中间滑动一下，取消自动吗？
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }, // 下按钮
        speed: 800, // 滑动时候动画的速度
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        paginationClickable: true, // 下面按钮让点吗
        watchSlidesProgress: true, // 开启这个参数来计算每个slide的progress
        watchSlidesVisibility: true,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped lang="less">
.swiper-slide {
  overflow: hidden;

  a {
    display: block;

    img {
      width: 100%;
    }
  }
}
</style>
