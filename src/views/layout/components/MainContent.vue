<template>
  <div class="mainContianstyle">
    <div v-if="key === '/workstage'">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>
    <div v-if="key !== '/workstage'" class="flex_spacebetween">
      <Sliderbar />
      <div class="sonContian">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sliderbar from "./Sliderbar";
export default {
  components: {
    Sliderbar,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
.mainContianstyle {
  width: 100%;
  height: calc(100vh - #{$layout-header-height});
  background: #f0f5f8;
  overflow: auto;
  padding-top: 10px;
  padding-bottom: 10px;
}

.sonContian {
  width: calc(100vw - #{$layout-slider-width} - 10px);
  height: calc(100vh - #{$layout-header-height} - 20px);
  background: #fff;
  overflow: auto;
  padding: 20px;
}

.flex_spacebetween {
  display: flex;
  justify-content: space-between;
}
</style>
