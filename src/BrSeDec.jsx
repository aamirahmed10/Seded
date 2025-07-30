import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import { BrowserRouter } from 'react-router-dom'  
import BrSeDecRoutes from './BrSeDecRoutes.jsx'
import BrSeDecProvider  from './context/BrSeDecProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrSeDecProvider>
        <BrowserRouter> 
            <BrSeDecRoutes />  
        </BrowserRouter>
      </BrSeDecProvider>


)
