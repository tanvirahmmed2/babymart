'use client'

import AddtoCart from "@/components/buttons/AddtoCart"
import Item from "@/components/card/Item"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useMemo } from "react"

const categories = [
  { id: 1, category: 'All', value: null },
  { id: 2, category: 'Meals', value: 'meals' },
  { id: 3, category: 'Combo', value: 'combo' },
  { id: 4, category: 'Snacks', value: 'snacks' },
  { id: 5, category: 'Salad', value: 'salad' },
  { id: 6, category: 'Drinks', value: 'drinks' },
  { id: 7, category: 'Dessert', value: 'dessert' }
]

const Menu = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/product', { withCredentials: true })
        setProducts(response.data.payload)
      } catch (error) {
        console.error("Fetch error:", error)
        setProducts([])
      }
    }
    fetchData()
  }, [])

console.log(products)

  return (
    <div className="w-full p-4 min-h-screen">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div>

        </div>
        {
            products.length<1 ? <p>No product found</p>: <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {
                products.map(product=>(
                  <Link href={`/products/${product?.slug}`} key={product._id}>
                    <Item item={product}/>
                  </Link>
                ))
              }
            </div>
          }
      </div>
    </div>
  )
}

export default Menu