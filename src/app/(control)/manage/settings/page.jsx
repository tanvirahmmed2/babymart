'use client'
import { useCart } from '@/components/context/Context'
import WebsiteDetails from '@/components/forms/WebsiteDetails'
import Link from 'next/link'
import React from 'react'

const Setting = () => {
  const { siteData, categories } = useCart()


  if (siteData === null) return <WebsiteDetails />

  return (
    <div className='w-full p-4 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-2xl'>Update Business Information</h1>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Title</p>
        <p>{siteData?.title}</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Tagline</p>
        <p>{siteData?.tagline}</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Bio</p>
        <p>{siteData?.bio}</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Address</p>
        <p>{siteData?.address}</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Social Link</p>
        <p>{siteData?.socialLink}</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Open From</p>
        <p>{siteData?.openFrom}</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Open To</p>
        <p>{siteData?.openTo}</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Hotline</p>
        <p>{siteData?.hotline}</p>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Categories</p>
        {
          categories.length>0 && <div className='w-full flex flex-wrap gap-4'>
            {
            categories.map((cat)=>(
              <p className='bg-gray-200 px-2 p-1 rounded-2xl' key={cat._id}>{cat.title}</p>
            ))
            }
          </div>
        }
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='border-b px-3 border-black/10'>Tax</p>
        <p>{siteData?.tax}</p>
      </div>
      <Link href={'/manage/settings/update'} className='w-auto px-4 p-1 rounded-lg bg-sky-400 text-white hover:bg-sky-500 cursor-pointer'>Update</Link>
    </div>
  )
}

export default Setting
