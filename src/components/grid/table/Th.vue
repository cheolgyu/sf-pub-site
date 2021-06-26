<template>
  <template v-for="item in items" :key="item">
    <th @click="sorting(item)" :class="sortable(item.sort)">{{ item.txt }}</th>
  </template>
</template>

<script>
export default {
  props: {
    items: Array,
    sort_id: String,
    sort_desc: Boolean
  },
  data() {
    return {
      id: "",
      desc: true,
    };
  },
  setup() {},
  methods: {
    sorting(item) {
        if(item.sort){
            this.id = item.id
            this.desc = !this.desc
            this.$emit('update:sort_id', this.id)
            this.$emit('update:sort_desc', this.desc)
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


