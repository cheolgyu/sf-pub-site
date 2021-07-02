<template>
  <div id="stock_day_trading_view">
    <h1>단타</h1>
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
