<template>
  <div class="grid_table_area">
    <CheckBoxMarket v-model:chked="param.market" />
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th class="clickable" @click="sort('std')">고가-저가의 표준편차</th>
          <th class="clickable" @click="sort('avg')">고가-저가의 평균</th>
          <th>네이버 이동</th>
        </tr>
      </thead>
      <tr></tr>
      <tr v-for="item in items" :key="item">
        <td class="txt-black" > 
          <router-link :to="{ name: 'stock_id', params: { id: item.code } }">{{
            item.name
          }}</router-link>
        </td>
        <td>{{ item.std }}</td>
        <td>{{ item.avg }}</td>
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
      name: "단 타",
      object: "market",
      items: [],
      param: {
        market: ["KOSPI", "KOSDAQ", "KONEX"],
        rows: 50,
        sort: "avg",
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
    sort(item){
      this.param.desc =  !this.param.desc
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
