<template>
  <div>
    <div class="title_bar">
      <span @click="$router.push($route.matched[0].path)">{{
        $route.matched[0].meta.title
      }}</span>
      <span>&nbsp; > &nbsp; </span>
      <span> {{ $route.meta.title }}</span>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import StockNav from "./StockNav.vue";

export default {
  setup(props) {},
  beforeCreate() {},
  components: { StockNav },
  data() {
    return {};
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
      await this.$store.dispatch("priceStore/getInfo");
      await this.$store.dispatch("get_config", "market_type");
      await this.$store.dispatch("get_config", "price_type");
    },
  },
};
</script>
