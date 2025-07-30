import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.5
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const CtaSection = ( {type = "default", title, btnText, link, className, image}) => {
    if(type === "default"){
      return (
        <div className={`cta-section container m-0 ${className}`}>
          <div className="row align-items-stretch rounded overflow-hidden position-relative">
            {/* Left side - Form */}
            <div className="cta-left-overlay position-relative">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="d-flex flex-column gap-3 w-100"
              >
                <motion.h5 className="secondary-text mb-3" variants={itemVariants}>
                  Abonnez-vous aux Actualités et Evènements
                </motion.h5>
                <motion.form className="d-flex flex-column gap-3 w-100" variants={containerVariants}>
                  <motion.input
                    type="email"
                    className="form-control w-100"
                    placeholder="Insérez votre adresse email"
                    required
                    variants={itemVariants}
                  />
                  <motion.div variants={itemVariants}>
                    <Button variant="black" text="Je m’abonne" className="btn-cta text-center" />
                  </motion.div>
                </motion.form>
              </motion.div>
            </div>
            <div className=" cta-image-bg" style={image ? { backgroundImage: `url(${image})` } : {}}>
            </div>
          </div>
        </div>
      );
    }else if(type === "school"){
      return (
        <div className={`cta-section m-0 ${className}`}>
          <div className="row align-items-stretch rounded overflow-hidden position-relative">
            {/* Left side - Form */}
            <div className="col-md-5 cta-left-overlay position-relative">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="d-flex flex-column gap-3 w-100"
              >
                <motion.h5 className="secondary-text mb-3" variants={itemVariants}>
                  {title}
                </motion.h5>  
                <Button variant="white" text={btnText} className="school-cta-btn" link={link} />
              </motion.div>
            </div>
            <div className="col-md-7 cta-image-bg" style={image ? { backgroundImage: `url(${image})` } : {}}>
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <div className={`cta-section m-0 ${className}`}>
          <div className="row align-items-stretch rounded overflow-hidden position-relative">
            <div className="col-md-5 cta-left-overlay position-relative">
              <h5 className="secondary-text mb-3">{title}</h5>
            </div>
          </div>
        </div>
      );
    }


};

export default CtaSection;
