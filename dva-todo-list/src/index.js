import dva from "dva";
import "./index.css";
import "antd/dist/antd.css";

// 1. Initialize
// const app = dva();
const app = dva({
  initialState: {
    // 这里的 `products` 是key,就是 `/src/models/products.js` 中的 `namespace` 的值，一定要对应，不然connect之后也找不到这个model
    products: [
      { name: "dva", id: 1 },
      { name: "antd", id: 2 }
    ],
    todos: [
      { text: "你好，我是初始化的todo", checked: false, id: 1 },
      { text: "哈喽哈喽", checked: true, id: 2 }
    ]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/products").default);
app.model(require("./models/todos").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
