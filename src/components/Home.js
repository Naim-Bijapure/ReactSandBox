import React, { Component,useState,useEffect,useCallback,useRef } from 'react'
import {Link} from 'react-router-dom'
import firebase from '../Firebase'



export default function Home(){
  
  const [nData, setnData] = useState({name:"default Name",nickname:'default nickname'})
  const [nDataArr, setnDataArr] = useState([nData]);
  const refName = useRef("defalut ref Name");
  const refnickName=useRef("defalutl ref Nick Name");

  
  let db= firebase.firestore().collection("N");

  useEffect(() => {
             console.log('called at first time ');
              getnData();
      },[nData]) 
            
 

function getnData() {
      db.onSnapshot((querySnapShot)=>{
        let dataarr= [];
           querySnapShot.forEach((doc)=>{
      //  console.log('getnData',doc.data());
      
                       dataarr.push(doc.data());
                      });
                      setnDataArr(dataarr);
                       
                       
             }) ; 
}


function Add() {
    db.add({name:refName.current.value,nickname:refnickName.current.value})
    .then(()=>{console.log('data added ');
    }).catch(()=>{console.log('error');
    });
  }

function getData(e,nickname) {
    // setnData({name:name,nickname:nickname}); 
    
}


 
  return (
       <div>
         {console.log('render')}
            <form className="card" >
           <div className="form-group  card-body"> 
           
            <input type="text" className="form-control" ref={refName} placeholder="enter name"/>
            <input type="text" className="form-control" ref={refnickName} placeholder="enter nickname"/>
           
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
