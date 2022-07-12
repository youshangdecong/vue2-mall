<template>
  <div class="shop-table">
    <table :style="{ textAlign: textAlign }">
      <tr v-for="(itemTr, index) in tables" :key="index">
        <template v-if="Array.isArray(itemTr)">
          <td v-for="(itemTd, index) in itemTr" :key="itemTd + index">
            {{ itemTd }}
          </td>
        </template>

        <template v-else>
          <td>
            <p>{{ itemTr.key }}</p>
          </td>
          <td>
            <p>{{ itemTr.value }}</p>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    tables: {
      type: Array,
      default: () => [],
    },
    textAlign: {
      type: String,
      default: "center",
    },
    typeKey: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="less">
.shop-table {
  margin-bottom: 20px;

  table {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;

    tr {
      height: 42px;
      line-height: 42px;
      display: flex;
      border-bottom: 1px solid #eee;

      td:first-child {
        width: 80px;
        flex-basis: auto;
        text-align: left;
        flex-grow: 0;
      }
      td {
        flex: 1;
        color: #666;
        display: flex;
        align-items: center;
        padding: 10px 0;

        p {
          max-width: 220px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        // border-bottom: 1px solid #eee;
      }
    }
  }
}
</style>
