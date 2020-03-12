import React, { Component } from "react";
// react是从 `react-redux` 引入的 connect
import { connect } from "dva";

import Todo from "../../components/Todo";

class TodoList extends Component {
  componentDidMount() {
    console.log(this);
    // console.log();
    /* 打印的this.props */
  }

  handleAddtodo = () => {
    //触发dispatch,addTodo
  };

  render() {
    return (
      <div>
        <input />
        <button onClick={this.handleAddtodo}>ADD</button>
        <Todo addTodo={this.handleAddtodo} todos={this.props.todos} />
      </div>
    );
  }
}

// export default connect(({ todos }) => ({ todos }))(TodoList);
/* 等同于下面的写法 */
function mapStateToProps(state) {
  console.log(state);
  // 打印的state
  // {
  //   routing: {},
  //   @@dva: 0,
  //   products: [{ ...}, { ...}] ,
  //   todos: [{ ...}, { ...}],
  // };
  return {
    todos: state.todos
  };
}
export default connect(mapStateToProps)(TodoList);
