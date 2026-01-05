'use client'
import axios from 'axios';
import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MakeFeatured = ({ id ,status}) => {
    const makeFeaturedItem = async () => {
        try {
            const res = await axios.post('/api/product/featured', { id }, { withCredentials: true })
            console.log(res)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)

        }
    }
    return (
        <div className='relative group'>
            <p className='top-6 absolute opacity-40 hidden group-hover:block text-red-500'>{!status? 'Add to featured': 'Remove from featured'}</p>
            <button onClick={makeFeaturedItem} className='cursor-pointer text-xl'>{!status? <CiStar />: <FaStar className='text-yellow-600'/>} </button>
        </div>
    )
}

export default MakeFeatured
