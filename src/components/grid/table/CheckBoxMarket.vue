<template>
  <p>
    <template v-for="item in market" :key="item.id">
      <input
        type="checkbox"
        @change="change"
        v-model="checkedValues"
        :id="'CheckBoxMarket_' + item.id"
        :value="item.id"
        checked
      />
      <label :for="'CheckBoxMarket_' + item.id">
        {{ item.nm }}
      </label>
    </template>
  </p>
</template>
<script>
export default {
  props: {
    chked: Array,
  },
  watch: {},
  data() {
    return {
      checkedValues: ["KOSPI", "KOSDAQ", "KONEX"],
      market: [
        {
          id: "KOSPI",
          nm: "코스피 | ",
        },
        {
          id: "KOSDAQ",
          nm: "코스닥 | ",
        },
        {
          id: "KONEX",
          nm: "코넥스",
        },
      ],
    };
  },
  created() {},
  methods: {
    change(event) {
      if (this.checkedValues.length == 0 && !event.target.checked) {
        event.target.checked = true;
        this.checkedValues.push(event.target.value);
      } else {
        this.$emit("update:chked", this.checkedValues);
      }
    },
  },
  setup() {},
};
</script>

<style lang="scss">
</style>
