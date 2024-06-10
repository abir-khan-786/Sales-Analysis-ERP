'use client'

import Link from 'next/link'
import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'

const Attendance = () => {
  const attendanceData = [
    {
      id: 2,
      slug: 'morning',
      name: 'Moring Attendance',
    },
    {
      id: 6,
      slug: 'evening',
      name: 'Evening Attendance',
    },
    {
      id: 7,
      slug: 'leave',
      name: 'Leave Request',
    },
    {
      id: 8,
      slug: 'report',
      name: 'Attendance Report',
    },
  ]
  const backBtn = () => {
    window.history.back()
  }
  return (
    <div className=" ">
      <div className=" flex     items-center bg-indigo-700">
        <button onClick={backBtn} className="btn btn-ghost">
          <IoArrowBackOutline className="text-3xl" />
        </button>
        <h2 className="  flex justify-center w-full text-2xl">Attendes</h2>
      </div>
      <div className=" container mx-auto">
        <div className="grid grid-cols-2 gap-4 mt-4">
          {attendanceData.map((item) => (
            <Link
              href={`/attendance/${item.slug} `}
              key={item.id}
              className="btn btn-ghost  bg-indigo-700 rounded-lg shadow-md flex items-center justify-center"
            >
              <div className="text-xl  text-white">{item.slug}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Attendance
