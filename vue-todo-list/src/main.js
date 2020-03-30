/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 20:41:02
 * @copyright: Copyright (c) 2019, Hand
 */
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

import {
  Row,
  Col,
  List,
  Input,
  Button,
  Checkbox,
  // WeekPicker,
  DatePicker,
  notification
  // MonthPicker,
  // RangePicker
} from "ant-design-vue";
// import { Button, Input, Row, Col, List, Checkbox } from "ant-design-vue/lib";
// import "ant-design-vue/dist/antd.css";

import store from "./store";
import router from "./router";

Vue.use(Vuex);

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(List.name, List);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Checkbox.name, Checkbox);
Vue.component(List.Item.name, List.Item);
Vue.component(DatePicker.name, DatePicker);
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
Vue.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker);
Vue.component(DatePicker.WeekPicker.name, DatePicker.WeekPicker);

// 全局配置
notification.config({
  placement: "topRight",
  bottom: "50px",
  duration: 3
});

Vue.prototype.$notification = notification;

Vue.config.productionTip = false; // ? 这个是啥

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
}).$mount("#app");
