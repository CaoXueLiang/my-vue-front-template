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
import _ from "lodash";
import { loginOut, saveApplicationMenus } from "../../../utils/loginManage";
export default {
  data() {
    return {
      menuArray: [],
    };
  },
  created() {
    this.dealWithMenus();
  },
  methods: {
    dealWithMenus() {
      let tmpArray = _.cloneDeep(this.$store.state.permisstionMenus);
      let anotherArray = [];
      for (let index = 0; index < tmpArray.length; index++) {
        const element = tmpArray[index];
        let dict = {
          title: element.meta.title,
          isSelect: index == 0,
          path: element.path,
        };
        anotherArray.push(dict);
      }
      this.menuArray = anotherArray;
    },

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

      let tmpArray = [];
      let permisstionMenus = this.$store.state.permisstionMenus;
      for (let index = 0; index < permisstionMenus.length; index++) {
        const element = permisstionMenus[index];
        if (element.path === item.path) {
          tmpArray = element.children;
        }
      }
      saveApplicationMenus(tmpArray);

      console.log(tmpArray);

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
