<template>
  <h1>저가에 사서 고가에 팔기</h1>
  <hr />
  <h3>
    {{ $store.state.priceStore.info }}
  </h3>
  <br />
  <GridMarket />
  <br />
  <GridPrice />
  <br />
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
