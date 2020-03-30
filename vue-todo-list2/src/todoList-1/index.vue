<!--
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 12:09:34
 * @copyright: Copyright (c) 2019, Hand
 * 最简易版本的 todolist
 -->
<template>
  <div>
    <input v-model="inputData" @keyup.enter="addItem()" />
    <p></p>
    <button @click="addItem()">添加</button>
    <todo-item :itemsProps="items" @handleDeleteItemProps="handleDeleteItem" />
  </div>
</template>

<script>
import TodoItem from "./components/index";
import uuid from "uuid";

export default {
  name: "todoList",
  data() {
    return {
      inputData: "",
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
  },
  components: {
    TodoItem
  }
};
</script>

<style scoped></style>
