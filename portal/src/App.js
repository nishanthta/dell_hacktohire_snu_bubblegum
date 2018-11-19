import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import Header from './views/Header';
import Main from './views/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
