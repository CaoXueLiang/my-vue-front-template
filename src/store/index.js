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
          permisstionMenus: state.permisstionMenus,
        };
      },
    }),
  ],
  state: {
    permisstionMenus: [],
    frontToken: "",
    userInfo: null,
  },
  mutations: {
    SET_PERMISSTIONMENU(state, menus) {
      state.permisstionMenus = menus;
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
