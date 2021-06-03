<template>
  <div class="headerContian">
    <img class="logoimage" src="../../../assets/loginimage/login_logo.png" />
    <el-dropdown @command="handleCommand">
      <img
        class="acatorImage"
        src="http://member-information.oss-cn-beijing.aliyuncs.com/23fb033a6a584cfba36d44513540bb64.jpg"
      />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      if (command == "a") {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.headerContian {
  width: 100%;
  height: $layout-header-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  background: #fff;
  z-index: 999999;
}

.logoimage {
  height: 43px;
}

.acatorImage {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
