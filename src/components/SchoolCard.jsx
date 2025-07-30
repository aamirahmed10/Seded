import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { motion } from 'framer-motion'

const SchoolCard = ({ school, index = 0 }) => {
    return (
        <motion.div 
            className='school-card-box'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
           <div className='school-card-content d-flex flex-row align-items-start justify-content-between w-100 '>
               <div className='school-card-img'>
                <img src={school.school_logo} alt={school.name} />
               </div>
               <div className='school-card-info'>
                <ul className='school-info d-flex flex-column gap-3'>
                    <li><h2 className='secondary-text m-0'>{school.name}</h2> </li>
                    <li className='d-flex align-items-start gap-2 d-flex flex-column'>
                      <div className='d-flex align-items-center gap-2'>
                       <i className="bi bi-person-circle secondary-text"></i> <span className='menu-text-light'>Head Master</span>
                      </div> 
                       <p className='menu-text-bold ps-4 m-0'> {school.master_name}</p>
                    </li>
                    <li className='d-flex align-items-center gap-2'>
                      <i className="bi bi-geo-alt secondary-text"></i> 
                      <p className='menu-text p-0 m-0'>{school.location}</p>
                    </li>
                </ul>
               </div>
           </div>
           <div className='school-card-cta d-flex flex-column gap-3 align-items-start  w-100'>
              <div className='d-flex flex-row  align-items-start  w-100'>
                <Link to={school.phone} className='menu-text-bold w-50 d-flex align-items-center gap-3'> <i className="bi bi-telephone secondary-text"></i> {school.phone}</Link>
                <Link to={school.email} className='menu-text-bold w-50 d-flex align-items-center gap-3'> <i className="bi bi-envelope secondary-text"></i> {school.email}</Link>
              </div>
              <div className='d-flex justify-content-end w-100 pe-4'>
                <Button variant='icon-button' link={school.btn_link} text={school.btn_text} className='school-card-btn'/>
              </div>
           </div>
        </motion.div>
    )
}

export default SchoolCard