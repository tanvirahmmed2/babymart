'use client'
import { BASE_URL } from '@/lib/database/secret'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Item from '../card/Item'
import axios from 'axios'

const SameCategory = ({ category }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/product/category/${category}`, {withCredentials:true})
        setProducts(response.data.payload)
      } catch (error) {
        console.log(error)
        setProducts([])

      }
    }
    fetchData()
  }, [category])

  if (products.length < 1) return console.log('No data found')
  return (
    <div className='w-full flex flex-col items-center justify-center p-4 gap-4  '>
      <h1 className='text-3xl text-center '>You May Also Love</h1>
      {
        products && <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4'>
          {
            products.map((item) => (
              <Link href={`/products/${item.slug}`} key={item._id} className=''>
                <Item item={item} />
              </Link>
            ))
          }
        </div>
      }
    </div>
  )
}

export default SameCategory
