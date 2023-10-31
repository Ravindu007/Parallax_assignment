import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [dateTime, setDateTime] = useState(null)

  useEffect(()=>{
    const fetchDate = () => {
      const currentDate = new Date();
      const formattedDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
      setDateTime(formattedDate)
    }

    fetchDate()
  })
  return (
    <div className='navbar w-full bg-slate-300 md:h-16 rounded-md'>
      <div className="row w-full mx-1">

          <div className="segment-1 col-4 flex px-1">
              <select name="theme" id="theme" className='form-control w-2/5 mr-1'> 
                <option value="">Select</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
              <p>{dateTime}</p>
          </div>

          <div className="segment-2 col-4 flex justify-center text-lg text-black font-bold">STOREMATE</div>
          <div className="segment-3 col-4  flex justify-end items-center">
            <p>Attanayaka</p>
            <span className='h-[30px] w-[30px] bg-red-700 rounded-full ml-2' style={{backgroundImage:'url("/images/avatar.jpg")', backgroundSize:'cover'}}>
            </span>
          </div>
      </div>
    </div>
  )
}

export default Navbar