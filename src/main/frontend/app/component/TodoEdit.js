import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form
        noValidate
        onSubmit={event => {
          this.props.updateTodo(event, this.state.value);
        }}
      >
        <input
          type="text"
          name="value"
          className="form-control"
          placeholder="Update todo (Min 3 characters)"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.props.handleCancel}
        />
      </form>
    );
  }
}

TodoEdit.propTypes = {
  value: PropTypes.string.isRequired,
  updateTodo: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};
