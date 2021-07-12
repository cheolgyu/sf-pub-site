<template>
  <td v-show="show_value" class="tc td_date" :class="p_type">{{ x1 }}</td>
  <td v-show="show_value" class="tr td_price" :class="p_type">{{ y1 }}</td>

  <td v-show="show_value" class="tc td_date" :class="p_type">{{ x2 }}</td>
  <td v-show="show_value" class="tr td_price" :class="p_type">{{ y2 }}</td>

  <td v-show="show_value" class="tr" :class="p_type">{{ tick }}</td>
  <td v-show="show_value" class="tr" :class="$fmt.moneyColorClass(percent)">
    {{ percent }}
  </td>
</template>
f
<script>
export default {
  props: {
    p_type: String,
    show_value: Boolean,
    item: Array,
  },
  data() {
    return {};
  },
  setup() {},
  computed: {
    x1() {
      return this.$fmt.date(this.item[0]);
    },
    y1() {
      return this.$fmt.money(this.item[1]);
    },
    x2() {
      return this.$fmt.date(this.item[2]);
    },
    y2() {
      return this.$fmt.money(this.item[3]);
    },
    tick() {
      return this.item[4];
    },
    percent() {
      return this.item[5];
    },
  },
  methods: {},
};
</script>