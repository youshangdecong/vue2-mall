<template>
  <swiper :banners="banners"></swiper>
</template>

<script>
import swiper from "@/components/swiper/swiper";
export default {
  components: {
    swiper,
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
