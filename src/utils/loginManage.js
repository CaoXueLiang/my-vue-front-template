import store from "../store/index";

export function savePermission(menusIds) {
  store.commit("SET_PERMISSTIONMENU", menusIds);
}

export function saveToken(token) {
  store.commit("SET_TOKEN", token);
}

export function saveUserInfo(userInfo) {
  store.commit("SET_USERINFO", userInfo);
}

export function IsHasToken() {
  let token = store.state.frontToken;
  return token.length;
}

export function IsHasUserInfo() {
  let userInfo = store.state.userInfo;
  return userInfo ? true : false;
}

export function loginOut() {
  store.commit("SET_TOKEN", "");
}
