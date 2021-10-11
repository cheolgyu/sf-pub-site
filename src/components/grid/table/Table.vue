<template>
  <div style="overflow-x: auto">
    <table>
      <caption>
        {{
          name
        }}
        <hr />
        <div v-for="(i, item) in p_show" :key="i">
          <input
            type="checkbox"
            :name="i"
            :id="i"
            :checked="p_show[item]"
            @click="click_p_type(item)"
          />
          <label :for="i">
            {{ p_text[item] }}
          </label>
        </div>
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
          <TableTh :items="head" @chage_sort="on_sort" :p_show="p_show"  :short_content="short_content"  />
        </tr>
      </thead>
      <tbody>
          <TableTr v-for="item in items" :key="item.code" :object="object" :item="item" :p_show="p_show" :short_content="short_content"   />
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
      p_show: { cp: true, op: true, lp: true, hp: true },
      short_content: true,
      head: [
        { id: "name", sort: true, txt: "이름" },
        { id: "market", sort: true, txt: "마켓" },

        { p_type: "cp", is_short_content:true, id: "cp_x1", sort: true, txt: "시작.일" },
        { p_type: "cp", is_short_content:true, id: "cp_y1", sort: true, txt: "시작.원" },
        { p_type: "cp", is_short_content:true, id: "cp_x2", sort: true, txt: "종료.일" },
        { p_type: "cp", is_short_content:true, id: "cp_y2", sort: true, txt: "종료.원" },
        { p_type: "cp", is_short_content:false, id: "cp_x_tick", sort: true, txt: "누적" },
        { p_type: "cp", is_short_content:false, id: "cp_y_percent", sort: true, txt: "퍼센트" },
        { p_type: "op", is_short_content:true, id: "op_x1", sort: true, txt: "시작.일" },
        { p_type: "op", is_short_content:true, id: "op_y1", sort: true, txt: "시작.원" },
        { p_type: "op", is_short_content:true, id: "op_x2", sort: true, txt: "종료.일" },
        { p_type: "op", is_short_content:true, id: "op_y2", sort: true, txt: "종료.원" },
        { p_type: "op", is_short_content:false, id: "op_x_tick", sort: true, txt: "누적" },
        { p_type: "op", is_short_content:false, id: "op_y_percent", sort: true, txt: "퍼센트" },
        { p_type: "lp", is_short_content:true, id: "lp_x1", sort: true, txt: "시작.일" },
        { p_type: "lp", is_short_content:true, id: "lp_y1", sort: true, txt: "시작.원" },
        { p_type: "lp", is_short_content:true, id: "lp_x2", sort: true, txt: "종료.일" },
        { p_type: "lp", is_short_content:true, id: "lp_y2", sort: true, txt: "종료.원" },
        { p_type: "lp", is_short_content:false, id: "lp_x_tick", sort: true, txt: "누적" },
        { p_type: "lp", is_short_content:false, id: "lp_y_percent", sort: true, txt: "퍼센트" },
        { p_type: "hp", is_short_content:true, id: "hp_x1", sort: true, txt: "시작.일" },
        { p_type: "hp", is_short_content:true, id: "hp_y1", sort: true, txt: "시작.원" },
        { p_type: "hp", is_short_content:true, id: "hp_x2", sort: true, txt: "종료.일" },
        { p_type: "hp", is_short_content:true, id: "hp_y2", sort: true, txt: "종료.원" },
        { p_type: "hp", is_short_content:false, id: "hp_x_tick", sort: true, txt: "누적" },
        { p_type: "hp", is_short_content:false, id: "hp_y_percent", sort: true, txt: "퍼센트" },

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
