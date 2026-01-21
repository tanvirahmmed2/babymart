'use client'
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const AddtoCart = () => {
  return (
    <button className='w-full p-1 bg-pink-300 flex flex-row items-center justify-center gap-4 text-white cursor-pointer hover:bg-pink-400 '>Cart <CiShoppingCart className='text-xl'/></button>
  )
}

export default AddtoCart
