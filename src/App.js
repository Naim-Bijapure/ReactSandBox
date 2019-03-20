import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Edit } from './components/edit';
import { Create } from './components/create';
import { Show } from './components/show';
import Home from './components/Home';

export default class App extends Component {
    render(){
        return (
     <Router>
      <div>

        <Route exact path='/' component={Home} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
      </Router>

        )

    }
}