import React from 'react'
import Form from './Form/Form'

const LeftPart = () => {
  return (
    <div className='left-part'>
      <div className="container">

        {/* form component */}
        <div className="row">
          <div className="col-12">
            {/* form */}
            <Form/>
          </div>
        </div>

        {/* list */}
        <div className="row">
          <div className="col-12"></div>
        </div>
        
      </div>
    </div>
  )
}

export default LeftPart