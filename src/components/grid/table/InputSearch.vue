<template>
  <input @change="change" placeholder="종목이름" /><button>엔터</button>
</template>
<script>
export default {
  props: {
    search: String,
  },
  methods: {
    change(event) {
      //console.log(event.target.value);
      this.$emit("update:search", event.target.value);
    },
  },
};
</script>
