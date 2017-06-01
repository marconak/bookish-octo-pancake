import React, { Component } from 'react';
import Nav from './Nav.js';
import { login } from '../actions.js';

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

  logIn(name, pass) {
    this.setState({ isLogged: true });
    login(name, pass).then(result => {
      console.log(result);
    });

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
