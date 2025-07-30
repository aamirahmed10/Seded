import React from 'react'
import { motion, useInView } from 'framer-motion'
import BannerSlider from '../components/BannerSlider'
import { aboutBanner, aboutContent } from '../context/BrContent'
import ColumnText from '../components/ColumnText'

const AnimatedSection = ({ children, variants, className = "" }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { 
        once: true, 
        amount: 0.3,
        margin: "-100px"
    })

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    )
}

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const imageVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const logoVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.5,
            rotate: -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className='about-page'>
            <BannerSlider height="40vh" className="common-slider" content={aboutBanner} type='common'/>
            
            <AnimatedSection variants={itemVariants}>
                <ColumnText title={aboutContent[0].title} description={aboutContent[0].description} />
            </AnimatedSection>
            
            <AnimatedSection variants={itemVariants}>
                <div className='container d-flex flex-column gap-2 align-items-center justify-content-center p-0 '>
                   <motion.h4 
                       className='secondary-text pb-4 text-center'
                       variants={itemVariants}
                   >
                       {aboutContent[0].image_title}
                   </motion.h4>
                   <motion.div 
                       className='row d-flex image-grid align-items-stretch justify-content-center p-0 '
                       variants={containerVariants}
                   >
                        {aboutContent[0].images.map((image, idx) => (   
                            <motion.div 
                                className='col-md-4 image-grid-item p-0 m-0 d-flex flex-column' 
                                key={idx}
                                variants={imageVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className='image-container'>
                                    <img src={image.img} alt={image.title} />
                                </div>
                                <div className='d-flex flex-column gap-1 align-items-center justify-content-center flex-grow-1'>
                                  <h6 className='menu-text p-0 m-0 text-center'>{image.title}</h6>
                                  <p className='small-text p-0 m-0 small-light-text text-center'>{image.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection variants={itemVariants}>
                <ColumnText title={aboutContent[0].section_title} description={aboutContent[0].section_description}/>
            </AnimatedSection>
            
            <AnimatedSection variants={itemVariants}>
                <div className='container p-0'>
                    <motion.div 
                        className='row d-flex align-items-center justify-content-center about-partners-logo'
                        variants={containerVariants}
                    >
                        {aboutContent[0].partners_logo.map((logo, idx) => (
                            <motion.div 
                                className='col-md-3' 
                                key={idx}
                                variants={logoVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <span className='d-flex align-items-center justify-content-center'>
                                <img src={logo.img} alt={logo.title} />
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>
        </div>
    )
}

export default About