<template>
  <div class="grid_table_area">
    <p>{{ fmt_date(param.start) }} ~ {{ fmt_date(param.end) }}</p>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>저가 고가 평균 %</th>
          <th>시가 종가 평균 %</th>
          <th>네이버 이동</th>
        </tr>
      </thead>
      <tr></tr>
      <tr v-for="item in items" :key="item">
        <td>{{ item.name }}</td>
        <td>{{ item.avg_l2h }}</td>
        <td>{{ item.avg_o2c }}</td>
        <td><a target="_blank" :href="naver_link(item.code)"> 이동 </a></td>
      </tr>
    </table>
  </div>
</template>
<script>
import GridTable from "@/components/grid/table/Table.vue";

export default {
  components: { GridTable },
  watch: {},
  data() {
    return {
      name: "단 타",
      object: "market",
      items: [],
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
    naver_link(code) {
      return "https://finance.naver.com/item/main.nhn?code=" + code;
    },

    fmt_date(s) {
      var yy = s.slice(0, 4);
      var mm = s.slice(4, 6);
      var dd = s.slice(6, 8);
      if (dd == "") {
        return "";
      }
      return yy + "-" + mm + "-" + dd;
    },
    getDateFmt(today) {
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate(); // 날짜
      if (month < 10) {
        month = "0" + month;
      }
      if (date < 10) {
        date = "0" + date;
      }
      return year + "" + month + "" + date;
    },
    async fetchData() {
      var now = new Date(); // 현재 날짜 및 시간
      var yesterday = new Date(now.setDate(now.getDate() - 3)); // 어제
      console.log(now, yesterday);
      this.param.start = this.getDateFmt(yesterday);
      this.param.end = this.getDateFmt(new Date());
      this.param.market = "KOSPI";
      const data = await this.$store.dispatch(
        "priceStore/geDayTrading",
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
