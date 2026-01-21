import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col  items-center justify-center gap-6 p-4 border-t'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4'>
        <div className='w-auto flex flex-col gap-1'>
          <p className='font-semibold'>Links</p>
          <div className='flex flex-col text-sm w-auto'>
            <Link href={'/offers'}>Offers</Link>
            <Link href={'/products'}>Products</Link>
            <Link href={'/register'}>Register</Link>
          </div>
        </div>
        <div className='w-auto flex flex-col gap-1'>
          <p className='font-semibold'>Policy</p>
          <div className='flex flex-col text-sm w-auto'>
            <Link href={'/'}>Privacy & Policy</Link>
            <Link href={'/'}>Payments</Link>
            <Link href={'/'}>Refund Policy</Link>
          </div>
        </div>
        <div className='w-auto flex flex-col gap-1'>
          <p className='font-semibold'>User Manual</p>
          <div className='flex flex-col text-sm w-auto'>
            <Link href={'/'}>Access</Link>
            <Link href={'/'}>Data</Link>
            <Link href={'/'}>Account</Link>
          </div>
        </div>
      </div>
      <p><span className='font-semibold'>BabyMart</span> is developed by <Link className='font-semibold' href={'https://tanvirahmmed.vercel.app'}>Tanvir Ahmmed</Link></p>
    </div>
  )
}

export default Footer
