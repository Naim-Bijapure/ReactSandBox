import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstHook } from './components/firstHook';
class App extends Component {
  render() {
    return (
      <div className="App">
       this is react for hooks 
      <FirstHook></FirstHook>
        
      </div>
    );
  }
}

export default App;
