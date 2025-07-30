import { Outlet,useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const BrLayout = () => {
    const location = useLocation()
    const headerType = location.pathname === '/' ? 'home-header' : 'common-header'
    return (
       <div className="min-h-screen flex flex-col">
            <Header type={headerType}/>
               <main className="flex-grow w-full">
            <Outlet />
            </main>
            <Footer />
        </div>
    )
    }

export default BrLayout