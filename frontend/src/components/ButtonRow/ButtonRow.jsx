import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const ButtonRow = () => {

  const [buttonDetails, setButtonDetails] = useState([
    {id: 1, content:"Price"},
    {id: 2, content:"Discount"},
    {id: 3, content:"Max"},
    {id: 4, content:"Shipping"},
    {id: 5, content:"Packaging"},
    {id: 6, content:"New"},
    {id: 7, content:"Totla"},
  ])

  return (
    <div className='row'>
      {buttonDetails && buttonDetails.map((button)=>(
           <div className="col-md-3 p-1">
             <Button key={button.id} className='bg-blue-600 w-full'>
                {button.content}
             </Button>
           </div>
          ))}
    </div>
  )
}

export default ButtonRow