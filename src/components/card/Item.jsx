'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { CiShoppingCart } from "react-icons/ci";

const Item = ({ item }) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} className='w-full bg-white p-1 border border-black/10 flex flex-col items-center justify-center group gap-1'>
      <Link href={`/products/${item?.slug}`}>
        <Image src={`${item?.image}`} alt='products image' width={500} height={500} className='w-full max-h-70 object-cover'/>
      </Link>
      <h1>{item?.title}</h1>
      <p className=' font-semibold'> ৳ {item?.price}</p>
      <button className='w-full p-1 bg-pink-300 flex flex-row items-center justify-center gap-4 text-white cursor-pointer group-hover:bg-pink-400 '>Cart <CiShoppingCart className='text-xl' /></button>
    </motion.div>
  )
}

export default Item
