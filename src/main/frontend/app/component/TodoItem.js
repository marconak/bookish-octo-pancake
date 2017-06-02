import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoEdit from './TodoEdit.js';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.onStartEdit = this.onStartEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  onStartEdit() {
    const editing = !this.state.isEditing;
    this.setState({ isEditing: editing });
  }

  handleCancel(event) {
    if (event.keyCode === 27) {
      this.setState({ isEditing: false, value: '' });
    }
  }

  onComplete() {
    var todo = this.props.todo;
    todo.completed = !todo.completed;
    this.props.onUpdate(this.props.todo);
  }

  onDelete() {
    this.props.onDelete(this.props.todo);
  }

  updateTodo(event, value) {
    if (value.length >= 3 && value.length < 256) {
      const todo = this.props.todo;
      todo.value = value;
      this.props.onUpdate(todo);
      this.setState({ isEditing: false });
    }
    event.preventDefault();
  }

  render() {
    const todo = this.props.todo.completed ? <s>{this.props.todo.value}</s> : <span>{this.props.todo.value}</span>;
    var value = this.state.isEditing
      ? <TodoEdit value={this.props.todo.value} updateTodo={this.updateTodo} handleCancel={this.handleCancel} />
      : todo;

    return (
      <li className="list-group-item row">
        <span className="col-md-2">
          <button type="button" className="btn btn-link" onClick={this.onComplete}>
            <span className="glyphicon glyphicon-check" aria-hidden="true" />
          </button>
        </span>
        <span className="col-md-9" onDoubleClick={this.onStartEdit}>{value}</span>
        <span className="col-md-1">
          <button type="button" className="btn btn-link" onClick={this.onDelete}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
          </button>
        </span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
