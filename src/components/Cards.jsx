import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Cards = ({title, description, image, link, className, btnTxt, index = 0, type = 'school-card', date}) => {
    if(type === 'news'){
        return (
            <motion.div 
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
            }}
        >
            <Link to={link}>
                <div className='news-card'>
                    <div className='news-card-img '>
                        <img src={image} alt={title} />
                    </div>
                    <div className='news-card-content d-flex flex-column align-items-start justify-content-between p-2'>
                        <div className='news-card-content-left d-flex flex-column gap-2'>
                            <span className='small-text '> <span className='news-date'>{date || ''}</span></span>
                            <h5 className='menu-text-bold p-0 m-0 '>{title}</h5>
                            <p className='small-light-text p-0 m-0'>{description}</p>
                        </div>

                          <div>
                             <span className='icon-btn small-text-bold pt-2 m-0 d-flex align-items-center gap-2'>
                                 {btnTxt}
                                  <svg width="20"  height="20"  viewBox="0 0 24 24" fill="none"   xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                                      <path  d="M7 17L17 7M17 7H7M17 7V17"  stroke="currentColor" strokeWidth="2"strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                              </span>
                           </div>
 
                    </div>
                </div>
            </Link>
        </motion.div>
        )
    }
    else if(type === 'school-card'){
        return (
            <motion.div 
                className={className}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                }}
            >
                <Link to={link}>
                    <div className='card-box'>
                        <div className='card-img '>
                            <img src={image} alt={title} />
                        </div>
                        <div className='card-content d-flex flex-column gap-3'>
                             <h6 className='sub-heading p-0 m-0 '>{title}</h6>
                            <p className='menu-text p-0 m-0'>{description}</p>
                                <span className='icon-btn small-text-bold p-0 m-0 d-flex align-items-center gap-2'>
                                    {btnTxt}
                                 <svg width="20"  height="20"  viewBox="0 0 24 24" fill="none"   xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                                    <path  d="M7 17L17 7M17 7H7M17 7V17"  stroke="currentColor" strokeWidth="2"strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                             </span>
                        </div>
                    </div>
                </Link>
            </motion.div>
    
        )
    }else{
        return (
            <div className='card-box'>
                no data found
            </div>
        )
    }

}

export default Cards