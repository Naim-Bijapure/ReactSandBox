import React ,{useEffect,useState,useCallback} from 'react'
import { list } from 'postcss';

export default function MyUseEffect(params) {
   // ! Hooks      
    const [state, setstate] = useState(0);
    const [arrData, setarrData] = useState([1])
   let a =1;

 

    function ChangeIt(params) {
           setstate(state+1); 
    }
  useEffect(()=>{
            console.log('state is ',state);
            arrData.push(state);
             
    },[state]);
 

            return (
                 <div>working
                        {console.log( arrData)
                        }                     
                     <div>curretn state is</div> 
                      {
                          arrData.map((data,i)=>{
                              return( 
                                  <li key={i}>{data}</li>
                              )
                          })
                      }
                     <button onClick={ChangeIt}>Change</button> 
                      </div>
             ); 
}