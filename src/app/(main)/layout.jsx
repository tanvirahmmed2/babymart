import Navbar from "@/components/bar/Navbar"


export const metadata={
    title:'Home',
    description:'Home page'
}

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  )
}

export default MainLayout
