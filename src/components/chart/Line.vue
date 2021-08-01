<template >
  <div>
    <canvas ref="myDiv"></canvas>
  </div>
</template>

<script>
import chart from "@/plugins/vue-chart.js";
/*
  *-accent-4 https://vuetifyjs.com/en/styles/colors/#material-colors
  https://www.chartjs.org/docs/latest/api/classes/chart.html#update
*/

export default {
  props: {
    is_ready: Boolean,
  },
  data() {
    return {
      myChart: null,
      config: null,
      type: "line",
      page: 1,
    };
  },
  computed: {},
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      if (this.$route.params.id != "") {
        this.code = this.$route.params.id;
        var p = {
          code: this.$route.params.id,
          page: this.page,
        };
        await this.$store.dispatch("companyStore/getChart", p);
        await this.$store.dispatch("companyStore/getChartNextLine", p);
        this.set();
      }
    },
    set() {
      var data = this.$store.state.companyStore.chart
        .get(this.code)
        .get(this.page);

      var data_line = this.$store.state.companyStore.chartline.get(this.code);
      if (data_line != null) {
        data["line"] = data_line;
      }
      if (data.cp != null) {
        this.draw(data);
      }
    },

    draw(inp) {
      const data = {
        labels: [...inp.date],
        datasets: [
          {
            label: "종가",
            data: [...inp.cp],
            fill: true,
            borderColor: "#FFD600",
            tension: 0.1,
          },
          {
            label: "시가",
            hidden: true,
            data: [...inp.op],
            fill: true,
            borderColor: "#00C853",
            tension: 0.1,
          },
          {
            label: "고가",
            data: [...inp.hp],
            fill: true,
            borderColor: "#D50000",
            tension: 0.1,
          },
          {
            label: "저가",
            data: [...inp.lp],
            fill: true,
            borderColor: "#2962FF",
            tension: 0.1,
          },
        ],
      };
      if (inp.line !== undefined) {
        if (inp.line.low !== undefined) {
          data.datasets.push({
            hidden: true,
            label: "line-저가",
            data: [...inp.line.low],
            fill: true,
            borderColor: "#92affc",
            tension: 0.1,
          });
        }
        if (inp.line.high !== undefined) {
          data.datasets.push({
            hidden: true,
            label: "line-고가",
            data: [...inp.line.high],
            fill: true,
            borderColor: "#ff7d7d",
            tension: 0.1,
          });
        }
        if (inp.line.close !== undefined) {
          data.datasets.push({
            hidden: true,
            label: "line-종가",
            data: [...inp.line.close],
            fill: true,
            borderColor: "#fcf4ca",
            tension: 0.1,
          });
        }
        if (inp.line.open !== undefined) {
          data.datasets.push({
            hidden: true,
            label: "line-시가",
            data: [...inp.line.open],
            fill: true,
            borderColor: "#70ffab",
            tension: 0.1,
          });
        }
      }
      var config = {
        type: this.type,
        data: data,
        options: {
          scales: scales,
          //툴팁
          interaction: {
            mode: "index",
            intersect: false,
          },

          //가로세로 비율
          aspectRatio: window.innerWidth < 600 ? 1 : 3.5,

          //차틑 겹치게
          responsive: true,
          plugins: {
            zoom: zoomOptions,
            legend: {
              labels: {
                color: "#F5F5F5",
                font: {
                  size: 15,
                },
              },
              position: "top",
            },
          },
        },
      };
      this.myChart = chart(this.$refs.myDiv, config);
      this.$emit("update:is_ready", true);
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
const scales_tick = {
  font: {
    size: 15,
    weight: "bold",
  },
  color: "#E0E0E0",
};
const scales_grid = {
  color: "#616161",
};
const scales = {
  //일자
  x: {
    ticks: scales_tick,
    grid: scales_grid,
    title: {
      display: true,
      text: "일자",
      color: "#F5F5F5",
      font: {
        size: 20,
      },
    },
  },
  y: {
    ticks: scales_tick,
    grid: scales_grid,
    title: {
      display: true,
      text: "가격",
      color: "#F5F5F5",
      font: {
        size: 20,
      },
    },
  },
};
const zoomOptions = {
  zoom: {
    wheel: {
      enabled: true,
    },
    pinch: {
      enabled: true,
    },
    drag: {
      enabled: true,
    },
    mode: "x",
  },
  limits: {
    x: { min: -200, max: 200, minRange: 7 },
    y: { min: -200, max: 200, minRange: 7 },
  },
  pan: {
    enabled: true,
    mode: "xy",
    modifierKey: "ctrl",
  },
};
</script>

<style>
</style>
