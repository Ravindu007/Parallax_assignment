import React from 'react'
import { Loader } from 'rsuite';


const LoadingComponent = () => {
  return (
    <div className='w-full h-fit'>
       <Loader size="lg" content="Large" />
      <hr />
    </div>
  )
}

export default LoadingComponent