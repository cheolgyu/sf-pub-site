<template>
  <div id="stock_nav">
    <router-link to="/stock" custom v-slot="{ href, navigate, isExactActive }">
      <a
        :href="href"
        @click="navigate"
        :class="[
          isExactActive ? 'router-link-active router-link-exact-active' : '',
        ]"
        >홈</a
      >
    </router-link>
    <br />
    <router-link to="/stock/market_hist">마켓내역</router-link> <br />
    <router-link to="/stock/rebound">반등</router-link> <br />
    <router-link to="/stock/day_trading">단타</router-link> <br />
    <router-link to="/stock/monthly_peek">피크 월</router-link>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  setup() {},
};
</script>

   