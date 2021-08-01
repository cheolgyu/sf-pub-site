<template>
  <div id="stock_day_trading">
    <h1>단타 (고가-저가의 퍼센트)</h1>
    <hr />
    <TbDayTrading />
  </div>
</template>
<script>
import TbDayTrading from "@/components/grid/view/TbDayTrading.vue";

export default {
  components: { TbDayTrading },
  data() {
    return {};
  },
  setup() {},
};
</script>
