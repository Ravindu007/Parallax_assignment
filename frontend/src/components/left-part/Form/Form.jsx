import React from 'react'

const Form = () => {
  return (
    <>
      <form action="">
        <div className="row">

          {/* 1st row of form */}
          <div className="row m-2">
            <div className="col-6">
              <div className="form-group">
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Please Select' 
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                  <input 
                    type="text"
                    className='form-control'
                    placeholder='Please Select' 
                  />
                </div>
            </div>
          </div>

          {/* 2nd row of the form */}
          <div className="row m-2">
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

        </div>
      </form>
    </>
  )
}

export default Form