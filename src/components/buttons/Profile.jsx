'use client'
import Link from 'next/link'
import React from 'react'
import { PiFinnTheHumanLight } from "react-icons/pi";



const Profile = () => {
  return (
    <Link href={'/profile'} className='p-1 cursor-pointer border-2 border-black/10 rounded-full text-2xl'><PiFinnTheHumanLight/></Link>
  )
}

export default Profile
