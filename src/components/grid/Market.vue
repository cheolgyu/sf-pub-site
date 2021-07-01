<template>
  <div class="grid_table_area">
    <div style="overflow-x: auto">
      <Talbe :name="name" :items="items" @chage_sort="on_sort" />
    </div>
  </div>
</template>
<script>
import Talbe from "@/components/grid/table/Table.vue";

export default {
  components: { Talbe },
  watch: {},
  data() {
    return {
      name: "마켓 목록",
      items: this.$store.state.priceStore.market,
      param: {
        sort: "cp_y_percent",
        desc: true,
      },
    };
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    on_sort(id, desc) {
      this.param.sort = id;
      this.param.desc = desc;
      this.fetchData();
    },
    async fetchData() {
      const data = await this.$store.dispatch(
        "priceStore/getMarket",
        this.param
      );

      if (data != null) {
        this.items = data;
      } else {
        this.items = [];
      }
    },
  },
  setup() {},
};
</script>
