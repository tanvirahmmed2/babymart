import { BASE_URL } from '@/lib/database/secret'
import Image from 'next/image'
import React from 'react'

const SingleProduct = async ({ params }) => {
  const { id } = await params

  const res = await fetch(`${BASE_URL}/api/product/${id}`, { method: "GET", cache: 'no-store' })
  const data = await res.json()
  const product = data.payload
  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4'>
     <div className='w-full md:w-3/4 flex flex-col md:flex-row items-center justify-center gap-4'>
       <div className='flex-1'>
        <Image src={product.image} alt={product.title} width={1000} height={1000} />
      </div>
      <div className='flex-1'>
        <h1>{product.title}</h1>

      </div>
     </div>
    </div>
  )
}

export default SingleProduct
