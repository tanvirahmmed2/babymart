import React from 'react'

const CategoryPage = async({params}) => {
    const {title}= await params
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default CategoryPage
