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

    | <router-link to="/stock/bound">반등</router-link> |
    <router-link to="/stock/day_trading">단타</router-link>   
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

   