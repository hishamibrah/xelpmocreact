import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="AppAside"></div>
          <div className="AppForm">
            <div className="PageSwitcher">
                <NavLink to="/signin" activeClassName="PageSwitcherItemActive" className="PageSwitcherItem">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcherItemActive" className="PageSwitcherItem">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/signin" activeClassName="FormTitleLinkActive" className="FormTitleLink">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitleLink--Active" className="FormTitleLink">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/signin" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
