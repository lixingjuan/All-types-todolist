import React, { Component } from "react";
import uuid from "uuid";
import { DatePicker } from "antd";

import TodoItems from "./components/index";
import "./index.css";
export default class TodoList extends Component {
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
  }

  addItem = () => {
    if (this.state.inputData === "") {
      return;
    }
    this.setState({
      inputData: "",
      items: [
        ...this.state.items,
        {
          text: this.state.inputData,
          uuid: uuid(),
          checked: false
        }
      ]
    });
    this.inputData = "";
  };

  handleDeleteItem = () => {
    window.console.log("父组件打印的", uuid);
    this.setState({
      items: this.state.items.filter(item => item.uuid !== uuid)
    });
  };

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  render() {
    const todoItemsProps = {
      itemsProps: this.state.items,
      handleDeleteItemProps: this.handleDeleteItem
    };

    return (
      <div id="warpper">
        <div>
          <DatePicker />
          <br />
          <DatePicker picker="week" />
          <br />
          <DatePicker picker="month" />
          <br />
          <DatePicker picker="year" />
        </div>
        ,
        <input
          value={this.state.inputData}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              this.addItem();
            }
          }}
          onChange={e => {
            this.setState({ inputData: e.target.value });
            console.log(this.state.inputData);
          }}
        />
        <button onClick={this.addItem}>添加</button>
        <TodoItems {...todoItemsProps} />
      </div>
    );
  }
}
