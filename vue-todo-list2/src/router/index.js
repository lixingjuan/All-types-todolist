/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-01-29 11:20:01
 * @copyright: Copyright (c) 2019, Hand
 */
import Vue from "vue";
import Router from "vue-router";

import todoList from "@/todoList/index.vue";
import todoList1 from "@/todoList-1/index.vue";
import FatherToSonTodoList from "@/todoList-father-to-son/index.vue";
import TodolistVuex from "@/todolist-vuex/index.vue";
import WatchComputedDemo from "@/vue-test-demos/watch&computed.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    // { path: "/", name: "demo2", component: demo2 },
    // 最简易版的todolist
    { path: "/todoList1", name: "todoList1", component: todoList1 },
    // 加了antd的todolist
    { path: "/todoList-antd", name: "todoList", component: todoList },
    // 使用了 'vuex' 的todolist
    { path: "/todolist-vuex", name: "demo", component: TodolistVuex },
    {
      path: "/todoList-father-to-son",
      name: "VuexTodoList",
      component: FatherToSonTodoList
    },
    {
      path: "/vue-test-demos/watch&computed",
      name: "WatchComputedDemo",
      component: WatchComputedDemo
    }
  ]
});
