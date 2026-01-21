'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import Image from 'next/image'
import { CiShoppingCart } from "react-icons/ci";
import { Context } from '../helper/Context'

const Item = ({ product }) => {

  const {addToCart}= useContext(Context)
  
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className='w-full bg-white p-1 border border-black/10 flex flex-col products-center justify-between group gap-1'>
      <Link href={`/products/${product?.slug}`}>
        <Image src={`${product?.image}`} loading='eager' alt='products image' width={500} height={500} className='w-full h-70 object-cover' />
      </Link>
      <h1>{product?.title.slice(0, 30)}</h1>
      {
        product?.discount > 0 ? <div className='w-full flex flex-col products-center justify-center gap-1'>
          <p className=' font-semibold line-through text-pink-400'> ৳ {product?.price}</p>
          <p className=' font-semibold'> ৳ {product?.price - product?.discount}</p>
        </div> :
          <p className=' font-semibold'> ৳ {product?.price}</p>
      }
      <button onClick={()=> addToCart(product)} className='w-full p-1 bg-pink-300 flex flex-row products-center justify-center gap-4 text-white cursor-pointer group-hover:bg-pink-400 '>Cart <CiShoppingCart className='text-xl' /></button>
    </motion.div>
  )
}

export default Item
