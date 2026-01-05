import DeleteProduct from '@/components/buttons/DeleteProduct'
import MakeFeatured from '@/components/buttons/MakeFeatured'
import UpdateProduct from '@/components/buttons/UpdateProduct'
import AddProduct from '@/components/forms/AddProduct'
import { BASE_URL } from '@/lib/database/secret'
import Link from 'next/link'
import React from 'react'

const Products = async () => {
  const res = await fetch(`${BASE_URL}/api/product`, {
    method: 'GET',
    cache: 'no-store'
  })
  const data = await res.json()
  const products = data.payload
  return (
    <div className='w-full p-4 flex flex-col items-center gap-6'>
      
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <h1 className='text-xl font-semibold text-center'>Project List</h1>
        <div className='w-full flex flex-row items-center justify-between border my-4'>
          <p className='flex-4'>Title</p>
          <p className='flex-1'>Price</p>
          <p className='flex-1'>Stock</p>
          <p className='flex-1'>Action</p>
        </div>
        {
          products && products.map((product) => (
            <div key={product._id} className='w-full flex flex-row items-center justify-between'>
              <Link className='flex-4' href={`/products/${product?.slug}`}>{product?.title}</Link>
              <p className='flex-1'>{product.price}</p>
              <p className='flex-1'>{product.isAvailable ? 'Available' : "Unavailable"}</p>
              <div className=' flex-1 flex flex-row gap-4 items-center'>
                <MakeFeatured id={product._id} status={product.isFeatured}/>
                <UpdateProduct slug={product.slug} />
                <DeleteProduct id={product._id} />
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
