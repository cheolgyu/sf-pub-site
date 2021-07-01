<template>
  <td class="tc">{{ x1 }}</td>
  <td class="tr">{{ y1 }}</td>
  <td class="tc">{{ x2 }}</td>
  <td class="tr">{{ y2 }}</td>
  <td class="tr">{{ tick }}</td>
  <td class="tr" :class="color()">
    <b>{{ percent }}</b>
  </td>
</template>
f
<script>
export default {
  props: {
    item: Array,
  },
  data() {
    return {
    };
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
      if(dd==""){
        return "";
      }
      return yy + "-" + mm + "-" + dd;
    },
    fmt_money(s) {
      return new Intl.NumberFormat().format(s);
    },
    color() {
      if (this.percent > 0) {
        return "txt-red";
      } else if (this.percent == 0) {
        return "txt-black";
      } else if (this.percent < 0) {
        return "txt-blue ";
      }
    },
  },
};
</script>