<template>
  <div class="grid_table_area">
    <CheckBoxMarket v-model:chked="param.market" />
    <CheckBoxState v-model:state="param.state" />
    <InputSearch v-model:search="param.search" />
    <br />
    <br />
    <div style="overflow-x: auto">
      <table border="1" id="stock_tb">
        <caption>
          종목 목록
        </caption>
        <colgroup>
          <col width="150px" />
          <col width="50px" />
        </colgroup>
        <thead>
          <tr>
            <th colspan="2"></th>
            <th colspan="6" @click="click_p_type('close')"><b>종</b>가</th>
            <th colspan="6" @click="click_p_type('open')"><b>시</b>가</th>
            <th colspan="6" @click="click_p_type('low')"><b>저</b>가</th>
            <th colspan="6" @click="click_p_type('high')"><b>고</b>가</th>
            <th colspan="1"></th>
          </tr>
          <tr>
            <TableTh :items="head" @chage_sort="on_sort" />
          </tr>
        </thead>
        <tbody>
          <template v-for="item in tb.price_list" :key="item.code">
            <TableTr object="price" :item="item" />
          </template>
        </tbody>
      </table>
      <Paging
        :total="tb.full_count"
        v-model:page="param.page"
        v-model:rows="param.rows"
      />
    </div>
  </div>
</template>
<script>
import TableTr from "@/components/grid/table/Tr.vue";
import TableTh from "@/components/grid/table/Th.vue";
import CheckBoxMarket from "@/components/grid/table/CheckBoxMarket.vue";
import CheckBoxState from "@/components/grid/table/CheckBoxState.vue";
import InputSearch from "@/components/grid/table/InputSearch.vue";
import Paging from "@/components/grid/table/Paging.vue";

const default_page = 1;
//const default_rows = 10;

export default {
  components: {
    TableTr,
    TableTh,
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
      head: [
        { id: "name", sort: true, txt: "이름" },
        { id: "market", sort: true, txt: "마켓" },

        { id: "cp_x1", sort: true, txt: "시작-일" },
        { id: "cp_y1", sort: true, txt: "시작-원" },
        { id: "cp_x2", sort: true, txt: "종료-일" },
        { id: "cp_y2", sort: true, txt: "종료-원" },
        { id: "cp_x_tick", sort: true, txt: "누적" },
        { id: "cp_y_percent", sort: true, txt: "퍼센트" },

        { id: "op_x1", sort: true, txt: "시작-일" },
        { id: "op_y1", sort: true, txt: "시작-원" },
        { id: "op_x2", sort: true, txt: "종료-일" },
        { id: "op_y2", sort: true, txt: "종료-원" },
        { id: "op_x_tick", sort: true, txt: "누적" },
        { id: "op_y_percent", sort: true, txt: "퍼센트" },

        { id: "lp_x1", sort: true, txt: "시작-일" },
        { id: "lp_y1", sort: true, txt: "시작-원" },
        { id: "lp_x2", sort: true, txt: "종료-일" },
        { id: "lp_y2", sort: true, txt: "종료-원" },
        { id: "lp_x_tick", sort: true, txt: "누적" },
        { id: "lp_y_percent", sort: true, txt: "퍼센트" },

        { id: "hp_x1", sort: true, txt: "시작-일" },
        { id: "hp_y1", sort: true, txt: "시작-원" },
        { id: "hp_x2", sort: true, txt: "종료-일" },
        { id: "hp_y2", sort: true, txt: "종료-원" },
        { id: "hp_x_tick", sort: true, txt: "누적" },
        { id: "hp_y_percent", sort: true, txt: "퍼센트" },

        { id: "link", sort: false, txt: "네이버링크" },
      ],
      param: {
        page: 1,
        rows: 10,
        state: ["stop::false"],
        sort: "cp_y_percent",
        desc: true,
        market: ["KOSPI", "KOSDAQ", "KONEX"],
        search: "",
      },
      tb: {
        price_list: [],
        full_count: 0,
        loading: false,
        options: {},
        headers: [],
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
    click_p_type(p_type) {
      console.log(p_type);
    },
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
        this.tb.price_list = data;
      } else {
        this.tb.full_count = 0;
        this.tb.price_list = [];
      }

      this.tb.loading = false;
    },
  },
  setup() {},
};
</script>

