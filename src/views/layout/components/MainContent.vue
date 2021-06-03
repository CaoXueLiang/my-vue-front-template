<template>
  <div class="mainContianstyle">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
.mainContianstyle {
  width: 100%;
  height: calc(100vh - #{$layout-header-height});
  background: #f0f5f8;
  overflow: auto;
}
</style>
