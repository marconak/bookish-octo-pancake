import React, { Component } from 'react';

import TodoAdd from '../component/TodoAdd.js';
import TodoList from '../component/TodoList.js';
import Pagination from '../component/Pagination.js';

import { addTodo, updateTodo, deleteTodo, getTodos } from '../actions.js';

const PER_PAGE = 10;

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      pagination: { page: 1, perPage: PER_PAGE, totalPages: 0, totalElements: 0 }
    };
    this.onAdd = this.onAdd.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
    this.onPagination = this.onPagination.bind(this);
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    getTodos(this.state.pagination.page, PER_PAGE).then(todos => {
      this.setState({
        pagination: todos.pagination,
        todos: todos.content
      });
    });
  }

  onUpdate(inTodo) {
    updateTodo(inTodo).then(updated => {
      var todos = this.state.todos.map(todo => {
        return todo.id === updated.id ? updated : todo;
      });
      this.setState({ todos: todos });
    });
  }

  onAdd(todo) {
    addTodo({ value: todo, completed: false }).then(newTodo => {
      var todos = this.state.todos;
      todos.unshift(newTodo);
      var newTodos = todos.slice(0, PER_PAGE);
      this.setState({ todos: newTodos });
    });
  }

  onDelete(todo) {
    deleteTodo(todo.id).then(() => {
      this.loadTodos();
    });
  }

  onPagination(number) {
    var pagination = this.state.pagination;
    pagination.page = pagination.page + number;
    this.setState({ pagination: pagination });
    this.loadTodos();
  }

  render() {
    const newerClass = this.state.pagination.page <= 1 ? 'disabled' : '';
    const olderClass = this.state.pagination.page >= this.state.pagination.totalPages ? 'disabled' : '';

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <TodoAdd onAdd={this.onAdd} />
          <TodoList todos={this.state.todos} onUpdate={this.onUpdate} onDelete={this.onDelete} />
          <Pagination onPagination={this.onPagination} newerClass={newerClass} olderClass={olderClass} />
        </div>
      </div>
    );
  }
}
