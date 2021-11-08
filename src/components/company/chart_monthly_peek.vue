<template >
  <details open>
    <summary>
      피크월( 거래량 )
      <template v-if="data == null">{{ this.empty_txt }}</template>
    </summary>
    <div v-if="data[0] != null">
      <canvas ref="myDiv_1"></canvas>
    </div>
    <div v-if="data[1] != null">
      <canvas ref="myDiv_2"></canvas>
    </div>
    <div v-if="data[2] != null">
      <canvas ref="myDiv_3"></canvas>
    </div>
  </details>
</template>

<script>
import chart from "@/plugins/vue-chart.js";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      bg_color: [
        "#E57373",
        "#F06292",
        "#BA68C8",
        "#9575CD",
        "#7986CB",
        "#64B5F6",
        "#4FC3F7",
        "#4DD0E1",
        "#4DB6AC",
        "#81C784",
        "#AED581",
        "#DCE775",
      ],
      empty_txt: ": 해당사항 없음.",
      myChart: null,
      config: null,
      type: "doughnut",
    };
  },
  computed: {},
  mounted() {
    console.log(this.data);
    this.set();
  },
  methods: {
    set() {
      console.log(this.data);
      if (this.data != null && this.data !== undefined) {
        console.log(this.data[0].max_rate);
        this.draw(this.data[0]);
        this.draw(this.data[1]);
        this.draw(this.data[2]);
      }
    },

    draw(inp) {
      var data = {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: this.bg_color,
            hoverOffset: 4,
          },
          {
            data: [],
            backgroundColor: this.bg_color,
            hoverOffset: 4,
          },
        ],
      };

      var unit_txt = "";
      switch (inp.unit_type) {
        case 1:
          unit_txt = " 주 ";
          break;

        case 2:
          unit_txt = " 월 ";
          break;
        case 3:
          unit_txt = " 분기 ";
          break;
      }

      var abc = new Object();
      Object.keys(inp.max_rate).forEach((key) => {
        data.datasets[1].data.push(inp.max_rate[key]);
        data.labels.push(key + unit_txt);
      });
      Object.keys(inp.min_rate).forEach((key) => {
        data.datasets[0].data.push(inp.max_rate[key]);
        data.labels.push(key + unit_txt);
      });

      var config = {
        type: this.type,
        data: data,
        options: {
          //가로세로 비율
          aspectRatio: window.innerWidth < 600 ? 1 : 3.5,

          //차틑 겹치게
          responsive: true,
        },
      };

      switch (inp.unit_type) {
        case 1:
          this.myChart = chart(this.$refs.myDiv_1, config);
          break;

        case 2:
          this.myChart = chart(this.$refs.myDiv_2, config);
          break;
        case 3:
          this.myChart = chart(this.$refs.myDiv_3, config);
          break;
      }
    },
  },
};
</script>

<style>
</style>
