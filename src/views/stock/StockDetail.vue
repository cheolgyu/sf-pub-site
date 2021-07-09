<template>
  <hr />
  <h3>{{ title() }}</h3>
  <p>
    <a target="_blank" :href="naver_link(company_code.code)"> 네이버 이동 </a>
  </p>
  <br />
  <br />
  <ChartMonthlyPeek :data="peek" v-if="ready.company" />
  <br />
  <br />
  <CompanyDetail :data="company_detail" v-if="ready.company" />
  <br />
  <br />
  <CompanyState :data="company_state" v-if="ready.company" />
  <br />
  <br />
  <details open v-if="ready.chart">
    <summary>그래프</summary>
    <ChartLine />
  </details>
</template>
<script>
/*eslint no-unused-vars: "error"*/
import ChartLine from "@/components/chart/Line.vue";
import ChartMonthlyPeek from "@/components/chart/MonthlyPeek.vue";
import CompanyDetail from "@/components/company/detail.vue";
import CompanyState from "@/components/company/state.vue";

export default {
  components: { ChartLine, ChartMonthlyPeek, CompanyDetail, CompanyState },
  data() {
    return {
      param: { code: "", page: 1 },
      loading: false,
      post: null,
      error: null,

      company_code: {},
      company_detail: {},
      company_state: {},
      peek: {},

      ready: {
        company: false,
        chart: true,
      },
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
  computed: {},
  methods: {
    title() {
      var aa = this.company_code.name + "(" + this.company_code.code + ")";
      return aa;
    },
    naver_link(code) {
      return "https://finance.naver.com/item/main.nhn?code=" + code;
    },
    setData(company) {
      this.cmp = company;
    },
    async fetchData() {
      this.error = this.post = null;
      this.loading = true;
      this.param.code = this.$route.params.id;
      const data = await this.$store.dispatch(
        "priceStore/getDetailCompany",
        this.param
      );

      if (data != null) {
        this.company_code = data.c;
        if (data.d !== undefined) {
          this.company_detail = data.d;
          this.company_detail.name = data.c.name;
          this.company_state = data.s;
          this.peek = data.peek;
          this.ready.company = true;
        }
      }
      this.loading = false;
    },
  },
};
</script>
