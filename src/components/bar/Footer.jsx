import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col  items-center justify-center gap-4 p-4 border-t'>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='w-auto flex flex-col gap-1'>
          <p>Links</p>
          <div>j</div>
        </div>
        <div className='w-auto flex flex-col gap-1'>
          <p>Policy</p>
          <div>j</div>
        </div>
        <div className='w-auto flex flex-col gap-1'>
          <p>User Manual</p>
          <div>j</div>
        </div>
      </div>
      <p><span className='font-semibold'>BabyMart</span> is developed by <Link className='font-semibold' href={'https://tanvirahmmed.vercel.app'}>Tanvir Ahmmed</Link></p>
    </div>
  )
}

export default Footer
