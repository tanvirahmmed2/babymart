import React from 'react'

export const metadata={
    title:'Products | Restaurant',
    description:'Products site'
}


const Menuayout = async({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Menuayout
