<template>
  <td v-show="show_value" class="tc" :class="p_type">{{ x1 }}</td>
  <td v-show="show_value" class="tr" :class="p_type">{{ y1 }}</td>
  <td v-show="show_value" class="tc" :class="p_type">{{ x2 }}</td>
  <td v-show="show_value" class="tr" :class="p_type">{{ y2 }}</td>
  <td v-show="show_value" class="tr" :class="p_type">{{ tick }}</td>
  <td v-show="show_value" class="tr" :class="color()">
    <b>{{ percent }}</b>
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
      return this.fmt_date(this.item[0]);
    },
    y1() {
      return this.fmt_money(this.item[1]);
    },
    x2() {
      return this.fmt_date(this.item[2]);
    },
    y2() {
      return this.fmt_money(this.item[3]);
    },
    tick() {
      return this.item[4];
    },
    percent() {
      return this.item[5];
    },
  },
  methods: {
    fmt_date(s) {
      var yy = s.slice(0, 4);
      var mm = s.slice(4, 6);
      var dd = s.slice(6, 8);
      if (dd == "") {
        return "";
      }
      return yy + "-" + mm + "-" + dd;
    },
    fmt_money(s) {
      return new Intl.NumberFormat().format(s);
    },
    color() {
      var str = this.p_type + " ";

      if (this.percent > 0) {
        return str + " txt-red";
      } else if (this.percent == 0) {
        return str + "txt-black";
      } else if (this.percent < 0) {
        return str + "txt-blue ";
      }
    },
  },
};
</script>