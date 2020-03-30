<!--
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-12 08:38:01
 * @copyright: Copyright (c) 2019, Hand
 -->
<template>
  <div>
    <h1>todoList</h1>
    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item.id }}
      </li>
    </ul>
    <button @click="popTodo">删除一项todo</button>
    <button @click="pushTodo">添加一项todo</button>
    <!-- <child></child> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { queryTodoItemsAPI } from "@/request/index.js";

export default {
  name: "",
  created() {
    this.queryData();
  },
  mounted() {
    window.console.log("访问state", this.todos);
    window.console.log("访问getters", this.$store.getters);
    window.console.log("使用别名访问getters", this.doneTodosFake);
    window.console.log("访问模块B的状态", this.$store.state.b.testVal);
    window.console.log("在模块B打印根模块的state", this.$store.state.b.getters);
  },
  data() {
    return {
      completedlistData: [],
      unCompletedlistData: []
    };
  },
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      todos: state => state.todos
    }),
    ...mapGetters({
      doneTodosFake: "doneTodos"
    })
  },
  components: {
    // child
  },
  methods: {
    async queryData() {
      const completeRes = queryTodoItemsAPI({ isComplete: true });
      const unCompleteRes = queryTodoItemsAPI({ isComplete: false });
      this.completedlistData = completeRes;
      this.unCompletedlistData = unCompleteRes;
    },
    ...mapActions({
      // 将this.addOneAction() 映射为 `this.$store.dispatch('addOne')`
      addOneAction: "addOne"
    }),
    popTodo() {
      this.$store.commit("delOne");
    },
    pushTodo() {
      // 1. 以载荷方式分发
      /* this.$store.dispatch("addOne", {
        newTodo: { id: 3 }
      }); */
      // 2. 以对象方式分发
      /* this.$store.dispatch({
        type: "addOne",
        newTodo: { id: 3 }
      }); */
      // 3. 直接触发mutation
      /* this.$store.commit("addOne", {
        newTodo: { id: 3 }
      }); */
      // 4. 使用映射别名触发
      this.addOneAction({
        newTodo: { id: 3, done: true }
      }).then(() => {
        window.console.log("dispatch返回的是promise");
      });
    }
  }
};
</script>

<style scoped></style>
