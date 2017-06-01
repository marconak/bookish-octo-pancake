import React, { Component } from 'react';

import LoginForm from './LoginForm.js';
import UserBar from './UserBar.js';

class Nav extends Component {
  render() {
    var navbar = this.props.isLogged
      ? <UserBar userName={this.props.userName} logOut={this.props.logOut} />
      : <LoginForm logIn={this.props.logIn} />;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Todo App</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            {navbar}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
