<template>
  <div class="size-info">
    <shop-table :tables="tables"></shop-table>
    <shop-table :tables="productInfo" textAlign="left"></shop-table>
  </div>
</template>

<script>
import shopTable from "@/baseUi/shop-table/shopTable";

export default {
  components: {
    shopTable,
  },
  props: {
    sizeInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    tables() {
      return this.sizeInfo.rule && this.sizeInfo.rule.tables[0];
    },
    productInfo() {
      return this.sizeInfo.rule && this.sizeInfo.info.set;
    },
  },
};
</script>

<style lang="less" scoped></style>
