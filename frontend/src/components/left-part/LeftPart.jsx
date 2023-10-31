import React, { useState } from 'react'
import Form from './Form/Form'
import Table from './table/Table'
import ButtonRow from '../ButtonRow/ButtonRow'

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
        <div className="row sm:h-full md:h-[250px]">
          <div className="col-12">
            <Table/>
          </div>
        </div>


        {/* button set */}
        <div className="row h-full">
          <ButtonRow/>
        </div>
        
      </div>
    </div>
  )
}

export default LeftPart