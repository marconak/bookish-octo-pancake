import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './container/App.js';

import '../style/main.css';

import './helpers/axios.js';

const Home = () => <App />;

ReactDOM.render(<Home />, document.getElementById('root'));
