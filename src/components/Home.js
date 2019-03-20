import React, { Component,useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import firebase from '../Firebase'



export default function Home(){
  
  const [nData, setnData] = useState({name:"defalutl",nickname:'default'})
  const [nDataArr, setnDataArr] = useState([nData])
    

function getnData(query) {
          query.forEach((data)=>{
          nDataArr.push(data.data())
          setnDataArr(nDataArr);            
          }); 
          
}
function Add() {

  
  nDataArr.push({name:"clicked",nickname:'by add'}); 
   setnDataArr(nDataArr);
   console.log(nDataArr);
   
}



useEffect(() => {
  let db=firebase.firestore().collection("N");
             db.onSnapshot( getnData );
      console.log(nDataArr);
       console.log('running ');
        
            
               
 }) 


 
  return (
    
       <div>
          <form className="card" >
           <div className="form-group  card-body"> 
           
            <input type="text" className="form-control" placeholder="enter name"/>
            <input type="text" className="form-control" placeholder="enter nickname"/>
           
           </div> 
           </form> 
           <button className="btn btn-primary" onClick={Add}>Add</button>
           <button className="btn btn-danger">Delete</button>
           <button className="btn btn-info">Update</button>

  <table className="table">

  <thead className="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Nickname</th>
    </tr>
  </thead>

  <tbody>
  
     {
       nDataArr.map((data,i)=>{
         return(
           <tr key={i}>
             <td>{data.name}</td>
             <td>{data.nickname}</td>

           </tr>
         )
       })
     } 
  </tbody>
</table>
          

       </div>
        );
 }
