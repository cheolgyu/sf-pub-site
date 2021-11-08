<template>
  <hr />
  <h3>{{ title() }}</h3>
  <p>
    <a
      target="_blank"
      :href="naver_link(company_code.code)"
      v-if="ready.company"
    >
      네이버 이동
    </a>
  </p>
  <br />
  <br />
  <ChartMonthlyPeek :data="volume" v-if="ready.company" />
  <br />
  <br />
  <TbDetail :data="company_detail" v-if="ready.company" />
  <br />
  <br />
  <TbState :data="company_state" v-if="ready.company" />
  <br />
  <br />
  <TbRebound />
  <br />
  <br />
  <details open v-show="ready.chart">
    <summary>그래프</summary>
    <ChartRebound v-model:is_ready="ready.chart" />
  </details>
</template>
<script>
/*eslint no-unused-vars: "error"*/
import ChartRebound from "@/components/company/chart_rebound.vue";
import ChartMonthlyPeek from "@/components/company/chart_monthly_peek.vue";
import TbDetail from "@/components/company/tb_detail.vue";
import TbState from "@/components/company/tb_state.vue";
import TbRebound from "@/components/company/tb_rebound.vue";

export default {
  components: {
    ChartRebound,
    ChartMonthlyPeek,
    TbState,
    TbDetail,
    TbRebound,
  },
  data() {
    return {
      param: { code: "", page: 1 },
      loading: false,
      post: null,
      error: null,

      company_code: {},
      company_detail: {},
      company_state: {},
      volume: {},

      ready: {
        company: false,
        chart: false,
      },
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        // mounted 에서 하기. 뒤로가기 시 오류남.
        //this.fetchData();
      },
      { immediate: true }
    );
  },
  mounted() {
    this.fetchData();
  },
  computed: {},
  methods: {
    title() {
      if (this.company_code.code === undefined) {
        return "찾을수 없습니다.";
      }
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
        "companyStore/getCompany",
        this.param
      );

      if (data != null) {
        this.company_code = data.c;
        if (data.d !== undefined) {
          this.company_detail = data.d;
          this.company_detail.name = data.c.name;
          this.company_state = data.s;
          this.volume = data.volume.json_agg;
          this.ready.company = true;
        }
      }
      this.loading = false;
    },
  },
};
</script>
