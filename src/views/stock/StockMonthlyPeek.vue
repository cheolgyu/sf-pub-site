<template>
  <div id="stock_day_trading">
    <h1>피크월 (거래량)</h1>
    <hr />
    <TbMonthlyPeek />
  </div>
</template>
<script>
import TbMonthlyPeek from "@/components/grid/view/TbMonthlyPeek.vue";

export default {
  components: { TbMonthlyPeek },
  data() {
    return {};
  },
};
</script>
