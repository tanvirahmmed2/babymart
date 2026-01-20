import Footer from "@/components/bar/Footer"
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
      <Footer/>
    </div>
  )
}

export default MainLayout
