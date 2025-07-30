import { createContext, useContext, useState } from 'react'
import { menuItems, footerlinks, bannerSliderContent, partnersSection } from './BrContent'
const BrSeDecContext = createContext()

export default function BrSeDecProvider ({children}) {
    const [loading, setLoading] = useState(false)
    const [brError, setBrError] = useState(null)

    return <BrSeDecContext.Provider value={{loading, brError, menuItems, footerlinks, bannerSliderContent, partnersSection}}>{children}</BrSeDecContext.Provider>
}   

export const useBrSeDecContext = () => {
    const context =  useContext(BrSeDecContext)
    if(!context){
        throw new Error('useBrSeDecContext must be used within a BrSeDecProvider')
    }
    return context
}






