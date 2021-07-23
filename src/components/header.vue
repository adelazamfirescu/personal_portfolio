<template>
  <div class="banner q-ml-xl">
    <div class="child-text">
      <h6 class="text-h6 text-weight-bold">{{ name }}</h6>
    </div>
    <div class="child-color bg-amber-8"></div>
  </div>
</template>

<script>
export default {
  name: "header-section",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 100px;
  width: 222px;
  .child-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 102px;
    height: 100%;
    .text-h6 {
      margin: 0;
      position: absolute;
      left: 0;
      top: 34%;
      z-index: 3;
      font-size: 36px;
      width: 222px;
    }
  }
  .child-color {
    position: absolute;
    top: 0px;
    left: 102px;
    height: 100%;
    width: 120px;
  }
}
</style>
