import Link from 'next/link'
import React from 'react'

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

  return (
    <div className=" ">
      <div className=" container mx-auto">
        <h2 className=" bg-indigo-700 h-12 flex justify-start px-4 py-4 ">
          Attendance
        </h2>
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
