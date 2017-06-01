import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './component/Container.js';
import App from './component/App.js';

import '../style/main.css';

import './helpers/axios.js';

const Home = () => (
  <Container>
    <App />
  </Container>
);

ReactDOM.render(<Home />, document.getElementById('root'));
