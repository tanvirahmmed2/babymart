'use client'
import Link from 'next/link'
import React from 'react'
import { SiGoogletagmanager } from "react-icons/si";

const ManageLink = () => {
  return (
    <Link href={'/manage'} className='w-auto flex flex-row items-center gap-3 cursor-pointer'><SiGoogletagmanager/> Manage</Link>
  )
}

export default ManageLink
