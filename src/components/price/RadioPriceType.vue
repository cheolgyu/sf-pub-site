<template>
  <p>
    <template v-for="item in items" :key="item.id">
      <input
        type="radio"
        @change="change"
        v-model="checkedValues"
        name="aaa"
        :id="'CheckBoxGType_' + item.id"
        :value="item.id"
        :checked="checkedValues==item.id"
      />
      <label :for="'CheckBoxGType_' + item.id">
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
      checkedValues: "close",
      items: [
        {
          id: "close",
          nm: "  종가  ",
        },
        {
          id: "open",
          nm: "  시가  ",
        },
        {
          id: "low",
          nm: "  저가  ",
        },
        {
          id: "high",
          nm: "  고가  ",
        },
      ],
    };
  },
  created() {},
  methods: {
    change(event) {
      this.$emit("update:chked", event.target.value);
    },
  },
  setup() {},
};
</script>
