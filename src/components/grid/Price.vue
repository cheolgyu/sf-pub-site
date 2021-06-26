<template>
  <button @click="fetchData">fetchData</button>
  <div style="overflow-x: auto">
    <table border="1" id="stock_tb">
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
          <th v-for="item in head" :key="item">{{ item.txt }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in tb.price_list" :key="item.code">
          <TableTr :item="item" />
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
import TableTr from "@/components/grid/table/Tr.vue";
// import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TableTr,
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
        rows: 30,
        state: "",
        sort: "cp_y_percent",
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
    async fetchData() {
      this.tb.loading = true;
      //   const { sortBy, sortDesc, page, itemsPerPage } = this.tb.options;
      //   if (page != undefined) {
      //     this.param.page = page;
      //     this.param.rows = itemsPerPage;
      //     this.param.sort = sortBy;
      //     this.param.desc = sortDesc;
      //   }
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

<style lang="scss">
#stock_tb {
  border: 1;
}
table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
}

table {
  width: 90%;
  margin: auto;
}

td,
th {
  border: 1px solid rgb(109, 108, 108);
  padding: 7px 5px;
}

th {
  background-color: rgb(104, 98, 98);
}

td {
  text-align: center;
}
tr:nth-child(even) {
  background-color: #777474;
}
tr:nth-child(odd) {
  background-color: #a39f9f;
}
// tr:hover:nth-child(even) td {
//   background-color: rgb(250, 250, 250);
// }

// tr:hover:nth-child(odd) td {
//   background-color: rgb(240, 240, 240);
// }
tr:hover {
  background-color: rgb(103, 136, 109);
}
// tr:hover {
//   background-color: yellow ;
// }
</style>
