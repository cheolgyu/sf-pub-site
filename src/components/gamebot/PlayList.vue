<template>
  <div class="play_area" v-if="loaded">
    <h6>바람의나라 연</h6>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/7n4ax93YGdg"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <hr />
    <br />
    <h6>왕자의게임</h6>
    <iframe
      v-if="loaded"
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/zg9mrhnAg3o"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <hr />
    <br />
    <h6>라오킹</h6>
    <iframe
      v-if="loaded"
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/iBO9y7JlAYw"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
<style lang="scss">
.play_area {
  width: 800px;
  margin: auto;
}
</style>
