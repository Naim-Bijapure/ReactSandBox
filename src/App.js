import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import N from './components/N';

export default class App extends Component {
    render(){
        return (
     <Router>
      <div>

        <Route path='/' component={N} />
      </div>
      </Router>

        )

    }
}