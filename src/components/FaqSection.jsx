import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FaqSection = ({faqData}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index)
    }

    return (
        <div className='container section-spacing'>
            <div className='faq-container'>
                <h4 className='h1-primary text-center mb-5'>Questions Fréquemment Posées</h4>
                <div className='faq-list'>
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className='faq-header' onClick={() => toggleFaq(index)}>
                                <div className='faq-number'>    
                                    {faq.number}
                                </div>
                                <div className='faq-question'>{faq.question}</div>
                                <div className='faq-toggle'>
                                    {activeIndex === index ? (
                                        <motion.div
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 45 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <i className="bi bi-plus"></i>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ rotate: 45 }}
                                            animate={{ rotate: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <i className="bi bi-plus"></i>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className='faq-answer'
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{
                                            opacity: 0,
                                            maxHeight: 0,
                                            transition: {
                                                opacity: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                                                maxHeight: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                            }
                                        }}
                                        transition={{
                                            opacity: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
                                            maxHeight: { duration: 2, ease: [0.22, 1, 0.36, 1] }
                                        }}
                                        style={{ overflow: 'hidden', padding: 0 }}
                                    >
                                        <div className="faq-answer-inner">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqSection