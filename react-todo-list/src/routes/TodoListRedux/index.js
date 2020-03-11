/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 22:35:48
 * @copyright: Copyright (c) 2019, Hand
 */
import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";

import TodoItems from "./components/index";
import { addTodo, initTodos, turnTodo, deleteTodo } from "../../reducers/todoReducer";

class TodoListRedux extends Component {
  state = {
    inputData: "",
    items: [
      {
        text: "打球",
        uuid: uuid(),
        checked: false
      }
    ]
  };

  componentDidMount() {
    console.log(this);
    // 触发初始化todos列表
    this.props.toInitTodos([
      {
        text: "你好，我是初始化的第一项todo",
        uuid: uuid(),
        checked: false
      }
    ]);
  }

  handleAddTodo = () => {
    if (this.state.inputData === "") {
      return;
    }
    // 使用 dispatch 触发 addTodo 行为
    this.props.toAddTodo([
      {
        text: this.state.inputData,
        uuid: uuid(),
        checked: false
      }
    ]);
    this.setState({ inputData: "" });
  };

  handleTurnChecked = uuid => {
    // 将用户勾选的项目的uuid传给redux,找到这一项然后取反他的checked
    this.props.toTurnTodoChecked(uuid);
  };

  handleDeleteItem = uuid => {
    this.props.toDeleteTodo(uuid);
  };

  render() {
    const false_todoItemsProps = {
      itemsProps: this.props.todos.filter(item => item.checked === false),
      handleTurnCheckedProps: this.handleTurnChecked,
      handleDeleteItemProps: this.handleDeleteItem
    };

    const true_todoItemsProps = {
      itemsProps: this.props.todos.filter(item => item.checked === true),
      handleTurnCheckedProps: this.handleTurnChecked,
      handleDeleteItemProps: this.handleDeleteItem
    };

    return (
      <div id="warpper">
        <input
          value={this.state.inputData}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              this.handleAddTodo();
            }
          }}
          onChange={e => {
            this.setState({ inputData: e.target.value });
          }}
        />
        <button onClick={this.handleAddTodo}>添加</button>
        <div>
          <p>未完成的</p>
          <TodoItems {...false_todoItemsProps} />
        </div>
        <div>
          <p>已完成的</p>
          <TodoItems {...true_todoItemsProps} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toInitTodos: todos => {
      dispatch(initTodos(todos));
    },
    toAddTodo: todo => {
      dispatch(addTodo(todo));
    },
    toTurnTodoChecked: uuid => {
      dispatch(turnTodo(uuid));
    },
    toDeleteTodo: uuid => {
      dispatch(deleteTodo(uuid));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoListRedux);
