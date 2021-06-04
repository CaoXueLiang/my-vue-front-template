<template>
  <div class="headerContian">
    <img class="logoimage" src="../../../assets/loginimage/login_logo.png" />
    <div class="rightContian">
      <div class="menuContian">
        <div
          class="menuitem"
          :class="item.isSelect ? 'menuitemselected' : ''"
          v-for="(item, index) in menuArray"
          :key="index"
          @click="clickedItem(index, item)"
        >
          {{ item.title }}
        </div>
      </div>
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
  </div>
</template>

<script>
import { loginOut } from "../../../utils/loginManage";
export default {
  data() {
    return {
      menuArray: [
        { title: "工作台", isSelect: true, path: "/" },
        { title: "消息", isSelect: false, path: "/message" },
        { title: "待办事项", isSelect: false, path: "/workflow" },
        { title: "设置", isSelect: false, path: "/setttings" },
      ],
    };
  },
  methods: {
    handleCommand(command) {
      if (command == "a") {
        loginOut();
        this.$router.push("/login");
      }
    },

    clickedItem(number, item) {
      for (let index = 0; index < this.menuArray.length; index++) {
        let element = this.menuArray[index];
        element.isSelect = number === index;
      }
      this.$router.push(item.path);
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
  padding-left: 5%;
  padding-right: 5%;
  background: #fff;
  z-index: 999999;
}

.logoimage {
  height: 43px;
}

.acatorImage {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
}

.rightContian {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 300px);
}

.menuContian {
  height: $layout-header-height;
  display: flex;
  align-items: center;
  flex-grow: 1;

  .menuitem {
    height: $layout-header-height;
    line-height: $layout-header-height;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    border-bottom: none;
    color: #666;
    margin-right: 8%;
  }
  .menuitemselected {
    color: #1e90ff;
    border-bottom: 2px solid #1e90ff;
  }
}
</style>
