<template>
  <div class="grid_table_area">
    <CheckBoxMarket v-model:chked="param.market" />
    <label>기간 : </label>
    <select v-model="param.term">
      <option v-for="i in 10" :key="i" :value="i">{{ i }}일</option>
    </select>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th class="clickable" @click="sort('avg_o2c')">시가-종가 평균</th>
          <th class="clickable" @click="sort('std_o2c')">시가-종가 표준편차</th>
          <th class="clickable" @click="sort('avg_l2h')">고가-저가 평균</th>
          <th class="clickable" @click="sort('std_l2h')">고가-저가 표준편차</th>
          <th>네이버 이동</th>
        </tr>
      </thead>
      <tr></tr>
      <tr v-for="item in items" :key="item">
        <td class="txt-black">
          <router-link :to="{ name: 'stock_id', params: { id: item.code } }">{{
            item.name
          }}</router-link>
        </td>
        <td>{{ item.avg_o2c }}</td>
        <td>{{ item.std_o2c }}</td>
        <td>{{ item.avg_l2h }}</td>
        <td>{{ item.std_l2h }}</td>
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
    "param.term": {
      handler() {
        this.fetchData();
      },
      deep: true,
    },
  },
  data() {
    return {
      name: "단 타",
      object: "market",
      items: [],
      param: {
        term: 3,
        market: [],
        rows: 50,
        sort: "avg_o2c",
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
        //this.fetchData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    sort(item) {
      this.param.desc = !this.param.desc;
      this.param.sort = item;
      this.fetchData();
    },

    naver_link(code) {
      return "https://finance.naver.com/item/main.nhn?code=" + code;
    },

    async fetchData() {
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
