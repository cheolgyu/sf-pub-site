<template>
  <div id="stock_view">
    <h1>저가에 사서 고가에 팔기</h1>
    <hr />
    <h3>
      {{ $store.state.priceStore.info }}
    </h3>

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
