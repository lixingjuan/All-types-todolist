/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-06 16:41:15
 * @copyright: Copyright (c) 2019, Hand
 */
import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <p>
          <a href="/TodoList">111去普通的todoList页面</a>
        </p>
        <p>
          <a href="/TodoListRedux">去使用了redux的todoList页面</a>
        </p>
        <p>
          <a href="/CommentApp">去使用了redux的评论页面</a>
        </p>
      </div>
    );
  }
}
