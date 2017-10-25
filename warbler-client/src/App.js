import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container-fluid">
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
