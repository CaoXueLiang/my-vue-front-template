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
      @select="selectItem"
    >
      <el-menu-item
        v-for="(item, index) in applicationArray"
        :key="index"
        :index="index.toString()"
      >
        <span :class="['iconfont', item.meta.icon]" />
        <span slot="title" class="marginleft5">{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
    applicationArray() {
      return this.$store.state.applicationMenus;
    },
  },
  mounted() {},
  methods: {
    backMethod() {
      this.$router.push("/");
    },

    selectItem(item) {
      let path = this.applicationArray[item];
      this.$router.push(path.path);
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

.marginleft5 {
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
}
</style>
