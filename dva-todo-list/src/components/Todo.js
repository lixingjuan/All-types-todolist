import React, { Component } from "react";

export default class Todo extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <ol>
          {todos.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ol>
      </div>
    );
  }
}
