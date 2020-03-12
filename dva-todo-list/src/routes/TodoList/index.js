import React, { Component } from "react";
// react是从 `react-redux` 引入的 connect
import { connect } from "dva";
import uuid from "uuid";

import Todo from "../../components/Todo";

class TodoList extends Component {
  state = {
    inputText: ""
  };

  componentDidMount() {
    console.log("生命周期里面打印的this", this);
  }

  handleAddtodo = (...args) => {
    //触发dispatch,addTodo
    const { dispatch } = this.props;
    dispatch({
      type: "todos/addTodo",
      payload: {
        text: this.state.inputText,
        id: uuid(),
        checked: false
      }
    });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputText}
          onChange={e => {
            // 这里的e.target打印就是
            // <input value='hahahahah'>
            console.log("e.target", e.target);
            this.setState({ inputText: e.target.value });
          }}
        />
        <button onClick={this.handleAddtodo}>ADD</button>
        <Todo addTodo={this.handleAddtodo} todos={this.props.todos} />
      </div>
    );
  }
}

// export default connect(({ todos }) => ({ todos }))(TodoList);
/* 等同于下面的写法 */
function mapStateToProps(state) {
  console.log("在mapStateProps里打印的参数=>state", state);
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
