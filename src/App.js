import React from "react";

import "./styles/App.css";
import TodoData from "./todoData";
import TodoItem from "./todoItem";
import CreateTask from "./CreateTask";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: TodoData,
    };
  }

  render() {
    const todoItems = this.state.todo.map((item) => {
      return <TodoItem item={item} task={item.task} key={item.id} />;
    });

    return (
      <div className="App">
        <h1>My todo app</h1>
        <CreateTask />
        <div className="todoList">{todoItems}</div>
      </div>
    );
  }
}

export default App;
