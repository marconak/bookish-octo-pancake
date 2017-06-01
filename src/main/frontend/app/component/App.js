import React, { Component } from 'react';
import Nav from './Nav.js';
import { login, getUser, logout } from '../actions.js';
import Storage from '../helpers/storage.js';

class App extends Component {
  constructor(props) {
    super(props);
    var token = Storage.getToken();
    var isLogged = token && token !== null;

    this.state = {
      isLogged: isLogged,
      userName: ''
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    if (this.state.isLogged) {
      this.loadUser();
    }
  }

  loadUser() {
    getUser()
      .then(user => {
        this.setState({ userName: user.username });
      })
      .catch(() => {
        this.setState({ isLogged: false });
      });
  }

  logIn(name, pass) {
    this.setState({ isLogged: true });
    login(name, pass)
      .then(result => {
        Storage.setToken(result.headers[Storage.HEADERS_KEY]);
        this.loadUser();
      })
      .catch(() => {
        this.setState({ isLogged: false });
      });
  }

  logOut() {
    this.setState({ isLogged: false, userName: '' });
    logout();
    Storage.deleteToken();
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
