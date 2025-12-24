'use client'
import Link from 'next/link';
import React from 'react'
import { FcSalesPerformance } from "react-icons/fc";

const SalesLink = () => {
  return (
    <Link className='w-auto flex flex-row items-center  gap-3 cursor-pointer' href={'/sales'}><FcSalesPerformance/> Sales</Link>
  )
}

export default SalesLink
