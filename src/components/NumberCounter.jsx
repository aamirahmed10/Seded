import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const NumberCounter = ({ number, desc, className }) => {
    const [displayValue, setDisplayValue] = useState('')
    const ref = React.useRef(null)
    const isInView = useInView(ref, { 
        once: true, 
        amount: 0.5,
        margin: "-50px"
    })
    const isPureNumber = !isNaN(parseFloat(number)) && isFinite(number)

    useEffect(() => {
        if (isInView) {
            if (isPureNumber) {
                const duration = 2000 
                const steps = 60 
                const increment = number / steps
                const stepDuration = duration / steps

                let currentCount = 0
                const timer = setInterval(() => {
                    currentCount += increment
                    if (currentCount >= number) {
                        setDisplayValue(number.toString())
                        clearInterval(timer)
                    } else {
                        setDisplayValue(Math.floor(currentCount).toString())
                    }
                }, stepDuration)

                return () => clearInterval(timer)
            } else {

                const text = number.toString()
                let currentIndex = 0
                const typeSpeed = 100 

                const typeTimer = setInterval(() => {
                    if (currentIndex <= text.length) {
                        setDisplayValue(text.slice(0, currentIndex))
                        currentIndex++
                    } else {
                        clearInterval(typeTimer)
                    }
                }, typeSpeed)

                return () => clearInterval(typeTimer)
            }
        }
    }, [isInView, number, isPureNumber])

    return (
        <motion.div 
            ref={ref}
            className={`d-flex flex-column align-items-start justify-content-start gap-1 counter-box ${className}`}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
            } : { opacity: 0, y: 30, scale: 0.9 }}
          
        >
            <motion.h2 
                className='count-number p-0 m-0'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }
                } : { opacity: 0, scale: 0.5 }}
            >
                {displayValue}
            </motion.h2>
            <motion.p 
                className='count-desc p-0 m-0'
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                        duration: 0.6,
                        delay: 0.3,
                        ease: "easeOut"
                    }
                } : { opacity: 0, x: -20 }}
            >
                {desc}
            </motion.p>
        </motion.div>
    )
}

export default NumberCounter