<template>
  <div id="stock_day_trading">
    <h1>피크월 (거래량)</h1>
    <hr />
    <GridMonthlyPeek />
  </div>
</template>
<script>
import GridMonthlyPeek from "@/components/grid/MonthlyPeek.vue";

export default {
  components: { GridMonthlyPeek },
  data() {
    return {};
  },
  setup() {},
};
</script>
