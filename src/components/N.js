import React, { Component } from 'react'
export default class  N extends Component {
  constructor(props){
     super(props);
     this.run2=this.run.bind(this);
     this.state={
         search:''
     }
  }

   run() {
     alert('called run');      
  }

  handleChange(e){
    //   clearTimeout(this.timeout); 
    let ee= e.target.value
      this.timeout=setTimeout(() => {
          console.log('called handle change',e.target.value);
      }, 2500);
    console.log(e.target.value);
    
    
  }
    render(){
        console.log('rendered');
        
        return (
            <div>
                hello Naim
                <input type="text" onChange={this.handleChange.bind(this)}/>
{/* // {this.state.search ? <p>Search for: {this.state.search}</p> : null} */}
                <button onClick={this.run2}>click 1</button>
            </div>
        )

    }
}