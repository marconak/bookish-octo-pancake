import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: ''
    };
    this.onStartEdit = this.onStartEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  onStartEdit() {
    const editing = !this.state.isEditing;
    this.setState({ isEditing: editing, value: this.props.todo.value });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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

  updateTodo(event) {
    if (this.state.value.length >= 3 && this.state.value.length < 256) {
      const todo = this.props.todo;
      todo.value = this.state.value;
      this.props.onUpdate(todo);
      this.setState({ isEditing: false, value: '' });
    }
    event.preventDefault();
  }

  editForm() {
    return (
      <form noValidate onSubmit={this.updateTodo}>
        <input
          type="text"
          name="value"
          className="form-control"
          placeholder="Update todo (Min 3 characters)"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleCancel}
        />
      </form>
    );
  }

  render() {
    const todo = this.props.todo.completed ? <s>{this.props.todo.value}</s> : <span>{this.props.todo.value}</span>;
    var value = this.state.isEditing ? this.editForm() : todo;

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
