<template>
  <div id="stock_view">
    <h1>저가에 사서 고가에 팔기</h1>{{ $store.state.priceStore.info }}
    <hr />
    <router-view></router-view>
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
