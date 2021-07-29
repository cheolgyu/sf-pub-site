<template>
  <p>
    <template v-for="item in items" :key="item.id">
      <input
        type="radio"
        @change="change"
        v-model="checkedValues"
        name="RadioBox_PriceType"
        :id="'RadioBox_PriceType_' + item.id"
        :value="item.id"
        :checked="checkedValues == item.code"
      />
      <label :for="'RadioBox_PriceType_' + item.id">
        {{ item.name }}
      </label>
    </template>
  </p>
</template>
<script>
export default {
  props: {},
  watch: {},
  data() {
    return {
      checkedValues: "close",
      items: [],
    };
  },
  created() {},
  mounted() {
    this.$store.dispatch("get_config", "price_type").then((res) => {
      res.forEach((element) => {
        this.items.push(element);
      });
    });
  },
  methods: {
    change(event) {
      this.$emit("update:chked", event.target.value);
    },
  },
  setup() {},
};
</script>
