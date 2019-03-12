
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./myHead'),{
    loading:()=><h1>loading man</h1>,ssr:false
})

function  MyDynamic() {
  return (
    <div>
      <DynamicComponent />
      <p>HOME PAGE is here!</p>
    </div>
  )
}

export default MyDynamic