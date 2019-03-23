import {connect} from 'react-redux'
import React, { Component } from 'react'
 class NRedux extends Component {
     constructor(props){
         super(props); 
     }

    render(){
        return (
            <div>
              <div> the data is {this.props.data.data}</div>
              <button onClick={()=>{this.props.runIt()}}>click it </button>
              <button onClick={()=>{this.props.getIt()}}>get it </button>

            </div>
        )

    }
}
const mapStateToProps=(state)=>{
   
    
  return {
      data:state
  } 
}
const mapDispatchToProps=(dispatch)=>{
    return {
        runIt:()=>{  
            
            dispatch({type:'ADD',payload:'cool man'})
        
        },
        getIt:()=>{
              dispatch(thunked()) 
        }
    }
}
function thunked() {
    return function (dispatch) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => dispatch({type:'MY_THUNK',payload:json})) 
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(NRedux);