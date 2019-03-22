import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstHook } from './components/firstHook';
import MyUseEffect from './components/useEffectHook';
class App extends Component {
  render() {
    return (
      <div className="App">
       this is react for hooks 
      {/* <FirstHook></FirstHook> */}
      <MyUseEffect></MyUseEffect>
         
      </div>
    );
  }
}

export default App;
