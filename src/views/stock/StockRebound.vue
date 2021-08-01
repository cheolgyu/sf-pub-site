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
      <TbMarket />
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
      <TbPrice />
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
import TbPrice from "@/components/grid/view/TbPrice.vue";
import TbMarket from "@/components/grid/view/TbMarket.vue";

export default {
  components: {
    TbPrice,
    TbMarket,
  },
  data() {
    return {};
  },
  setup() {},
};
</script>
