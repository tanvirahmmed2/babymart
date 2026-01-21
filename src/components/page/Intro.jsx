'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { Context } from '../helper/Context'
import Link from 'next/link'

const Intro = () => {
    const {categories}= useContext(Context)
    console.log(categories)
    return (
        <div className=' w-full flex flex-col gap-1'>

            <div className='w-full flex items-center justify-center rounded-lg relative'>
                <Image src={`https://images.pexels.com/photos/29234756/pexels-photo-29234756.jpeg`} className='w-full max-h-100 object-cover' alt='home image' width={1000} height={1000} />
                <div className="absolute inset-0 sm:gap-4 flex flex-col items-center justify-center text-white bg-black/10">
                    <p className='font-semibold font-serif '>Welcome to</p>
                    <h1 className='text-5xl sm:text-7xl font-extrabold'>Baby Mart</h1>
                    <p className='font-semibold font-serif '>Collect surprises for you happiness</p>
                </div>
            </div>

            <div className='w-full text-center flex flex-col items-center justify-center gap-2'>
                <h1>Hapiness starts with you 🩶</h1>
                <p><span className='font-semibold'>Baby Mart</span> is the ultimate solution for you baby</p>
                <div>
                    {
                        categories.length > 0 && categories.map((cat)=>(
                            <Link key={cat} href={`/products/category/${cat?.title}`}>{cat?.title}</Link>
                        ))
                    }
                </div>
            </div>

            <div className='w-full flex items-center justify-center rounded-lg relative'>
                <Image src={`https://images.pexels.com/photos/421879/pexels-photo-421879.jpeg`} className='w-full max-h-100 object-cover' alt='home image' width={1000} height={1000} />
                <h1></h1>
            </div>



        </div>
    )
}

export default Intro
