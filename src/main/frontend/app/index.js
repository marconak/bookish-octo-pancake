import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './component/Container.js';
import App from './component/App.js';

import '../style/main.css';

const Home = () => (
  <Container>
    <App />
  </Container>
);

ReactDOM.render(<Home />, document.getElementById('root'));
