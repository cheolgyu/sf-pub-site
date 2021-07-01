<template>
  <LayoutBaseHeader />
  <main>
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
html {
  background-color: black;
}
main {
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fbfbfb;
}
</style>
