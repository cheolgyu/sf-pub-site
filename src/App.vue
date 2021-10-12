<template>
  <div>
    <div id="menu_btn_area">
      <img :src="menu_img" alt="" id="menu_btn" @click="menu_btn_click" />
    </div>
    <div id="mask" @click="mask_close"></div>
    <div class="container">
      <LayoutBaseLeft />
      <div id="right_area">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import LayoutBaseLeft from "@/components/layout/base/Left.vue";
import LayoutBaseFooter from "@/components/layout/base/Footer.vue";
export default {
  components: {
    LayoutBaseLeft,
    LayoutBaseFooter,
  },
  setup() {},
  data() {
    return {
      menu_img: require("@/assets/image/menu.png"),
    };
  },
  methods: {
    mask_close() {
      this.menu_open = false;
      document.querySelector("#mask").style.display = "none";
      document.querySelector("#left_area").className = "left_area_off";
    },
    menu_btn_click(e) {
      var left_area = document.querySelector("#left_area").className;
      if (left_area == "left_area_on") {
        this.mask_close();
      } else {
        this.open();
      }
    },
    open() {
      this.menu_open = true;
      document.querySelector("#mask").style.display = "block";
      document.querySelector("#left_area").className = "left_area_on";
    },
  },
};
</script>
<style lang="scss">
$variable: value 1;
</style>
