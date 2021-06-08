<template>
  <div class="login-container">
    <el-form ref="ruleForm" style="width: 30%" class="demo-ruleForm">
      <el-form-item label="" prop="username">
        <el-input
          v-model="username"
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input
          v-model="password"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="handleLogin" type="primary" style="width: 30%"
      >登录</el-button
    >
  </div>
</template>

<script>
import { loginManage } from "../../api/login";
import {
  savePermission,
  saveToken,
  saveUserInfo,
} from "../../utils/loginManage";
import { asyncRoutes } from "../../router/index";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    async handleLogin() {
      let res = loginManage({
        username: "1060422",
        password: "12qwaszx",
        type: "pc_front",
      });
      if (res) {
        saveToken("my_vue_front_token");
        savePermission([
          100, 101, 102, 105, 106, 107, 108, 200, 201, 202, 203, 300, 301, 302,
          303, 400, 401, 402, 403,
        ]);
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: #283443;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.demo-ruleForm {
  color: #fff;
}
</style>
