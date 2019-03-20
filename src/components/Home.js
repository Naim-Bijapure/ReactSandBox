import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import myFirebase from '../Firebase'

export default class Home extends Component {
    constructor(props){
          super(props);
         this.db=myFirebase.firestore();                   
         this.unsub=null;

    }
   componentDidMount(){
     
        
    }
    render(){
        return (
            <div>
        <form  className="form-group">
        <div className="card">
       <div className="card-body">
       
       
         <label >Enter Name</label> 
         <input type="text" className="form-control" placeholder="Name"/>
        
         <label >Enter nickName</label> 
         <input type="text" className="form-control" placeholder="nickName"/>
           
           </div> 
        </div>
        <div className="container">
          <div className="row">

         <button className="btn btn-primary col-sm ">Add</button> 
         <button className="btn btn-info col-sm">Update</button> 
         <button className="btn btn-danger col-sm">Delete</button> 
          </div>

        </div>

        </form>
             </div>
        )

    }
}