"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {

  const pathname = usePathname();
  const router = useRouter()

  const navs = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About",
      link: "/about"
    },
    {
      title: "ContactUs",
      link: "/contact-us"
    },

  ]

  const handleClick = () => {
    router.back()
  }

  return (
    <div className='p-4 border-b-2'>
      <nav>
        <ul className='flex gap-2'>
          {
            navs?.map(nav => (
              <li key={nav.title}>
                <Link className={nav.link === pathname ? "text-blue-500" : "text-gray-500"} href={nav.link} >{nav.title}</Link>
              </li>
            ))
          }
        </ul>

        <button className='bg-blue-600 text-white p-2' onClick={handleClick}>Click</button>
      </nav>

    </div>
  )
}

export default Navbar