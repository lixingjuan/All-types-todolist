/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-24 19:46:57
 * @copyright: Copyright (c) 2019, Hand
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleB = {
  state: {
    testVal: "testVal"
  },
  getters: {
    // 对于模块内部的getter, 根结点状态作为第三个参数暴漏出来
    fromBGetRootState(state, getters, rootState) {
      window.console.log("在模块B getters 打印模块的参数列表3", arguments[3]);
      window.console.log("在模块B getters 打印根结点的state", state);
      window.console.log("在模块B getters 打印根结点的getters", getters);
      window.console.log("在模块B getters 打印根结点的rootState", rootState);
    }
  },
  action: {
    // 在模块内部的action，局部状态通过context.state 暴漏出来, 根结点状态为context.rootState
    fromBGetRootState({ state, getters, rootState }) {
      window.console.log("在模块B action 打印根结点的state", state);
      window.console.log("在模块B action 打印根结点的getters", getters);
      window.console.log("在模块B action 打印根结点的rootState", rootState);
    }
  }
};
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     }
//   }
// });

const store = new Vuex.Store({
  modules: {
    b: moduleB
  },
  state: {
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    }
  },
  mutations: {
    delOne(state) {
      state.todos.pop();
    },
    addOne(state, payload) {
      state.todos.push(payload.newTodo);
    }
  },
  actions: {
    addOne({ commit }, payload) {
      commit("addOne", payload);
    }
  }
});

export default store;
