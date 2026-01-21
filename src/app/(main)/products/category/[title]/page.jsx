import Item from '@/components/card/Item'
import { BASE_URL } from '@/lib/database/secret'
import React from 'react'

const CategoryProducts = async ({ params }) => {
  const { title } = await params
  const response = await fetch(`${BASE_URL}/api/product/category/${title}`, {
    method: 'GET',
    cache: 'no-store'
  })
  const data = await response.json()

  if (!data.success) return <p className='w-full text-center py-6'>No data found</p>
  const products = data.payload

  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 py-6'>
      {
        products.length < 1 ? <p>No product found</p> : <div className='w-full flex flex-col items-center justify-center gap-4 text-center'>
          <p>Collect best {title} for your baby</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {
              products.map(product => (
                <Item item={product} key={product._id} />
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default CategoryProducts
