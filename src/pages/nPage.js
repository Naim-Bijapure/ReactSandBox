import React from 'react'
import NCompo from '../components/nCompo';

import myStyle from '../components/nCompo.module.css'
const nPage=()=>{
   console.log(myStyle);
    
    return(
        <div>
            <NCompo/>
            <h1 className={myStyle.div}>This is first N page</h1>

        </div>
    )
}
export default  nPage;