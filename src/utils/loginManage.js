import store from "../store/index";

export function savePermission(menusIds) {
  store.commit("SET_PERMISSTIONMENUIDS", menusIds);
}

export function savePermissionMenus(menusArray) {
  store.commit("SET_PERMISSTIONMENUS", menusArray);
}

export function saveApplicationMenus(menusArray) {
  store.commit("SET_APPLICATIONMENUS", menusArray);
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
  store.commit("SET_PERMISSTIONMENUIDS", []);
  store.commit("SET_PERMISSTIONMENUS", []);
  store.commit("SET_APPLICATIONMENUS", []);
  store.commit("SET_USERINFO", null);
  store.commit("SET_TOKEN", "");
}

export function getPermisstionMenus() {
  let menus = store.state.permisstionMenus;
  return menus;
}

export function getApplicationMenus() {
  let menus = store.state.applicationMenus;
  return menus;
}
