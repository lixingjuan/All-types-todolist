<!--
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 12:09:34
 * @copyright: Copyright (c) 2019, Hand
 * 加了antd 的todoList
 -->
<template>
  <div :class="['auto-center', 'wrap']">
    <a-row :type="'flex'" :justify="'center'">
      <a-col :span="8">
        <a-input
          v-model.trim.number="inputData"
          @keyup.enter="addItem()"
          v-bind:placeholder="'请输入代办事项'"
        />
        <p>{{ inputData }}</p>
      </a-col>
      <a-col :span="2">
        <a-button @click="addItem()" type="primary" icon="plus">添加</a-button>
      </a-col>
    </a-row>
    <a-row :type="'flex'">
      <todo-item :itemsProps="items" @handleDeleteItemProps="handleDeleteItem" />
    </a-row>
    <a-date-picker placeholder="Select week" />
    <a-month-picker placeholder="Select month" />
    <a-week-picker placeholder="Select week" />
    <a-range-picker />
    <!-- <a-datePicker /> -->
  </div>
</template>

<script>
import uuid from "uuid";

import TodoItem from "./components/index";

export default {
  name: "todoList",
  components: {
    TodoItem
  },
  data() {
    return {
      inputData: "",
      currentTabComponent: "aa",
      items: [
        {
          text: "打球",
          uuid: uuid(),
          checked: false
        }
      ]
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage() {
      // `this` 指向 vm 实例
      return Date.now();
    }
  },
  methods: {
    addItem() {
      if (this.inputData === "") {
        return;
      }
      this.items.push({ text: this.inputData, uuid: uuid(), checked: false });
      this.inputData = "";
    },
    handleDeleteItem(uuid) {
      window.console.log("父组件打印的", uuid);
      this.items = this.items.filter(item => item.uuid !== uuid);
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 50%;
  margin: 0 auto;
}
.auto-center {
  margin: 0 auto;
}
</style>
