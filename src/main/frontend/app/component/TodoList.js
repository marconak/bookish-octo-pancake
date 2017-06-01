import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.js';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  const inTodos = todos.map(item => {
    var todo = item;
    return <TodoItem key={item.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />;
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
  onUpdate: PropTypes.func.isRequired
};

export default TodoList;
