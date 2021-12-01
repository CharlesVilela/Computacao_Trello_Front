import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesGlobal.css';
import './index.css'

import Home from './App.js';
import Cadastrar from './views/Usuario/Cadastrar.js';

//import React from 'react';
import { 
  Router, Route, Link
 } from 'react-router-dom';
import App from './App.js';

 function MainRoutes() {
    return(
      <Router>
        <Route path="/" element={< Home/>} />
        <Route path="/cadastrar" element={< Cadastrar/>} />
      </Router>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


