'use client'
import { Context } from '@/components/helper/Context'
import React, { useContext } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";

const Cart = () => {
  const { cart, removeFromCart, decreaseQuantity, clearCart } = useContext(Context)

  if (cart === 'undefined' || cart?.items.length < 1) return <p className='w-full text-center'>No cart data found</p>


  return (
    <div>
      <h1>Your cart Data</h1>
      <p onClick={clearCart}>Clear Cart</p>
      <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-2'>
            <p className='flex-4'>Title</p>
            <p className='flex-1'>Price</p>
            <p className='flex-1'>Quantity</p>
            <p className='flex-1' onClick={()=>decreaseQuantity(item?.productId)}>Remove</p>
            <p className='flex-1' onClick={()=>removeFromCart(item?.productId)}>Delete</p>

      </div>
      {
        cart?.items.map((item) => (
          <div key={item?.productId} className='w-full flex flex-col sm:flex-row items-center justify-center gap-2'>
            <p className='flex-4'>{item?.title}</p>
            <p className='flex-1'>৳{item?.price}</p>
            <p className='flex-1'>{item?.quantity}</p>
            <p className='flex-1' onClick={()=>decreaseQuantity(item?.productId)}><FaMinus/></p>
            <p className='flex-1' onClick={()=>removeFromCart(item?.productId)}><MdDeleteOutline/></p>
          </div>
        ))
      }
    </div>
  )
}

export default Cart
