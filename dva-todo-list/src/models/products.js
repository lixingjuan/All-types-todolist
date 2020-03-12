export default {
  // 全局state上的key
  namespace: "products",
  // state是初始值，在这里是空数组
  state: [],
  // reducers：等同于redux 中的reducers，接受action, 同步更新state
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    }
  }
};

// 这些最后记得去/src/index 里面引入他
// app.model(require("./models/products").default);
