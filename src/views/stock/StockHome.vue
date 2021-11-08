<template>
  <div id="stock_home">
    <div class="nav_item" v-for="item in nav_info" :key="item.k" @click="$router.push(item.to)">
      <h3>{{ item.txt }}</h3>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      nav_info: [
        {
          k: "rebound",
          to: "/stock/rebound",
          txt: "반등",
          desc: " 전날 대비 비율이 아니고 마지막 반등(시작)부터 끝까지의 백분율입니다.",
        },
        {
          k: "day_trading",
          to: "/stock/day_trading",
          txt: "단타",
          desc: "최근 3일의 거래의 저가와 고가의 퍼센트를 구한 다음 평균을 내서 나열합니다.",
        },
        {
          k: "monthly_peek",
          to: "/stock/monthly_peek",
          txt: "거래량",
          desc: "거래량이 몰리는 단위(주,월,분기)를 찾습니다. ",
        },
        {
          k: "market_hist",
          to: "/stock/market_hist",
          txt: "마켓내역",
          desc: "일자별 마켓의 가격내역 입니다.",
        },
        {
          k: "market_hist",
          to: "/stock/market_hist",
          txt: "52주",
          desc: "52주 최저가/최고가와 가까운 순서로 나열합니다.",
        },
      ],
    };
  },
  setup() {},
};
</script>
