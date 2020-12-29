import Vue from "vue";
import Vuex from "vuex";
import email from './email'
import editor from './editor'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    email,
    editor
  }
});
