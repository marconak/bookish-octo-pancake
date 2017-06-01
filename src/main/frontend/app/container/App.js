import React, { Component } from 'react';
import Nav from '../component/Nav.js';
import Todos from './Todos.js';
import Container from '../component/Container.js';
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
    login(name, pass)
      .then(result => {
        Storage.setToken(result.headers[Storage.HEADERS_KEY]);
        this.setState({ isLogged: true });
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
    var body = this.state.isLogged ? <Todos /> : <h1>Home</h1>;

    return (
      <Container>
        <Nav isLogged={this.state.isLogged} logIn={this.logIn} logOut={this.logOut} userName={this.state.userName} />
        {body}
      </Container>
    );
  }
}

export default App;
