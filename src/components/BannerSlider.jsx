import React from 'react';
import '../assets/css/style.css';
import { useBrSeDecContext } from '../context/BrSeDecProvider';
import { motion } from "framer-motion";
import Button from './Button';
import { Link } from 'react-router-dom';

const BannerSlider = ({ height = "70vh", className, content, type='home' }) => {
  const { bannerSliderContent } = useBrSeDecContext();

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.45,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,        
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  if(type === 'home'){
    return (
      <div
          id="bannerCarousel"
          className={`carousel slide carousel-fade ${className}`}
          data-bs-ride="carousel"
          data-bs-interval="3000"
          style={{ maxHeight: height, overflow: "hidden", }}
      >
        <div className="carousel-indicators">
          {content.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#bannerCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner" style={{ height }}>
          {content.map((slide, idx) => (
            <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={idx}>
              <img
                src={slide.img}
                className="d-block w-100 "
                alt={`Slide ${idx + 1}`}
                style={{ objectFit: "cover", height , objectPosition: "top" }}
              />
  
              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100"
                style={{
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0,0,0,0.3)",
                  borderRadius: "inherit"
                }}
              >
                <motion.div
                  className='banner-content d-flex flex-column gap-2 justify-content-center align-items-center'
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={idx} 
                >
                  <motion.h1 className="text-white h1-primary" variants={itemVariants}>
                    {slide.title}
                  </motion.h1>
                  <motion.p className="text-white mb-0 sub-heading-light" variants={itemVariants}>
                    {slide.desc}
                  </motion.p>
                  {slide.btn && (
                    <motion.div variants={itemVariants}>
                      <Button variant="white" text={slide.btn} link={slide.link} className="banner-btn mt-5" />
                    </motion.div>
                  )}
                 </motion.div>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    );
  } else if(type === 'common'){
    return (
      <div
          id="commonCarousel"
          className={`carousel slide container carousel-fade p-0 ${className}`}
          data-bs-ride="carousel"
          data-bs-interval="3000"
          style={{ maxHeight: height, overflow: "hidden", }}
      >
        {content.length > 1 && (
        <div className="carousel-indicators">
          {content.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#commonCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        )}
        <div className="carousel-inner" style={{ height }}>
          {content.map((slide, idx) => (
            <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={idx}>
              <img
                src={slide.img}
                className="d-block w-100 "
                alt={`Slide ${idx + 1}`}
                style={{ objectFit: "cover", height , objectPosition: "top" }}
              />
  
              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100"
                style={{
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0,0,0,0.3)",
                  borderRadius: "inherit"
                }}
              >
                <motion.div
                  className='banner-content d-flex flex-column gap-2 justify-content-center align-items-center'
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={idx} 
                >
                  {
                    slide.category && (
                      <span className='banner-category'>{slide.category}</span>
                    )
                  }
                  <motion.h1 className="text-white h1-primary" variants={itemVariants}>
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p className="text-white mb-0 enu-text w-75 menu-text" variants={itemVariants}>
                    {slide.desc}
                  </motion.p>
                  {
                    slide.date && (
                      <span className='banner-date'>{slide.date}</span>
                    )
                  }
                  {slide.btn && (
                    <motion.div variants={itemVariants}>
                      <Button variant="white" text={slide.btn} link={slide.link} className="banner-btn mt-5" />
                    </motion.div>
                  )}
                 </motion.div>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    );
  } else if(type === 'school-profile'){
    return (
      <div
        className="container school-profile-slider-wrapper p-0"
        style={{ position: 'relative', height, overflow: 'visible' }}
      >
        <nav aria-label="breadcrumb" style={{ position: 'absolute', top: 24, left: 32, zIndex: 5 }}>
          <ol className="breadcrumb m-0 bg-transparent p-0">
            <li className="breadcrumb-item">
              <Link to="/" className='d-flex align-items-center ' ><i class="bi bi-house-fill"></i> </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/schools" className='d-flex align-items-center gap-4' style={{ color: '#fff', fontSize: '16px' }}><i class="bi bi-chevron-right " style={{ color: '#FAD80E', fontSize: '16px' }}></i> Schools</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/schools/primary" className='d-flex align-items-center gap-4' style={{ color: '#fff', fontSize: '16px' }}><i class="bi bi-chevron-right " style={{ color: '#fff', fontWeight: 600, fontSize: '16px' }}></i> Primary <i class="bi bi-chevron-right " style={{ color: '#fff', fontWeight: 600, fontSize: '16px' }}></i></Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page" style={{ color: '#fff', fontWeight: 600, fontSize: '16px' }}>
              {content[0].title}
            </li>
          </ol>
        </nav>
        <div className="carousel-inner" >
          {content.map((slide, idx) => (
            <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={idx} style={{ position: 'relative' }}>
              <motion.img
                src={slide.img}
                className="d-block w-100"
                alt={`Slide ${idx + 1}`}
                style={{ objectFit: "cover", width: '100%', height: '100%', objectPosition: "top" }}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: 32,
                  left: 0,
                  width: '100%',
                  textAlign: 'center',
                  zIndex: 2,
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontSize: 32,
                    fontWeight: 700,
                    textShadow: '0 2px 8px #000a',
                    display: 'inline-block',
                  }}
                >
                  {slide.title}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
        {content[0].logo && (
          <motion.img
            src={content[0].logo}
            alt="School Logo"
            className="school-profile-logo-absolute"
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '15%',
              transform: 'translateX(-50%)',
              width: '150px',
              height: '150px',
              objectFit: 'contain',
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 2px 12px #0002',
              zIndex: 3,
              padding: '8px',
              border: '4px solid #fff',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>
    )
  } else {
    return (
      <div>
        <h1>Banner Slider</h1>
      </div>
    )
  }
};

export default BannerSlider;