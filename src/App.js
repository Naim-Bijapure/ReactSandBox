import React, { Component } from 'react'
import { API } from 'aws-amplify';


export default class App extends Component {
     constructor(props){
        super(props);
         this.run=this.run.bind(this);
     }
    render(){
        return (
            <div>
             <h1> Serverless</h1>
             <button onClick={this.run}> Click</button>
            </div>
        )

    }
    run(){
        console.log('clicked');
        API.get('nAPI','/data')
          .then((data)=>{console.log(data);
          })
          .catch((err)=>{console.log(err);  
          });
      
        // fetch('http://localhost:3000/data')
        //      .then((data)=>(data.json()))
        //      .then((data)=>{console.log(data)})
        //      .catch((err)=>{console.log(err)
        //      });
             
        
    }
}