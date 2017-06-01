import React, { Component } from 'react';
import Nav from './Nav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      userName: ''
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(name, password) {
    this.setState({ isLogged: true });
    this.setState({ userName: 'User Name' });
  }

  logOut() {
    this.setState({ isLogged: false });
    this.setState({ userName: '' });
  }

  render() {
    return (
      <div>
        <Nav isLogged={this.state.isLogged} logIn={this.logIn} logOut={this.logOut} userName={this.state.userName} />
        <h1>Home</h1>
      </div>
    );
  }
}

export default App;
