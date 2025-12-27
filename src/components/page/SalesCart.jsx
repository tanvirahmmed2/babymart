import React from 'react'
import Orderform from '../forms/Orderform'
import { isSales } from '@/lib/middleware'
import { redirect } from 'next/navigation'

const SalesCart = async () => {

  const auth = await isSales()
  if (!auth.success) return redirect('/login')
  const user = auth.payload
  const plainCart = user.cart.map(item => ({
    _id: item._id.toString(),
    title: item.title,
    productId: item.productId?.toString(),
    quantity: item.quantity,
    price: item.price
  }))


  return (
    <div className='w-2/5 border-l-2 border-black/10 p-4 flex flex-col items-center gap-6'>
      <h1 className='text-xl font-semibold'>Order details</h1>
      <Orderform cartItems={plainCart} />
    </div>
  )
}

export default SalesCart
