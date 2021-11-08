<template>
  <p>
    <label> 단위 선택 </label>
    <select @change="change" v-model="value.up">
      <option :value="item.code" v-for="item in list" :key="item.id">
        {{ item.name }}
      </option>
    </select>
    > 
    <template v-if="value.up == 1">
      <label> 주 선택 </label>
      <select @change="change" v-model="value.down">
        <option value="0">모두</option>
        <option v-for="num in 53" :key="num" :value="num" v-bind="num">
          {{ num }}
        </option>
      </select>
    </template>
    <template v-if="value.up == 2">
      <label> 월 선택 </label>
      <select @change="change" v-model="value.down">
        <option value="0">모두</option>
        <option v-for="num in 12" :key="num" :value="num" v-bind="num">
          {{ num }}
        </option>
      </select>
    </template>
    <template v-if="value.up == 3">
      <label> 분기 선택 </label>
      <select @change="change" v-model="value.down">
        <option value="0">모두</option>
        <option v-for="num in 4" :key="num" :value="num" v-bind="num">
          {{ num }}
        </option>
      </select>
    </template>
  </p>
</template>
<script>
export default {
  props: {
    chked: Array,
  },
  data() {
    return {
      list: [],
      value: {
        up: "",
        down: "",
      },
    };
  },
  computed: {},
  watch: {},
  mounted() {
    //this.set_market();
  },
  created() {
    this.set_default();
  },
  methods: {
    set_default() {
      this.$store.dispatch("get_config", "unit_type").then((res) => {
        this.list = res;
        if (this.list.length > 1) {
          this.value.up = this.list[1].code;
          this.value.down = 0;
          this.change();
        }
      });
    },
    change(event) {
      this.$emit("update:selected", this.value);
    },
  },
  setup() {},
};
</script>
