<template>
  <div class="grid_table_area">
    <CheckBoxMarket v-model:chked="param.market" />
    <SelectBoxUnitType v-model:selected="param.unit_type" />
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <!-- <th>마켓</th> -->
          <!-- <th>계산단위</th> -->
          <th>누적연도</th>
          <th class="clickable" @click="sort('max_unit')">
            최고 단위 ({{ unit_type.select }})
          </th>
          <th class="clickable" @click="sort('max_percent')">퍼센트 (%)</th>
          <!-- <th>max 비중</th> -->
          <th class="clickable" @click="sort('min_unit')">
            최저 단위 ({{ unit_type.select }})
          </th>
          <th class="clickable" @click="sort('min_percent')">퍼센트 (%)</th>
          <!-- <th>min 비중</th> -->

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
        <!-- <td>{{ item.market_type_name }}</td> -->
        <!-- <td>{{ item.unit_type }}</td> -->
        <td>{{ item.yyyy_cnt }}</td>
        <td>{{ item.max_unit }}</td>
        <td>{{ item.max_percent }}</td>
        <!-- <td>{{ item.max_rate }}</td> -->
        <td>{{ item.min_unit }}</td>
        <td>{{ item.min_percent }}</td>
        <!-- <td>{{ item.min_rate }}</td> -->

        <td><a target="_blank" :href="naver_link(item.code)"> 이동 </a></td>
      </tr>
    </table>
  </div>
</template>
<script>
import GridTable from "@/components/grid/table/Table.vue";
import CheckBoxMarket from "@/components/grid/table/CheckBoxMarket.vue";
import SelectBoxUnitType from "@/components/grid/table/SelectBoxUnitType.vue";

export default {
  components: { GridTable, CheckBoxMarket, SelectBoxUnitType },
  watch: {
    "param.market": {
      handler() {
        this.fetchData();
      },
      deep: true,
    },
    "param.unit_type": {
      handler() {
        this.unit_type.list.forEach((element) => {
          if (element.code == this.param.unit_type.up) {
            this.unit_type.select = element.name;
          }
        });
        this.fetchData();
      },
      deep: true,
    },
  },
  data() {
    return {
      items: [],
      unit_type: {
        list: [],
        select: "",
      },
      param: {
        market: [],
        rows: 30,
        sort: "peek_percent",
        desc: true,
        unit_type: { up: "", down: "" },
      },
    };
  },
  created() {
    this.$store.dispatch("get_config", "unit_type").then((res) => {
      this.unit_type.list = res;
    });
    this.$watch(
      () => this.$route.params,
      () => {},
      { immediate: true }
    );
  },
  methods: {
    naver_link(code) {
      return "https://finance.naver.com/item/main.nhn?code=" + code;
    },

    async fetchData() {
      const data = await this.$store.dispatch(
        "priceStore/get_project_trading_volume",
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
