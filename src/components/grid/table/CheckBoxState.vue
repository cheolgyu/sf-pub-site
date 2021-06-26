<template>
  <p>
    <template v-for="item in list" :key="item.id">
      <input
        type="radio"
        @change="change"
        :id="'CheckBoxState' + item.id"
        :value="item.id"
        checked
      />
      <label :for="'CheckBoxState' + item.id">
        {{ item.snm }}
      </label>
    </template>
  </p>
</template>
<script>
export default {
  props: {
    state: String,
  },
  watch: {},
  data() {
    return {
      list: [
        {
          id: "stop",
          val: true,
          fnm: "매매거래정지",
          snm: "정지",
          color: "blue darken-4",
        },
        {
          id: "clear",
          val: true,
          fnm: "정리매매 종목",
          snm: "정리",
          color: "light-blue darken-4",
        },
        {
          id: "managed",
          val: true,
          fnm: "관리종목",
          snm: "관리",
          color: "cyan darken-4",
        },
        {
          id: "ventilation",
          val: true,
          fnm: "투자주의환기종목",
          snm: "환기",
          color: "red lighten-2",
        },
        {
          id: "unfaithful",
          val: true,
          fnm: "불성실공시",
          snm: "불성실",
          color: "indigo lighten-1",
        },
        {
          id: "low_liquidity",
          val: true,
          fnm: "단일가매매대상 초저유동성종목",
          snm: "유동",
          color: "deep-purple lighten-2",
        },
        {
          id: "lack_listed",
          val: true,
          fnm: "상장주식부족 우선주",
          snm: "우선주",
          color: "purple lighten-2",
        },
        {
          id: "overheated",
          val: true,
          fnm: "단기과열종목",
          snm: "과열",
          color: "red  lighten-2",
        },
        {
          id: "caution",
          val: true,
          fnm: "투자주의종목",
          snm: "주의",
          color: "yellow darken-4",
        },
        {
          id: "warning",
          val: true,
          fnm: "투자경고종목",
          snm: "경고",
          color: "orange darken-4",
        },
        {
          id: "risk",
          val: true,
          fnm: "투자위험종목",
          snm: "위험",
          color: "red darken-4",
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
