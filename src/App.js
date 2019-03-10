import React, { Component } from 'react'

import Amplify, { API } from 'aws-amplify';

import { withAuthenticator } from 'aws-amplify-react'; 
// import awsmobile from './aws-exports';

 class App extends Component {
   constructor(props){
       super(props);
       this.run= this.run.bind(this);
   }

    render(){
        return (
            <div>
             <h1>serverless functions </h1>
             <button onClick={this.run}>Click</button>
            </div>
        )

    }
        
   run(){
       console.log('clicked');
//       API.post('nAPI', '/pictures',{body:{number:20}})
//   .then(data => console.log('data: ', data))
//   .catch(err => console.log('error:', err))

fetch('http://localhost:3000/items',{method:'POST',body:{number:25}})
                    .then(data=>(data.json()))
                    .then((data)=>{console.log(data)
                    })
                    .catch((err)=>{console.log(err)
                    });
   

}
}

export default App;