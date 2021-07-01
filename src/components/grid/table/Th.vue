<template>
  <template v-for="item in items" :key="item">
    <template v-if="item.p_type">
      <th
        v-show="p_show[item.p_type]"
        @click="sorting(item)"
        :class="sortable(item.sort)"
      >
        {{ item.txt }}
      </th>
    </template>
    <template v-else>
      <th
        @click="sorting(item)"
        :class="sortable(item.sort)"
      >
        {{ item.txt }}
      </th>
    </template>
  </template>
</template>

<script>
export default {
  props: {
    p_show: Object,
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


