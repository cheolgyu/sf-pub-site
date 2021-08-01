<template>
  <!-- <details open v-show="!loading"> -->
  <details open>
    <summary>반등 정보</summary>
    <RadioPriceType v-model:chked="param.price_type" />
    <table>
      <thead>
        <tr>
          <th @click="sorting('x1')" class="clickable">시작 일</th>
          <th @click="sorting('y1')" class="clickable">시작 가격</th>
          <th @click="sorting('x2')" class="clickable">종료 일</th>
          <th @click="sorting('y2')" class="clickable">종료 가격</th>
          <th @click="sorting('x_tick')" class="clickable">누적 일</th>
          <th @click="sorting('y_minus')" class="clickable">가격차이</th>
          <th @click="sorting('y_percent')" class="clickable">퍼센트</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.x1">
          <td>{{ $fmt.date(item.x1) }}</td>
          <td>{{ $fmt.money(item.y1) }}</td>
          <td>{{ $fmt.date(item.x2) }}</td>
          <td>{{ $fmt.money(item.y2) }}</td>
          <td>{{ item.x_tick }}</td>
          <td :class="$fmt.moneyColorClass(item.y_percent)">
            {{ item.y_minus }}
          </td>
          <td :class="$fmt.moneyColorClass(item.y_percent)">
            {{ item.y_percent }}
          </td>
        </tr>
      </tbody>
    </table>
    <Paging
      :total="tb.full_count"
      v-model:page="param.page"
      v-model:rows="param.rows"
    />
  </details>
</template>
<script>
/*eslint no-unused-vars: "error"*/
import Paging from "@/components/grid/table/Paging.vue";
import RadioPriceType from "@/components/price/RadioPriceType.vue";

export default {
  components: {
    Paging,
    RadioPriceType,
  },
  props: {},
  data() {
    return {
      list: [],
      tb: {
        full_count: 0,
      },
      param: {
        code: "",
        page: 1,
        rows: 10,
        sort: "x1",
        desc: true,
        price_type: "",
      },
      loading: false,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.$store.dispatch("get_config", "price_type").then((res) => {
          res.forEach((element) => {
            if (element.code == "close") {
              this.param.price_type = element.id;
            }
          });
        });

        this.fetchData();
      },
      { immediate: true }
    );
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
    "param.price_type": {
      handler() {
        this.default_page();
      },
      deep: true,
    },
  },
  methods: {
    default_page() {
      this.param.page = 1;
      //this.param.rows = default_rows;
      this.fetchData();
    },
    sorting(inp) {
      this.param.sort = inp;
      this.param.desc = !this.param.desc;
      this.fetchData();
    },
    async fetchData() {
      this.error = this.post = null;
      this.loading = true;
      this.param.code = this.$route.params.id;
      const data = await this.$store.dispatch(
        "companyStore/getRebound",
        this.param
      );

      if (data != null) {
        this.list = data;
        this.tb.full_count = data[0].full_count;
        this.loading = false;
      }
    },
  },
};
</script>
