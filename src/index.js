import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/layout/_page.scss';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
