import Notification from '@/components/buttons/Notification'
import Profile from '@/components/buttons/Profile'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full border-b-2 h-14 border-black/10 flex flex-row items-center justify-between px-4'>
        <h1 className='text-xl font-bold'>Restaurant</h1>
        <input type="text" placeholder='search item' className='border-2 outline-none border-black/10 px-3 p-1 rounded-xl'/>
        <div className='flex flex-row items-center justify-center gap-4 h-14'>
            <h1>Tanvir Ahmmed</h1>
            <Profile/>
            <Notification/>
        </div>
    </div>
  )
}

export default Navbar
