/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 22:36:01
 * @copyright: Copyright (c) 2019, Hand
 */
import React, { Component } from "react";

export default class TodoItems extends Component {
  componentDidMount() {
    console.log("子组件打印的this.props", this.props);
  }

  render() {
    const { itemsProps, handleTurnCheckedProps, handleDeleteItemProps } = this.props;

    return (
      <div>
        <ol>
          {itemsProps.map(item => {
            console.log("ce", item);
            return (
              <li key={item.uuid}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleTurnCheckedProps(item.uuid)}
                />
                {item.text} {item.checked.toString()}
                <button onClick={() => handleDeleteItemProps(item.uuid)}>删除</button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
