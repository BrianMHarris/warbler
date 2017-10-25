import React from 'react';
import UserSignup from './users/UserSignup';
import UserLogin from './users/UserLogin';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/signup" component={UserSignup}/>
      <Route exact path="/login" component={UserLogin}/>
      <Route exact path="/home/:id" component={Home}/>
    </Switch>
  </main>
)

export default Main;
