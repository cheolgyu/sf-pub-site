<template>
  <div id="stock">
    <h1>저가에 사서 고가에 팔기</h1>
    {{ $store.state.priceStore.info }}
    <hr />
    <StockNav />
    <router-view></router-view>
  </div>
</template>
<script>
import StockNav from "./StockNav.vue";
export default {
  components: { StockNav },
  data() {
    return {};
  },
  async beforeCreate() {
    const data = await this.$store.dispatch("set_market_list");
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },
  methods: {
    async fetchData() {
      const data = await this.$store.dispatch("priceStore/getInfo");
    },
  },
};
</script>
