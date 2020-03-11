// action creators
// TODO: 没感觉 这个action creators有节省多少代码啊？反而还多了
// todoList的action creators
export const addTodo = todo => {
  return { type: "ADD_TODO", todo };
};

export const initTodos = todos => {
  return { type: "INIT_TODOS", todos };
};

export const deleteTodo = todo => {
  return { type: "DELETE_TODO", todo };
};
