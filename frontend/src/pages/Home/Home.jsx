import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LeftPart from '../../components/left-part/LeftPart'
import RightPart from '../../components/right-part/RightPart'

const Home = () => {
  return (
    <div className='home w-screen h-screen bg-blue-800 flex justify-center items-center'>
      <div className="bg-white h-[90%] w-[95%] rounded-xl">
        
        {/* Navbar  -takes full width*/}
        <div className="row">
          <div className="col-12">
             <Navbar/>
          </div>
        </div>

        {/* bottom part */}
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <LeftPart/>
          </div>
          <div className="col-sm-12 col-md-5">
            <RightPart/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home