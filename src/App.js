import React, { Component } from 'react';
import {StoreContext}from 'redux-react-hook';
import {Provider}from 'react-redux';
import logo from './logo.svg';
import UseReduxHook from './components/useReduxHook';
import Nredux from './components/Nredux';
import './App.css';
import { FirstHook } from './components/firstHook';
import MyUseEffect from './components/useEffectHook';
import { store } from './container/store';

class App extends Component {
  render() {
    return (
     <StoreContext.Provider value={store}>
      <UseReduxHook></UseReduxHook>
     </StoreContext.Provider>
    // <Provider  store={store}>
    //   <Nredux></Nredux>
    // </Provider>
      );
  }
}

export default App;
