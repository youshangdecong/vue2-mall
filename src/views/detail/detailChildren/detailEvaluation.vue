<template>
  <div class="detail-evaluation">
    <hArea title="用户评价" />
    <evaluation :item="rateInfo"></evaluation>
  </div>
</template>

<script>
import evaluation from "@/components/evaluation/evaluation";
import hArea from "@/baseUi/area/area";

export default {
  props: {
    rateInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    evaluation,
    hArea,
  },
};
</script>

<style lang="less" scoped>
.detail-evaluation {
}
</style>
