<template>
  <div class="grid_table_area">
    <div style="overflow-x: auto">
      <table border="1" id="market_tb">
        <caption>
          마켓 목록
        </caption>
        <thead>
          <tr>
            <th colspan="2"></th>
            <th colspan="6">종가</th>
            <th colspan="6">시가</th>
            <th colspan="6">저가</th>
            <th colspan="6">고가</th>
            <th colspan="1"></th>
          </tr>
          <tr>
            <TableTh :items="head" @chage_sort="on_sort" />
          </tr>
        </thead>
        <tbody>
          <template v-for="item in tb.list" :key="item.code">
            <TableTr object="market" :item="item" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import TableTr from "@/components/grid/table/Tr.vue";
import TableTh from "@/components/grid/table/Th.vue";

export default {
  components: { TableTr, TableTh },
  watch: {},
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
      tb: {
        list: this.$store.state.priceStore.market,
      },
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
        this.tb.list = data;
      } else {
        this.tb.list = [];
      }
    },
  },
  setup() {},
};
</script>
