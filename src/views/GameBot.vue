<template>
  <div>
    <h3>
      현재 게임 화면을 캡쳐하여, 원하는 이미지를 찾은후 이벤트 발생시키기.
    </h3>
    <p>yolov4, tensorflow, android</p>
    <br />
    <div class="dl_area">
      <dl>
        <dt>게임봇</dt>
        <dd>현재 화면 캡쳐</dd>
        <dd>클릭 이벤트 or 카카오알림 실행</dd>
        <dt>보글보글</dt>
        <dd>현재 입력되는 소리 캡쳐</dd>
        <dd>진동 or 플래시 or 소리 실행</dd>
      </dl>
    </div>
    <p style="color: white">
      <a
        target="_blank"
        href="https://github.com/cheolgyu?tab=repositories&q=gamebot"
        >github</a
      >
      |
      <a target="_blank" href="https://apkplz.net/developer/highserpot"
        >apk( apkplz )</a
      >
    </p>
    <br />
    <PlayList />
  </div>

</template>
<script>
import PlayList from "@/components/gamebot/PlayList";
export default {
  components: {
    PlayList,
  },
};
</script>
<style lang="scss" scoped>
a {
  color: wheat;
}
.dl_area {
  width: 30%;
  text-align: center;
  margin: auto;
}
dl {
  text-align: left;
}
</style>
