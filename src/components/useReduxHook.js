import React,{useCallback} from 'react'
// import { useMappedState } from '../container/store';
import { useMappedState,useDispatch } from 'redux-react-hook';
import { store } from '../container/store';

export default function UseRedux() {
   const dispatch= useDispatch();


    function myAction() {
       console.log('clicked');
       dispatch({type:'ADD'});
    }
    function myThunk() {
        
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json =>dispatch({type:'MY_THUNK',payload:json}) );
        //    setTimeout(() => {
        //        console.log('enter');
        //        dispatch({type:'MY_THUNK',payload:'with time'}); 
        //    }, 2000);
       dispatch(thunked())

    
    }
    function thunked() {
     return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json =>dispatch({type:'MY_THUNK',payload:json}) ) 
     }     
    }

    
        
 const {data}=useMappedState(
     useCallback(
         (state)=>{
             return {data:state}
         },[]
     )
 );


    return (<div>working state is {data.data}
    
           <button onClick={myAction}> Click</button>  
    
           <button onClick={myThunk}> Click Thunk</button>  
    
     </div>);    
}