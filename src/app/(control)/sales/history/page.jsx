import { BASE_URL } from '@/lib/database/secret'
import React from 'react'

const History = async() => {
  const res= await fetch(`${BASE_URL}/api/order`,{method:'GET', cache:'no-store'})
  const data= await res.json()
  if(!data.success) return <p className='w-full text-center p-4'>No order found</p>
  const orders= data.payload
  return (
    <div className='w-full flex p-4 flex-col items-center justify-center gap-4'>
      <h1>Orders</h1>
      {
        orders.map((order)=>(
          <div key={order._id}>
            <h1>{order._id}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default History
