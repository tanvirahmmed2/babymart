import React from 'react'

const CategoryProducts = async({params}) => {
    const {title}= await params
  return (
    <div>
      {title}
    </div>
  )
}

export default CategoryProducts
