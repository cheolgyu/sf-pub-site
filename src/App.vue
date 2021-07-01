<template>
  <LayoutBaseHeader />
  <main class="rule-1">
    <router-view />
  </main>
  <LayoutBaseFooter />
</template>

<script>
import LayoutBaseHeader from "@/components/layout/base/Header.vue";
import LayoutBaseFooter from "@/components/layout/base/Footer.vue";
export default {
  components: {
    LayoutBaseHeader,
    LayoutBaseFooter,
  },
  setup() {},
};
</script>
<style lang="scss">

$variable: value 1;

</style>
