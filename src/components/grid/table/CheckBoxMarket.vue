<template>
  <p>
    <template v-for="item in market_list" :key="item.id">
      <input
        type="checkbox"
        @change="change"
        v-model="checked_values"
        :id="'CheckBoxMarket_' + item.code"
        :value="item.id"
        checked
      />
      <label :for="'CheckBoxMarket_' + item.code">
        {{ item.name }}
      </label>
    </template>
  </p>
</template>
<script>
export default {
  props: {
    chked: Array,
  },
  data() {
    return {
      market_list: [],
      checked_values: [],
    };
  },
  computed: {},
  watch: {},
  mounted() {
    //this.set_market();
  },
  created() {
    this.set_market();
  },
  methods: {
    set_market() {
      this.$store.dispatch("get_config", "market").then((res) => {
        this.market_list = res;
        res.forEach((element) => {
          this.checked_values.push(element.id);
        });
      });
    },
    change(event) {
      if (this.checked_values.length == 0 && !event.target.checked) {
        event.target.checked = true;
        this.checked_values.push(event.target.value);
      } else {
        this.$emit("update:chked", this.checked_values);
      }
    },
  },
  setup() {},
};
</script>
