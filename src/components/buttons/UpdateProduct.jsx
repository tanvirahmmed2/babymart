'use client'
import Link from 'next/link';
import React from 'react'

import { FaEdit } from "react-icons/fa";

const UpdateProduct = ({slug}) => {
    
  return (
    <div className='relative group'>
      <p className='-top-6 absolute opacity-40 hidden group-hover:block text-red-500'>Edit</p>
      <Link href={`/manage/products/${slug}`}><FaEdit/></Link>
    </div>
  )
}

export default UpdateProduct
