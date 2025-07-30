import React, { useRef } from 'react'
import Logo from '../components/Logo'
import { useBrSeDecContext } from '../context/BrSeDecProvider'
import { motion, useInView } from 'framer-motion'

const Footer = () => {
    const { footerlinks } = useBrSeDecContext()
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className='footer-container'
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
        >
            {footerlinks.map((link) => (
            <motion.div key={link.id}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.18
                        }
                    }
                }}
            >   
                <div className='row col-12 container bg-primary rounded-8'>
                    <div className='col-md-3 d-flex flex-column gap-5 align-items-start justify-content-between'>
                        <Logo logo='white' />
                         <motion.p
                            className='text-white m-0 p-0 sub-heading'
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                            }}
                         >
                            Service Diocésain de L'Éducation Catholique
                         </motion.p>
                    </div>
                    <div className='col-md-9 d-flex flex-row gap-3 justify-content-between pt-4'>
                        <div className='col-md-4 d-flex flex-column gap-3'>
                            <motion.h5 className='text-white m-0 p-0 menu-text'
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                            >Address</motion.h5>
                            <ul className='d-flex flex-column gap-2 align-items-start justify-content-start p-0 m-0'>
                                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
                                    <motion.a href={link.email} className='text-white m-0 p-0 small-text' variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{link.email}</motion.a>
                                </motion.li>
                                <motion.li className='d-flex flex-row gap-2 sedec-numbers' variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
                                {link.numbers.map((number, idx) => (
                                    <motion.a  href={number.link} className='text-white m-0 p-0 small-text' key={idx} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{number.name}</motion.a>                               
                                ))}
                                </motion.li>
                                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
                                    <motion.a href={link.address} target='_blank' className='text-white m-0 p-0 small-text' variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{link.address}</motion.a>
                                </motion.li>
                            </ul>

                        </div>
                        <div className='col-md-4 d-flex flex-column gap-3'>
                            <motion.h5 className='text-white m-0 p-0 menu-text'
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                            >Liens utiles</motion.h5>
                            <ul className='d-flex flex-column gap-2 align-items-start justify-content-start p-0 m-0'>
                                {link.usefulLinks.map((link, idx) => (
                                     <motion.li key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
                                          <motion.a href={link.link} target='_blank' className='text-white m-0 p-0 small-text' variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{link.name}</motion.a>
                                      </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className='col-md-4 d-flex flex-column gap-3'>
                            <motion.h5 className='text-white m-0 p-0 menu-text'
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                            >Privacy</motion.h5>
                            <ul className='d-flex flex-column gap-2 align-items-start justify-content-start p-0 m-0'>
                                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
                                    <motion.a href={link.policy} className='text-white m-0 p-0 small-text' variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{link.policy}</motion.a>
                                </motion.li>
                                <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
                                    <motion.a href={link.conditions} className='text-white m-0 p-0 small-text' variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{link.conditions}</motion.a>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                                
                </div>
                <motion.div className='container footer-bottom d-flex flex-row  justify-content-between align-items-center'
                     variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                  >
                    <motion.p className='p-0 small-text ' variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{link.copyright}</motion.p>
                    <motion.p className='p-0 small-text' variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{link.txt}</motion.p>
                </motion.div>
            </motion.div>  
            ))}    
        </motion.div>
    )
}

export default Footer