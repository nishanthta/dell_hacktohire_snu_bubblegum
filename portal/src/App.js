import React, { Component } from 'react';
import './App.css';
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
