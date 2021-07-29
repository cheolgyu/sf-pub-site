<template>
  <div style="overflow-x: auto">
    <table>
      <caption>
        {{
          name
        }}
        <hr/>
        <template v-for="(i, item) in p_show" :key="i">
          <button :disabled="p_show[item]" @click="click_p_type(item)">
            {{ p_text[item] }}
          </button>
        </template>
      </caption>
      <thead>
        <tr>
          <th colspan="2"></th>
          <th
            v-if="p_show['cp']"
            class="p_type_th clickable"
            colspan="6"
            @click="click_p_type('cp')"
          >
            <b>종</b>가
          </th>
          <th
            v-if="p_show['op']"
            class="p_type_th clickable"
            colspan="6"
            @click="click_p_type('op')"
          >
            <b>시</b>가
          </th>
          <th
            v-if="p_show['lp']"
            class="p_type_th clickable"
            colspan="6"
            @click="click_p_type('lp')"
          >
            <b>저</b>가
          </th>
          <th
            v-if="p_show['hp']"
            class="p_type_th clickable"
            colspan="6"
            @click="click_p_type('hp')"
          >
            <b>고</b>가
          </th>
          <th class="p_type_th clickable" colspan="1"></th>
        </tr>
        <tr>
          <TableTh :items="head" @chage_sort="on_sort" :p_show="p_show" />
        </tr>
      </thead>
      <tbody>
        <template v-for="item in items" :key="item.code">
          <TableTr :object="object" :item="item" :p_show="p_show" />
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
import TableTr from "@/components/grid/table/Tr.vue";
import TableTh from "@/components/grid/table/Th.vue";

export default {
  props: {
    object: String,
    name: String,
    items: Array,
  },
  emits: ["chage_sort"],
  components: { TableTr, TableTh },
  watch: {},
  data() {
    return {
      p_text: { cp: "종가", op: "시가", lp: "저가", hp: "고가" },
      p_show: { cp: true, op: false, lp: false, hp: false },
      head: [
        { id: "name", sort: true, txt: "이름" },
        { id: "market", sort: true, txt: "마켓" },

        { p_type: "cp", id: "cp_x1", sort: true, txt: "시작.일" },
        { p_type: "cp", id: "cp_y1", sort: true, txt: "시작.원" },
        { p_type: "cp", id: "cp_x2", sort: true, txt: "종료.일" },
        { p_type: "cp", id: "cp_y2", sort: true, txt: "종료.원" },
        { p_type: "cp", id: "cp_x_tick", sort: true, txt: "누적" },
        { p_type: "cp", id: "cp_y_percent", sort: true, txt: "퍼센트" },
        { p_type: "op", id: "op_x1", sort: true, txt: "시작.일" },
        { p_type: "op", id: "op_y1", sort: true, txt: "시작.원" },
        { p_type: "op", id: "op_x2", sort: true, txt: "종료.일" },
        { p_type: "op", id: "op_y2", sort: true, txt: "종료.원" },
        { p_type: "op", id: "op_x_tick", sort: true, txt: "누적" },
        { p_type: "op", id: "op_y_percent", sort: true, txt: "퍼센트" },
        { p_type: "lp", id: "lp_x1", sort: true, txt: "시작.일" },
        { p_type: "lp", id: "lp_y1", sort: true, txt: "시작.원" },
        { p_type: "lp", id: "lp_x2", sort: true, txt: "종료.일" },
        { p_type: "lp", id: "lp_y2", sort: true, txt: "종료.원" },
        { p_type: "lp", id: "lp_x_tick", sort: true, txt: "누적" },
        { p_type: "lp", id: "lp_y_percent", sort: true, txt: "퍼센트" },
        { p_type: "hp", id: "hp_x1", sort: true, txt: "시작.일" },
        { p_type: "hp", id: "hp_y1", sort: true, txt: "시작.원" },
        { p_type: "hp", id: "hp_x2", sort: true, txt: "종료.일" },
        { p_type: "hp", id: "hp_y2", sort: true, txt: "종료.원" },
        { p_type: "hp", id: "hp_x_tick", sort: true, txt: "누적" },
        { p_type: "hp", id: "hp_y_percent", sort: true, txt: "퍼센트" },

        { id: "link", sort: false, txt: "네이버링크" },
      ],
    };
  },
  methods: {
    click_p_type(p_type) {
      this.p_show[p_type] = !this.p_show[p_type];
    },
    on_sort(id, desc) {
      this.$emit("chage_sort", id, desc);
    },
  },
  setup() {},
};
</script>
