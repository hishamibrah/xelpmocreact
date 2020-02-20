import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch, Route,BrowserRouter, Redirect} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Calculation from './pages/calculations/calculation';


ReactDOM.render(
  <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/cals" component={Calculation}/>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
