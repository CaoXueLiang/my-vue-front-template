import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      //永久存储插件
      reducer(state) {
        return {
          frontToken: state.frontToken,
          permisstionMenuIds: state.permisstionMenuIds,
          permisstionMenus: state.permisstionMenus,
          applicationMenus: state.applicationMenus,
        };
      },
    }),
  ],
  state: {
    permisstionMenuIds: [],
    permisstionMenus: [],
    frontToken: "",
    userInfo: null,
    applicationMenus: [],
  },
  mutations: {
    SET_PERMISSTIONMENUIDS(state, menus) {
      state.permisstionMenuIds = menus;
    },

    SET_PERMISSTIONMENUS(state, menus) {
      state.permisstionMenus = menus;
    },

    SET_APPLICATIONMENUS(state, menus) {
      state.applicationMenus = menus;
    },

    SET_TOKEN(state, token) {
      state.frontToken = token;
    },

    SET_USERINFO(state, info) {
      state.userInfo = info;
    },
  },
  actions: {},
  modules: {},
});
