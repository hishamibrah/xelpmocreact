import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Calculation from './pages/calculations/calculation';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cals" component={Calculation}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
