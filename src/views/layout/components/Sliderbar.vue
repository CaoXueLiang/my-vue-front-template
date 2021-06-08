<template>
  <div class="sliderContian">
    <div class="backContain" @click="backMethod()">
      <img class="backImage" src="../../../assets/application/backimage.png" />
      <span class="backLabel">返回到工作台</span>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      text-color="#303133"
      active-text-color="#1677ff"
      default-active="0"
    >
      <el-menu-item
        v-for="(item, index) in applicationArray"
        :key="index"
        :index="index.toString()"
      >
        <i class="el-icon-setting"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applicationArray: this.$store.state.applicationMenus,
    };
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
  methods: {
    backMethod() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
.sliderContian {
  width: $layout-slider-width;
  height: calc(100vh - #{$layout-header-height} - 20px);
  background: #fff;
  overflow: auto;
}

.backContain {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  border-bottom: 1px dashed #999;
  .backLabel {
    font-size: 12px;
    color: #999999;
    padding: 20px 0;

    padding-left: 5px;
  }
  .backImage {
    width: 15px;
  }
}

::v-deep.el-menu {
  border-right: none;
}

::v-deep .el-menu-item,
.el-submenu__title {
  height: 45px;
  line-height: 45px;
  border-right: 0px solid #409eff;
}

::v-deep .el-menu-item.is-active {
  border-right: 4px solid #409eff;
  background: #eef5fe;
}
</style>
