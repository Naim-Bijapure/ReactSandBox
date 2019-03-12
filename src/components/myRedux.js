import {connect} from 'react-redux'
import React, { Component } from 'react'

 class MyRedux extends Component {
    render(){
        return (
            <div>
                hello this is my redux {this.props.data}
                <button onClick={()=>{this.props.run()}}>Click it</button>
            </div>
        )

    }

    
}
function mapStateToProps(state) {
   return{
       data:state
   } 
}
function mapDispatchToProps(dispatch) {
   return{
      run:function () {
          return dispatch({type:'ADD',payload:'yo man'});
      } 
   } 
}
export default connect(mapStateToProps,mapDispatchToProps)(MyRedux);