import Link from 'next/link'

import css from  '../styles/NStyles.scss'
import MyRouter from './MyRouter'

function Home() {
    return (<div className={css.N}>
          <h1>Hello world ! Nextjs</h1> 
          {/* for local styling  */}
          <style jsx>
          {`
           h1{color:red;}
           h1:hover{color:blue;}
           h2{color:green;}
          `}
          </style>
        {/* for global styling */}
        <style global jsx>
             {`
             body{
               background:black
             }
             `}


        
        </style>
           <h2>this is routing go here  </h2>
           <ul>
         <li><Link prefetch href="/LifeCycle"><a >LifeCycle</a></Link></li>
         <li><Link href="/WthOutLifeCycle"><a >WithoutLifeCycle</a></Link></li>
         <li><Link  href="/myHead" ><a >My Head</a></Link></li>
         <li><Link href={{pathname:'/WithQuery',query:{slug:'yo with object query'}}} as="/WithQuery/something" ><a >With Query</a></Link></li>
         <li><MyRouter></MyRouter></li> 
         <li><Link  href="/MyDynamic" ><a >My Dynamic</a></Link></li>

           </ul>
          
    </div>)
  }
  
  export default Home