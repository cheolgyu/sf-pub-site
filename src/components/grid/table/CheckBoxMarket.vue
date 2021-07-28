<template>
  <p>
    <template v-for="item in $store.state.market_list" :key="item.id">
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
    return {};
  },
  computed: {},
  watch: {},
  created() {
    var checked_values = [];
    this.$store.state.market_list.forEach((element) => {
      checked_values.push(element.id);
    });
    this.checked_values = checked_values;
  },
  methods: {
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
