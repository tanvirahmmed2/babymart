import Link from 'next/link'
import React from 'react'
import ManageLink from '../buttons/ManageLink'
import SalesLink from '../buttons/SalesLink'
import Profile from '../buttons/Profile'

const Navbar = () => {
  return (
    <div className='w-full '>
      <div className='w-full flex flex-row items-center justify-between h-14 px-4 shadow-sm shadow-emerald-200 '>
        <Link href={'/'} className=''>Restaurant</Link>
        <div>

        </div>
        <div className='w-auto h-full flex flex-row items-center justify-center gap-2'>
          <ManageLink/>
          <SalesLink/>
          <Profile/>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
