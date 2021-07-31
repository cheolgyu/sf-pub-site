<template>
  <div class="grid_table_area">
    <CheckBoxMarket v-model:chked="param.market" />
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>마켓</th>
          <th class="clickable" @click="sort('peek')">피크 월</th>
          <th>피크 주변 월</th>
          <th class="clickable" @click="sort('peek_percent')">
            피크 월 거래량 %
          </th>
          <th>네이버 이동</th>
        </tr>
      </thead>
      <tr></tr>
      <tr v-for="item in items" :key="item">
        <td>
          <router-link :to="{ name: 'stock_id', params: { id: item.code } }">{{
            item.name
          }}</router-link>
        </td>
        <td>{{ item.market_type_name }}</td>
        <td>{{ item.peek }}</td>
        <td>{{ item.peek_range }}</td>
        <td>{{ item.peek_percent }}</td>
        <td><a target="_blank" :href="naver_link(item.code)"> 이동 </a></td>
      </tr>
    </table>
  </div>
</template>
<script>
import GridTable from "@/components/grid/table/Table.vue";
import CheckBoxMarket from "@/components/grid/table/CheckBoxMarket.vue";

export default {
  components: { GridTable, CheckBoxMarket },
  watch: {
    "param.market": {
      handler() {
        this.fetchData();
      },
      deep: true,
    },
  },
  data() {
    return {
      name: "월별 오르는것",
      object: "market",
      items: [],
      param: {
        market: [],
        rows: 30,
        sort: "peek_percent",
        desc: true,
      },
    };
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.$store.dispatch("get_config", "market_type").then((res) => {
          res.forEach((element) => {
            this.param.market.push(element.id);
          });
        });
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

    async fetchData() {
      const data = await this.$store.dispatch(
        "priceStore/GetMonthlyPeek",
        this.param
      );

      if (data != null) {
        this.items = data;
      } else {
        this.items = [];
      }
    },
    sort(item) {
      this.param.desc = !this.param.desc;
      this.param.sort = item;
      this.fetchData();
    },
  },
};
</script>
