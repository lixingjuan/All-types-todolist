// action types
const INIT_TODOS = "INIT_TODOS";
const ADD_TODO = "ADD_TODO";
const TURN_TODO = "TURN_TODO";
const DELETE_TODO = "DELETE_TODO";

// reducer接受两个参数，当前的state和action
export default function(state, action) {
  if (!state) {
    state = {
      comments: [],
      todos: []
    };
  }
  console.log("action", action);
  console.log();
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
    case TURN_TODO:
      state.todos.forEach(item =>
        item.uuid === action.uuid ? (item.checked = !item.checked) : ""
      );
      console.log(state.todos);
      return {
        // ??? 打印这个的话，即使数据改变了页面也不会重新渲染？为毛？算了，也不重要
        // todos: state.todos
        todos: [...state.todos]
      };
    case DELETE_TODO:
      state.todos.filter(item => item.uuid !== action.uuid);
      return {
        todos: [...state.todos.filter(item => item.uuid !== action.uuid)]
      };
    default:
      return state;
  }
}

// action creators
// TODO: 没感觉 这个action creators有节省多少代码啊？反而还多了
// todoList的action creators
export const addTodo = todo => {
  return { type: "ADD_TODO", todo };
};

export const turnTodo = uuid => {
  return { type: "TURN_TODO", uuid };
};

export const initTodos = todos => {
  return { type: "INIT_TODOS", todos };
};

export const deleteTodo = uuid => {
  return { type: "DELETE_TODO", uuid };
};
