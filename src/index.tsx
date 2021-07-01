import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home'


import './services/firebase'

import './styles/global.scss'

import './styles/button.scss'



ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

