import React from 'react'
import BannerSlider from '../components/BannerSlider'
import { schoolsContent, schoolsNumbers, schools, ctaSection, faqData } from '../context/BrContent'
import NumberCounter from '../components/NumberCounter'
import Cards from '../components/Cards'
import CtaSection from '../components/CtaSection'
import FaqSection from '../components/FaqSection'
import { motion } from 'framer-motion'

const Schools = () => {
   

    return (
        <div className='about-page'>
            <BannerSlider height="40vh" className="common-slider" content={schoolsContent} type='common'/>
            <div className='container section-spacing'>
                    <motion.div 
                        className='d-flex align-items-start justify-content-between gap-5'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {schoolsNumbers.map((number, index) => (
                            <motion.div
                                key={number.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <NumberCounter number={number.number} desc={number.desc} />
                            </motion.div>
                        ))}
                    </motion.div>
            </div>
            <div className='container section-spacing'>
                <div className='row g-5'>
                    {/* Left Panel - School Categories Grid */}
                    <div className='col-lg-6 ps-0 pe-2'>
                        <div className='row g-4'>
                            {schools.map((school, index) => (
                                <div className='col-6' key={school.id || index}>
                                    <Cards 
                                        title={school.title} 
                                        description={school.desc} 
                                        image={school.img} 
                                        link={school.link} 
                                        className="school-card-box" 
                                        btnTxt={school.btnTxt}
                                        index={index}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Panel - Map Section */}
                    <div className='col-lg-6 pe-0 ps-2'>
                        <div className='map-container'>
                            <div className='map-filters mb-3'>
                                <div className='d-flex flex-wrap gap-2'>
                                    <button className='filter-btn active'>Tous</button>
                                    <button className='filter-btn'>Primaire</button>
                                    <button className='filter-btn'>Secondaire</button>
                                    <button className='filter-btn'>SEN</button>
                                    <button className='filter-btn'>Technique</button>
                                </div>
                                <div className='search-box'>
                                    <input type="text" placeholder="Search this area" className='search-input' />
                                    <i className="bi bi-search"></i>
                                </div>
                            </div>
                            <div className='map-placeholder'>
                                <div className='map-content'>
                                    <h5>Interactive Map of Mauritius</h5>
                                    <p>Map showing school locations across the island</p>
                                    <div className='map-markers'>
                                        <div className='marker' style={{top: '20%', left: '30%'}}>
                                            <span>Le Bocage International School</span>
                                        </div>
                                        <div className='marker' style={{top: '40%', left: '60%'}}>
                                            <span>Morning Star School</span>
                                        </div>
                                        <div className='marker' style={{top: '60%', left: '25%'}}>
                                            <span>Doha Academy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container '>
                <CtaSection 
                    type="school"  
                    title={ctaSection[0].title} 
                    btnText={ctaSection[0].btnText} 
                    link={ctaSection[0].link} 
                    image={ctaSection[0].image}
                    className="cta-section-school" 
                />
            </div>
            <FaqSection faqData={faqData} />
        </div>
    )
}

export default Schools