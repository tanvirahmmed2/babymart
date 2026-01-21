'use client'
import { Context } from '@/components/helper/Context'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const CategoryPage = () => {
    const { categories } = useContext(Context)
    return (
        <div className='w-full text-center flex flex-col items-center justify-center gap-6 py-6'>
            <h1 className='text-xl  text-center'>Find best product for your happiness among these categories</h1>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 justify-items-center gap-4'>
                {
                    categories.length > 0 && categories.map((cat) => (
                        <Link key={cat.title} href={`/products/category/${cat?.title}`} className='w-full relative'>
                            <Image src={`${cat?.image}`} width={1000} height={1000} alt='image' className='w-full h-70 object-cover rounded-sm' />
                            <p className='px-5 border-b'>{cat?.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryPage
