<template>
  <div id="stock_bound">
    <h1>반등</h1>
    <hr />

    <div class="grid_market_area">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <GridMarket />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div class="grid_price_area">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <GridPrice />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

    <br />
  </div>
</template>
<script>
import GridPrice from "@/components/grid/Price.vue";
import GridMarket from "@/components/grid/Market.vue";

export default {
  components: {
    GridPrice,
    GridMarket,
  },
  data() {
    return {};
  },
  setup() {},
};
</script>
