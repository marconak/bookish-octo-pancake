import React, { Component } from 'react';

import TodoItem from './TodoItem.js';

export default class TodoList extends Component {
  render() {
    var todos = this.props.todos.map(item => {
      var todo = item;
      return <TodoItem key={item.id} todo={todo} onComplete={this.props.onComplete} onDelete={this.props.onDelete} />;
    });
    return (
      <ul className="list-group">
        {todos}
      </ul>
    );
  }
}
