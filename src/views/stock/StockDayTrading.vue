<template>
  <div id="stock_day_trading">
    <h1>단타 (고가-저가의 퍼센트)</h1>
    <hr />
    <GridDayTrading />
  </div>
</template>
<script>
import GridDayTrading from "@/components/grid/DayTrading.vue";

export default {
  components: { GridDayTrading },
  data() {
    return {};
  },
  setup() {},
};
</script>
