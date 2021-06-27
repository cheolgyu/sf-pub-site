<template>
  <template v-for="item in items" :key="item">
    <th @click="sorting(item)" :class="sortable(item.sort)">{{ item.txt }}</th>
  </template>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  emits: ["chage_sort"],
  data() {
    return {
      id: "",
      desc: true,
    };
  },
  setup() {},
  methods: {
    sorting(item) {
      if (item.sort) {
        this.id = item.id;
        this.desc = !this.desc;
        this.$emit("chage_sort", this.id, this.desc);
      }
    },
    sortable(item) {
      if (item) {
        return "clickable";
      }
    },
  },
};
</script>
<style lang="scss">
.clickable {
  cursor: pointer;
}
</style>


