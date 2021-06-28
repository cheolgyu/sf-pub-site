<template>
  <hr />
  <h3>{{ title() }}</h3>
  <CompanyDetail :data="company_detail" />
  <br />
  <CompanyState :data="company_state" />
  <br />
  <details open>
    <summary>그래프</summary>
    <ChartLine />
  </details>
</template>
<script>
/*eslint no-unused-vars: "error"*/
import ChartLine from "@/components/chart/Line.vue";
import CompanyDetail from "@/components/company/detail.vue";
import CompanyState from "@/components/company/state.vue";

export default {
  components: { ChartLine, CompanyDetail, CompanyState },
  data() {
    return {
      param: { code: "", page: 1 },
      loading: false,
      post: null,
      error: null,

      company_code: {},
      company_detail: {},
      company_state: {},
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
      var aa = this.company_code.name + "(" + this.company_code.code + ")"
      return aa;
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
        this.company_detail = data.d;
        this.company_detail.name = data.c.name;
        this.company_state = data.s;
      }
      this.loading = false;
    },
  },
};
</script>
