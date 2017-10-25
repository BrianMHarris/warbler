import React, { Component } from 'react';
import Navigation from './Navigation';
import UserSignup from './users/UserSignup';
import UserLogin from './users/UserLogin';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <main>
        <Navigation />
        <Switch>
          <Route exact path="/signup" component={UserSignup}/>
          <Route exact path="/login" component={UserLogin}/>
          <Route exact path="/home/:name" component={Home}/>
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(Main);
