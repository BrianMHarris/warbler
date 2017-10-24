import React from 'react';
import LoginModal from './LoginModal'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={LoginModal}/>
    </Switch>
  </main>
)

export default Main;
