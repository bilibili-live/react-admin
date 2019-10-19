/*
** today crate by @d1y
** date: 2019-10-19
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// pages
import Login from './containers/login/login';
import Register from './containers/register/register'
import Main from './containers/main/main'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path="/login" component={ Login }></Route>
      <Route path="/register" component={ Register }></Route>
      <Route component={ Main }></Route>
    </Switch>
  </HashRouter>
), document.getElementById('App'));
