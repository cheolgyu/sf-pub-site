<template>
  <tr>
    <td>
      <b>
        <a :href="to" class="a_color">{{ item.name }}</a>
      </b>
    </td>
    <td>{{ item.market }}</td>

    <TdPrice
      :p_type="p_type_cp"
      :show_value="p_show[p_type_cp]"
      :item="[
        item.cp_x1,
        item.cp_y1,
        item.cp_x2,
        item.cp_y2,
        item.cp_x_tick,
        item.cp_y_percent,
      ]"
    />
    <TdPrice
      :p_type="p_type_op"
      :show_value="p_show[p_type_op]"
      :item="[
        item.op_x1,
        item.op_y1,
        item.op_x2,
        item.op_y2,
        item.op_x_tick,
        item.op_y_percent,
      ]"
    />
    <TdPrice
      :p_type="p_type_lp"
      :show_value="p_show[p_type_lp]"
      :item="[
        item.lp_x1,
        item.lp_y1,
        item.lp_x2,
        item.lp_y2,
        item.lp_x_tick,
        item.lp_y_percent,
      ]"
    />
    <TdPrice
      :p_type="p_type_hp"
      :show_value="p_show[p_type_hp]"
      :item="[
        item.hp_x1,
        item.hp_y1,
        item.hp_x2,
        item.hp_y2,
        item.hp_x_tick,
        item.hp_y_percent,
      ]"
    />
    <td><a target="_blank" :href="link">이동</a></td>
    <!-- <td>{{ item.full_count }}</td> -->
  </tr>
</template>
f
<script>
import TdPrice from "@/components/grid/table/Td_Price.vue";
export default {
  components: {
    TdPrice,
  },
  props: {
    p_show: Object,
    object: String,
    item: Object,
  },
  data() {
    return {
      p_type_cp: "cp",
      p_type_op: "op",
      p_type_lp: "lp",
      p_type_hp: "hp",
      market_link:
        "https://finance.naver.com/sise/sise_index.nhn?code=" + this.item.code,
      price_link:
        "https://finance.naver.com/item/main.nhn?code=" + this.item.code,
    };
  },
  setup() {},
  computed: {
    to() {
      return "/stock/" + this.item.code;
    },
    link() {
      if (this.object == "price") {
        return this.price_link;
      } else {
        return this.market_link;
      }
    },
  },
  methods: {},
};
</script>



