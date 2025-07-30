import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useBrSeDecContext } from './context/BrSeDecProvider'
import Loader from './components/Loader'
import BrLayout from './layout/BrLayout'

import Home from './pages/Home'
import About from './pages/About'
import NewsAndEvents from './pages/NewsAndEvents'
import Schools from './pages/Schools'
import SchoolList from './pages/SchoolList'
import SchoolProfile from './pages/SchoolProfile'
import ArticleDetail from './pages/ArticleDetail'

export default function BrSeDecRoutes() {

  const {loading, brError} = useBrSeDecContext()

    if(loading){
        return <Loader/>
    }else if(brError){  
        return <div>Error: {brError}</div>
    }else{


        return (
            <Routes>
               <Route element={<BrLayout/>}>
                 <Route path="/" element={<Home />} />
                 <Route path="/le-sedec" element={<About />} />
                 <Route path="/news-and-events" element={<NewsAndEvents />} />
                 <Route path="/news-and-events/:id" element={<ArticleDetail />} />
                 <Route path="/schools" element={<Schools />} />
                 <Route path="/schools/primary" element={<SchoolList />} />
                 <Route path="/schools/primary/profile" element={<SchoolProfile />} />
               </Route>
            </Routes>
        )
    }

}
