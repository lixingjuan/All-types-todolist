// action types
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const INIT_TODOS = "INIT_TODOS";

// reducer接受两个参数，当前的state和action
export default function(state, action) {
  if (!state) {
    state = {
      comments: [],
      todos: []
    };
  }
  console.log("action", action);
  // 打印的 action
  // {
  //   type: "INIT_TODOS",
  //   todos: [
  //     { text: "你好，我是初始化的", uuid: "3db1bd61-bc9e-4b47-a457-e823c5033d35", checked: false }
  //   ]
  // };
  switch (action.type) {
    // todolist相关的
    case INIT_TODOS:
      return {
        todos: [...state.todos, ...action.todos]
      };
    case ADD_TODO:
      return {
        todos: [...state.todos, ...action.todo]
      };
    case DELETE_TODO:
      return {};
    default:
      return state;
  }
}
