import router from "./router";
import store from "./store";
import { constRoutes, asyncRoutes } from "@/router";
import _ from "lodash";
import {
  IsHasToken,
  IsHasUserInfo,
  saveUserInfo,
  savePermissionMenus,
} from "./utils/loginManage";

const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = IsHasToken();
  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
    } else {
      debugger;
      const hasGetUserInfo = IsHasUserInfo();
      if (hasGetUserInfo) {
        next();
      } else {
        let permissionArray = getPermissionMenus();
        saveUserInfo({ name: "小明", age: "18", height: "180cm" });
        savePermissionMenus(permissionArray);
        router.options.routes = [...constRoutes, ...permissionArray];
        router.addRoutes(permissionArray);
        next({ ...to, replace: true });
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach(() => {
  // finish progress bar
});

function getPermissionMenus() {
  let cloneMenuArray = _.cloneDeep(asyncRoutes);
  console.log(cloneMenuArray);
  let filterArray = filterByMenuId(cloneMenuArray);
  filterArray.forEach((firstElement) => {
    if (firstElement.children) {
      let firstChildren = filterByMenuId(firstElement.children);
      firstElement.children = firstChildren;

      firstChildren.forEach((secondElement) => {
        if (secondElement.children) {
          let secondChildren = filterByMenuId(secondElement.children);
          secondElement.children = secondChildren;

          secondChildren.forEach((thirdElement) => {
            if (thirdElement.children) {
              let thirdChildren = filterByMenuId(thirdElement.children);
              thirdElement.children = thirdChildren;
            }
          });
        }
      });
    }
  });
  return filterArray;
}

function filterByMenuId(menusArray) {
  let menuIdArray = store.state.permisstionMenuIds;
  return menusArray.filter((item) => menuIdArray.includes(item.meta.menuId));
}
