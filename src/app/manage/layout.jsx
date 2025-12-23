

const PosLayout = ({children, navbar, sidebar,}) => {
  return (
    <div className='w-full flex flex-col'>
        {navbar}
        <div className=" flex flex-row w-full  justify-between">
            {sidebar}
            {children}
        </div>
    </div>
  )
}

export default PosLayout
