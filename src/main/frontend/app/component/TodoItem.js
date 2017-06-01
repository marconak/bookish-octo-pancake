import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onComplete() {
    this.props.onComplete(this.props.todo);
  }

  onDelete() {
    this.props.onDelete(this.props.todo);
  }

  render() {
    const todo = this.props.todo.completed ? <s>{this.props.todo.value}</s> : <span>{this.props.todo.value}</span>;

    return (
      <li className="list-group-item row">
        <span className="col-md-2">
          <button type="button" className="btn btn-link" onClick={this.onComplete}>
            <span className="glyphicon glyphicon-check" aria-hidden="true" />
          </button>
        </span>
        <span className="col-md-8">{todo}</span>
        <span className="col-md-2">
          <button type="button" className="btn btn-link" onClick={this.onDelete}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
          </button>
        </span>
      </li>
    );
  }
}
