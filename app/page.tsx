import Image from 'next/image'
import Link from 'next/link'
import { FaSalesforce, FaShoppingCart } from 'react-icons/fa'
import { GiAchievement } from 'react-icons/gi'
import { MdGroups2, MdOutlineDashboardCustomize } from 'react-icons/md'
import { RiComputerFill } from 'react-icons/ri'

export default function Home() {
  const uiData = [
    {
      id: 1,
      slug: 'order',
      name: 'Order',
      icon: <FaShoppingCart />,
    },
    {
      id: 2,
      slug: 'dashboard',
      name: 'Dashboard',
      icon: <RiComputerFill />,
    },
    {
      id: 3,
      slug: 'attendance',
      name: 'attendance',
      icon: <MdGroups2 />,
    },
    {
      id: 5,
      slug: 'achievement',
      name: 'Achievement',
      icon: <GiAchievement />,
    },
    {
      id: 5,
      slug: 'outlet',
      name: 'Outlet Mangment',
      icon: <MdOutlineDashboardCustomize />,
    },
  ]

  return (
    <main className=" ">
      <h2 className=" bg-indigo-800 h-12   items-center flex px-4">RCL-App</h2>
      <div className=" container mx-auto">
        <div className=" text-center my-4">
          <h2>MD Abir Khan (30165)</h2>
          <h2 className="text-sm"> Territory Sales Manager (TSM)</h2>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            {uiData.map((item) => (
              <Link
                href={`/${item.slug}`}
                key={item.id}
                className="btn btn-ghost bg-gray-100 rounded-lg shadow-md flex items-center justify-center"
              >
                <div className="text-4xl text-indigo-600">{item.icon}</div>
                <div className="text-lg text-gray-800">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
