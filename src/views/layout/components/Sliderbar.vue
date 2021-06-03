<template>
  <div class="sliderContian"></div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
.sliderContian {
  width: $layout-slider-width;
  height: calc(100vh - #{$layout-header-height} - 20px);
  background: chocolate;
  overflow: auto;
}
</style>
