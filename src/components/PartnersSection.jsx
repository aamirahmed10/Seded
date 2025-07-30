import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Button from './Button';

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};
const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const PartnersSection = ({ title, description, btn, img, link }) => {
    return (
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center gap-1'>
            <motion.div
                className='d-flex flex-column justify-content-start align-items-start w-100 w-md-50'
                variants={leftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                 <h3 className="secondary-text ">{title}</h3>
                 <p className="sub-heading-light pb-3 m-0">{description}</p>
                 <Button text={btn} link={link} variant="icon-button" />
            </motion.div>
            <motion.div
                className='partners-img w-100 w-md-50 position-relative'
                variants={rightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                 {img.map((item, index) => (
                    <img src={item.img} alt={title}  className='img-fluid' key={index}/>
                 ))}
            </motion.div>
        </div>
    )
}

export default PartnersSection;