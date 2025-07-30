import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Button from './Button';


const InfoCard = ({ title, subtitle, subtext, description, extra, buttonText, link, itemVariants }) => {
 

  return (
    <motion.div className="card h-100 shadow-sm rounded-4 p-3 border-0" style={{backgroundColor: "var(--light-gray-color)"}}
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    >
      {subtitle && <small className="small-light-text">{subtitle}</small>}
      {subtext && <small className="small-light-text">{subtext}</small>}
      <div className='info-card-content d-flex flex-column gap-2'>
        <h5 className="sub-heading mt-1">{title}</h5>
        {description && <p className="small-text mb-1">{description}</p>}
     </div>
      {extra && <p className="small-light-text mb-2">{extra}</p>}
      {buttonText && (
        <Button text={buttonText} link={link} variant="icon-button" className="info-card-btn" />
      )}
    </motion.div>
  );
};

export default InfoCard;