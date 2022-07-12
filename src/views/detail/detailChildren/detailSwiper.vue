<template>
  <div class="deetail-swiper">
    <swiper :banners="topImages" imgHeight="300"></swiper>
  </div>
</template>

<script>
import swiper from "@/components/swiper/swiper";
export default {
  components: {
    swiper,
  },
  props: {
    topImages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
