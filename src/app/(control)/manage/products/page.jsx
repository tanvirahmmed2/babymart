import AddProduct from '@/components/forms/AddProduct'
import React from 'react'

const Products = () => {
  return (
    <div className='w-full p-4 flex flex-col items-center gap-6'>
      <h1 className='text-2xl font-semibold w-full text-center border-b-2 border-black/10'>Products</h1>
        <AddProduct/>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <h1 className='text-xl font-semibold text-center'>Project List</h1>
      </div>
    </div>
  )
}

export default Products
