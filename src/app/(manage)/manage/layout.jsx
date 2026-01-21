import ManageNavbar from '@/components/bar/ManageNavbar'
import React from 'react'
export const metadata={
  title:'Management',
  descritpion:'Management Page'
}


const ManageLayout = ({children}) => {
  return (
    <div className='w-full '>
      <ManageNavbar/>
      {children}
    </div>
  )
}

export default ManageLayout
