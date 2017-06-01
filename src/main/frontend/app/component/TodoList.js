import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.js';

const TodoList = ({ todos, onDelete, onComplete }) => {
  const inTodos = todos.map(item => {
    var todo = item;
    return <TodoItem key={item.id} todo={todo} onComplete={onComplete} onDelete={onDelete} />;
  });
  return (
    <ul className="list-group">
      {inTodos}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default TodoList;
