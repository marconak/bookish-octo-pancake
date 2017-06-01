import React, { Component } from 'react';

export default class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addNewTodo(event) {
    if (this.state.value.length >= 3 && this.state.value.length < 256) {
      this.props.onAdd(this.state.value);
      this.setState({ value: '' });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-group" noValidate onSubmit={this.addNewTodo}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add new todo (Min 3 characters)"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Add</button>
          </span>
        </div>
      </form>
    );
  }
}
