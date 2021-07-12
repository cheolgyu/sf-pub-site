<template>
  <details open>
    <summary>반등 정보</summary>
    <RadioGType v-model:chked="param.g_type" />
    <table>
      <thead>
        <tr>
          <td @click="sorting('x1')" class="clickable">시작 일</td>
          <td @click="sorting('y1')" class="clickable">시작 가격</td>
          <td @click="sorting('x2')" class="clickable">종료 일</td>
          <td @click="sorting('y2')" class="clickable">종료 가격</td>
          <td @click="sorting('x_tick')" class="clickable">누적 일</td>
          <td @click="sorting('y_minus')" class="clickable">가격차이</td>
          <td @click="sorting('y_percent')" class="clickable">퍼센트</td>
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
import RadioGType from "@/components/price/RadioGType.vue";

export default {
  components: {
    Paging,
    RadioGType,
  },
  props: {},
  data() {
    return {
      list: [],
      tb: {
        full_count: 0,
      },
      param: { code: "", page: 1, rows: 10, sort: "", desc: true, g_type: "" },
      loading: false,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
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
    "param.g_type": {
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
        "priceStore/getPriceBound",
        this.param
      );

      if (data != null) {
        this.list = data;
        this.tb.full_count = data[0].full_count;
      }
      this.loading = false;
    },
  },
};
</script>
