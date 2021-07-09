<template >
  <details open>
    <summary>피크월( 거래량 )</summary>
    <div v-if="data == null">해당사항 없음.</div>
    <div v-if="data !== undefined">
      <canvas ref="myDiv"></canvas>
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
      myChart: null,
      config: null,
      type: "doughnut",
    };
  },
  computed: {},
  mounted() {
    this.set();
  },
  methods: {
    set() {
      this.draw(this.data["list"]);
    },

    draw(inp) {
      var data = {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
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
            hoverOffset: 100,
          },
        ],
      };

      var abc = new Object();
      inp.forEach((element) => {
        Object.assign(abc, element);
      });

      Object.keys(abc).forEach((element) => {
        abc[element];
        data.datasets[0].data.push(abc[element]);
        data.labels.push(element + "월");
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
      this.myChart = chart(this.$refs.myDiv, config);
      //this.myChart.update();
    },
  },
};
/*
=======================================================================
=======================================================================
=======================================================================
=======================================================================
=======================================================================
=======================================================================

*/
</script>

<style>
</style>
