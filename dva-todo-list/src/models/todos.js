export default {
  // 全局state上的key
  namespace: "todos",
  // state是初始值，在这里是空数组
  state: [],
  // reducers：等同于redux 中的reducers，接受action, 同步更新state
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    addTodo(state, { payload: todo }) {
      // 这里打印arguments,
      // 参数1是这个models 的 state
      // 参数2是，
      /* {
        type: '/todos/addTodo',
        payload:1
      } */
      console.log("models里的reducers里打印的arguments", arguments);
      return [...state, todo];
    }
  }
};

// 这些昨晚记得去/src/index 里面引入他
// app.model(require("./models/products").default);
