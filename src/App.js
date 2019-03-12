import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import {Provider} from 'react-redux';
import Home from './Home';
import './App.css';
import N from './components/N';
import { createStore } from 'redux';
import myRedux from './components/myRedux';

function myReducer (state,action ) {
  switch (action.type) {
    case 'ADD':
    console.log('got it ');
    
      return "changed cool man " 
      break;
  
    default:
      break;
  }
   return "Hello this is my redux" 
}
let store=createStore(myReducer);

const App = () => (
  <Provider store={store}>

  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/N" component={N} />
    <Route exact path="/myRedux" component={myRedux} />
    

  </Switch>

  </Provider>
);

export default App;
