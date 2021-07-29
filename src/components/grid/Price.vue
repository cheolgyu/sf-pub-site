<template>
  <div class="grid_table_area">
    <CheckBoxMarket v-model:chked="param.market" />
    <CheckBoxState v-model:state="param.state" />
    <InputSearch v-model:search="param.search" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <GridTable
      :object="object"
      :name="name"
      :items="items"
      @chage_sort="on_sort"
    />
    <Paging
      :total="tb.full_count"
      v-model:page="param.page"
      v-model:rows="param.rows"
    />
  </div>
</template>
<script>
import GridTable from "@/components/grid/table/Table.vue";
import CheckBoxMarket from "@/components/grid/table/CheckBoxMarket.vue";
import CheckBoxState from "@/components/grid/table/CheckBoxState.vue";
import InputSearch from "@/components/grid/table/InputSearch.vue";
import Paging from "@/components/grid/table/Paging.vue";
const default_page = 1;
//const default_rows = 10;

export default {
  components: {
    GridTable,
    CheckBoxMarket,
    CheckBoxState,
    InputSearch,
    Paging,
  },
  watch: {
    "param.page": {
      handler() {
        this.fetchData();
      },
      deep: true,
    },
    "param.rows": {
      handler() {
        this.fetchData();
      },
      deep: true,
    },
    "param.state": {
      handler() {
        this.default_page();
      },
      deep: true,
    },
    "param.market": {
      handler() {
        this.default_page();
      },
      deep: true,
    },
    "param.search": {
      handler() {
        this.default_page();
      },
      deep: true,
    },
  },
  data() {
    return {
      object: "price",
      name: "종목 목록",
      items: [],

      param: {
        page: 1,
        rows: 10,
        state: ["stop::false"],
        sort: "cp_y_percent",
        desc: true,
        market: [],
        search: "",
      },
      tb: {
        full_count: 0,
        loading: false,
        options: {},
        headers: [],
      },
    };
  },
  mounted() {},
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.$store.dispatch("get_config", "market").then((res) => {
          res.forEach((element) => {
            this.$data.param.market.push(element.id);
          });
        });

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
    default_page() {
      this.param.page = default_page;
      //this.param.rows = default_rows;
      this.fetchData();
    },
    async fetchData() {
      this.tb.loading = true;
      const data = await this.$store.dispatch(
        "priceStore/getPrice",
        this.param
      );

      if (data != null) {
        this.tb.full_count = data[0].full_count;
        this.items = data;
      } else {
        this.tb.full_count = 0;
        this.items = [];
      }

      this.tb.loading = false;
    },
  },
  setup(props) {},
};
</script>

