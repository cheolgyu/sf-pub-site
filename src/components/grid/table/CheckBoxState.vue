<template>
  <details open>
    <summary>종목상태-상세</summary>
    <table>
      <thead>
        <tr>
          <th>상태</th>
          <th>모두</th>
          <th>활성만 조회</th>
          <th>비활성만 조회</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td class="tc">{{ item.fnm }}</td>
          <td>
            <input
              type="radio"
              @change="change(item, 'all')"
              :id="'CheckBoxState_all_' + item.id"
              :name="item.id"
              value="all"
              :checked="default_chk(item, 'all')"
            />
            <label :for="'CheckBoxState_all_' + item.id"> 모두 </label>
          </td>
          <td>
            <input
              type="radio"
              @change="change(item, 'true')"
              :id="'CheckBoxState_t_' + item.id"
              :name="item.id"
              value="true"
              :checked="default_chk(item, 'true')"
            />
            <label :for="'CheckBoxState_t_' + item.id"> 활성 </label>
          </td>
          <td>
            <input
              type="radio"
              @change="change(item, 'false')"
              :id="'CheckBoxState_f_' + item.id"
              :name="item.id"
              value="false"
              :checked="default_chk(item, 'false')"
            />
            <label :for="'CheckBoxState_f_' + item.id"> 비활성 </label>
          </td>
        </tr>
      </tbody>
    </table>
  </details>
</template>
<script>
const default_state = new Map([
  ["stop", "false"],
  ["clear", "all"],
  ["managed", "all"],
  ["ventilation", "all"],
  ["unfaithful", "all"],
  ["low_liquidity", "all"],
  ["lack_listed", "all"],
  ["overheated", "all"],
  ["caution", "all"],
  ["warning", "all"],
  ["risk", "all"],
]);
export default {
  props: {
    state: Array,
  },
  watch: {},
  data() {
    return {
      selectValues: new Map(default_state),
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
  computed: {},
  methods: {
    default_chk(item, value) {
      var chk = false;
      if (value == "false" && item.id == "stop") {
        chk = true;
      } else if (value == "all" && item.id != "stop") {
        chk = true;
      }
      return chk;
    },
    change(item, value) {
      this.selectValues.set(item.id, value);
      var arr = [];
      for (let [key, value] of this.selectValues) {
        if (value != "all") {
          arr.push(key + "::" + value);
        }
      }
      this.$emit("update:state", arr);
    },
  },
  setup() {},
};
</script>
