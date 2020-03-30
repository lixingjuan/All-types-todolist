import React from "react";
import { BrowserRouter as Router, Route, Switch /* Redirect */ } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

import "./App.css";
import index from "./routes/index";
import TodoList from "./routes/TodoList/index";
import TodoListRedux from "./routes/TodoListRedux/index";
import todosReducer from "./reducers/todoReducer";

const store = createStore(todosReducer);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/" exact render={() => <Redirect to="/TodoList" />} /> */}
            <Route path="/" exact component={index} />
            <Route path="/TodoList" component={TodoList} />
            <Route path="/TodoListRedux" component={TodoListRedux} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
