<template>
  <table>
    <tr>
      <td>
        <template v-for="item in items" :key="item">
          <button @click="go(item)" v-if="item == 1">처음</button>

          <button
            @click="go(item)"
            v-if="item > page - 5 && item < page + 5"
            :class="is_cur_btn(item)"
          >
            <b>
              {{ item }}
            </b>
          </button>

          <button @click="go(item)" v-if="item == items">맨끝</button>
        </template>
      </td>
      <td>
        줄수
        <select @change="change">
          <template v-for="item in default_rows_opt" :key="item">
            <option :value="item" :selected="is_cur_rows(item)">
              {{ item }}
            </option>
          </template>
        </select>
      </td>
      <td>
        총 {{total}} 건
        
      </td>
    </tr>
  </table>
</template>
<script>
const default_rows_opt = [10, 20, 30, 40, 50];

export default {
  props: {
    total: Number,
    page: Number,
    rows: Number,
  },
  data(){
      return {
          default_rows_opt: default_rows_opt
      }
  },
  computed: {
    items() {
      return Math.ceil(this.total / this.rows);
    },
  },
  methods: {
    is_cur_rows(item) {
      if (item == this.rows) {
        return true;
      }
      return false;
    },
    is_cur_btn(item) {
      if (item == this.page) {
        return "cur_btn";
      }
      return "not_cur_btn";
    },
    go(item) {
      this.$emit("update:page", item);
    },
    change(event) {
      this.$emit("update:rows", Number(event.target.value));
      this.$emit("update:page", 1);
    },
  },
};
</script>

<style lang="scss">
.cur_btn {
  background-color: burlywood;
}
</style>
