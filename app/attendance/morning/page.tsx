'use client'

import React, { useEffect, useState } from 'react'
import { FaBackward } from 'react-icons/fa'
import { IoArrowBackOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'

const MorningPages = () => {
  const date = new Date().toLocaleDateString()
  // const time = new Date().toLocaleTimeString()
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString())
  }

  setInterval(updateTime, 1000)

  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const second = new Date().getSeconds()
  const ampm = hour >= 12 ? 'PM' : 'AM'

  const startWork = () => {
    toast.success('MD Abir Khan You have started your work')
  }

  const backBtn = () => {
    window.history.back()
  }

  return (
    <div>
      <div>
        <div className=" flex     items-center bg-indigo-700">
          <button onClick={backBtn} className="btn btn-ghost">
            <IoArrowBackOutline className="text-3xl" />
          </button>
          <h2 className="  flex justify-center w-full text-2xl">
            Moring Attendes
          </h2>
        </div>
        <div>
          <div className=" text-center my-4">
            <h2 className="text-3xl"> {date}</h2>
          </div>
          <div className=" flex justify-center ">
            <div className="  bg-indigo-800 w-1/2 flex  items-center justify-center">
              <div>
                <h2 className=" text-2xl  font-bold">{hour}</h2>
              </div>
              <div>
                <h2 className="text-3xl">:</h2>
              </div>
              <div>
                <h2 className=" text-2xl  font-bold">{minute}</h2>
              </div>
              <div>
                <h2 className="text-3xl">:</h2>
              </div>
              <div>
                <h2 className=" text-2xl  font-bold">{second} </h2>
              </div>

              <div>
                <h2 className=" text-2xl  font-bold ml-2"> {ampm}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center my-4">
        <button className=" btn btn-primary" onClick={startWork}>
          Start Work
        </button>
      </div>
    </div>
  )
}

export default MorningPages
