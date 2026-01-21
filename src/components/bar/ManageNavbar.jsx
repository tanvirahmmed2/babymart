'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const ManageNavbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className='w-full relative'>
            <nav className='fixed px-4 top-0 left-0 right-0 mx-auto w-full max-w-300 bg-emerald-400 flex flex-row items-center justify-between text-white h-14 z-50'>
                <Link className='text-2xl font-semibold' href={'/'}>Management</Link>
                <div className='w-auto hidden sm:flex flex-row items-center justify-center gap-2'>
                    <Link href={'/manage/products'}>Products</Link>
                    <Link href={'/manage/newproduct'}>NewProducts</Link>
                    <Link href={'/manage/category'}>Category</Link>
                    <Link href={'/manage/access'}>Access</Link>

                </div>
                <p onClick={() => setMenu(!menu)} className='cursor-pointer text-xl sm:hidden'><FaBars /></p>

            </nav>
            <div className={`fixed sm:hidden px-4 top-14 left-0 right-0 mx-auto w-full max-w-300 bg-gray-200 ${menu? 'flex': 'hidden'} flex-col items-center justify-center text-black  z-50`}>
                <Link onClick={() => setMenu(!menu)} href={'/manage/products'}>Products</Link>
                <Link onClick={() => setMenu(!menu)} href={'/manage/newproduct'}>NewProducts</Link>
                <Link onClick={() => setMenu(!menu)} href={'/manage/category'}>Category</Link>
                <Link onClick={() => setMenu(!menu)} href={'/manage/access'}>Access</Link>

            </div>
        </div>
    )
}

export default ManageNavbar
