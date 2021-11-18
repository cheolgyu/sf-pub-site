<template >
  <details open>
    <summary>
      피크월( 거래량 )
      <template v-if="data == null">{{ this.empty_txt }}</template>
    </summary>
    <div>
      <div v-if="data[0] != null" class="row_chart_monthly_peek">
        <canvas ref="10"></canvas>
        <canvas ref="11"></canvas>
      </div>
      <div v-if="data[1] != null" class="row_chart_monthly_peek">
        <canvas ref="20"></canvas>
        <canvas ref="21"></canvas>
      </div>
      <div v-if="data[2] != null" class="row_chart_monthly_peek">
        <canvas ref="30"></canvas>
        <canvas ref="31"></canvas>
      </div>
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
      myChart: [],
      config: null,
      type: "pie",
      txt: {
        unit: ["", "주", "월", "분기"],
        max: "평균 이상",
        min: "평균 이하",
      },
    };
  },
  computed: {},
  mounted() {
    this.set();
  },
  methods: {
    set() {
      if (this.data != null && this.data !== undefined) {
        this.draw_max_min(this.data[0]);
        this.draw_max_min(this.data[1]);
        this.draw_max_min(this.data[2]);
      }
    },

    draw_max_min(inp) {
      var max_cfg = this.set_data(
        inp.unit_type,
        inp.max_rate,
        this.chart_cfg(),
        this.txt.max
      );
      var min_cfg = this.set_data(
        inp.unit_type,
        inp.min_rate,
        this.chart_cfg(),
        this.txt.min
      );
      var refs_nm_max = inp.unit_type + "0";
      var refs_nm_min = inp.unit_type + "1";

      this.myChart[inp.unit_type] = [];
      this.myChart[inp.unit_type].push(chart(this.$refs[refs_nm_max], max_cfg));
      this.myChart[inp.unit_type].push(chart(this.$refs[refs_nm_min], min_cfg));
    },

    set_data(unit_type, obj, cfg, max_min_txt) {
      var arr_label = [];
      var arr_data = [];
      Object.keys(obj).forEach((key) => {
        var lb = key + this.txt.unit[unit_type];
        var d = obj[key];
        arr_label.push(lb);
        arr_data.push(d);
      });
      cfg.data.datasets[0].data = arr_data;
      cfg.data.labels = arr_label;
      cfg.options.plugins.title.text =
        max_min_txt + " " + this.txt.unit[unit_type] + "";
      return cfg;
    },

    chart_cfg() {
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

      var config = {
        type: this.type,
        data: data,
        options: {
          // 가로세로 비율
          //aspectRatio: window.innerWidth < 600 ? 1 : 3.5,
          plugins: {
            legend: {
              position: "top",
              labels: {
                // This more specific font property overrides the global property
                font: {
                  size: 20,
                },
              },
            },
            title: {
              display: true,
              text: "거래량1",
              // This more specific font property overrides the global property
              font: {
                size: 20,
              },
            },
          },
          responsive: false,
        },
      };

      return config;
    },
  },
};
</script>

<style>
.row_chart_monthly_peek {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
