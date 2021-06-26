<template>
  <header id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/stock">Stock</router-link> |
    <router-link to="/gamebot">GameBot</router-link>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #d3d3d4;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
