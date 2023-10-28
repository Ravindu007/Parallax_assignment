import React from 'react'
import ProductList from './product-list/ProductList'

const RightPart = () => {
  return (
    <div className='right-part'>
      <div className="container m-2">

        {/* filter row */}
        <div className="row">
          <div className="col-4">
              <div className="form-group">
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Please Select' 
                />
              </div>
          </div>
          <div className="col-4">
            <div className="form-group">
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Please Select' 
                />
              </div>
          </div>
          <div className="col-4">
            <div className="form-group">
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Please Select' 
                />
              </div>
          </div>
        </div>

        {/* product list */}
        <div className="row">
          <div className="col-12">
            <ProductList/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightPart