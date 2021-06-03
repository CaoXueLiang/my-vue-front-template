<template>
  <div class="mainContian">
    <Header />
    <MainContent />
  </div>
</template>

<script>
import Header from "./components/Header";
import MainContent from "./components/MainContent";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    MainContent,
  },
};
</script>

<style lang="scss" scoped>
.mainContian {
  width: 100vw;
  height: 100vh;
}
</style>
