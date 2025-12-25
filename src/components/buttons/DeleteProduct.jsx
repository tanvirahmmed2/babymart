'use client'
import axios from 'axios';
import React from 'react'

import { MdDeleteOutline } from "react-icons/md";

const DeleteProduct = ({id}) => {
    const deleteProduct=async()=>{
      try {
        const res= await axios.delete('/api/product',{data: {id}},{ withCredentials: true})
        console.log(res)
        alert(res.data.message)
      } catch (error) {
        console.log(error)
        alert(error?.response?.data?.message)
        
      }
    }
  return (
    <button onClick={deleteProduct} className='cursor-pointer text-xl'><MdDeleteOutline/></button>
  )
}

export default DeleteProduct
