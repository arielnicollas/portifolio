import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Home} from './pages/Home'

import './services/firebase'

import './styles/global.scss'
import './styles/auth.scss'


ReactDOM.render(
  <React.StrictMode>
    <App />,
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

