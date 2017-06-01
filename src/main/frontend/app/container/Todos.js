import React, { Component } from 'react';

import TodoAdd from '../component/TodoAdd.js';
import TodoList from '../component/TodoList.js';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.onAdd = this.onAdd.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onComplete(inTodo) {
    var todos = this.state.todos.map(function(todo) {
      if (todo.id === inTodo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: todos });
  }

  onAdd(todo) {
    var todos = this.state.todos;
    todos.unshift({ value: todo, id: Math.random(), completed: false });
    this.setState({ todos: todos });
  }

  onDelete(todo) {
    //TODO
    console.log('DELETE', todo.id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <TodoAdd onAdd={this.onAdd} />
          <TodoList todos={this.state.todos} onComplete={this.onComplete} onDelete={this.onDelete} />
        </div>
      </div>
    );
  }
}
