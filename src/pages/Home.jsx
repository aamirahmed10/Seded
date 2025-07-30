import React from 'react'
import BannerSlider from '../components/BannerSlider'
import InfoCard from '../components/InfoCard'
import { whatWeDo, partnersSection, vacancies, events, bannerSliderContent } from '../context/BrContent'
import PartnersSection from '../components/PartnersSection'
import CtaSection from '../components/CtaSection'
import EventsSection from '../components/EventsSection'
import Button from '../components/Button'
import { motion } from "framer-motion";

const Home = () => {
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
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
      };

    return (
        <div>
            <BannerSlider height="80vh" className="banner-slider" content={bannerSliderContent} type='home' />
            <div className="container whatwedo-section section-top-spacing ">
            <motion.h3  className="text-center h1-primary pb-5" initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.2 }} >
                Ce que nous faisons
            </motion.h3>
              <motion.div className="row g-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} >
                    {whatWeDo.map((item, index) => (
                    <motion.div className="col-lg-3 col-md-6 col-12" key={index} variants={itemVariants}>
                        <InfoCard title={item.title} description={item.description} itemVariants={itemVariants} />
                    </motion.div>
                    ))}
               </motion.div>
            </div>
             {/* Partners Section */}
            <div className='container section-spacing '>
                <motion.h3  className="text-center h1-primary pb-3 m-0" initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.2 }} >
                  Nos Partenaires
                </motion.h3>
               <PartnersSection {...partnersSection[0]} className={'partners-section'}/>
            </div>
              {/* Cta Section */}
            <div className='container  section-bottom-spacing'>
                <CtaSection />
            </div>
            {/* news events section */}
            <div className='container p-0  section-spacing'>
                <EventsSection events={events} />
            </div>
            <div className="container  vacancies-section p-0">
                
            <motion.h3 className="text-center h1-primary pb-5"  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.2 }}  >
                Postes vacants
            </motion.h3>
              <motion.div
                className="row g-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                >
                     {vacancies.map((item, index) => (
                    <motion.div className="col-lg-3 col-md-6 col-12" key={index} variants={itemVariants}>
                         <InfoCard
                            title={item.title}
                            subtitle={item.subtitle}
                            subtext={item.subtext}
                            extra={item.extra}
                            buttonText={item.buttonText}
                            link={item.link}
                        />
                    </motion.div>
                    ))}
              </motion.div>
              <motion.div className='text-center pt-5' initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.2 }}  >
                <Button variant="border" text="Voir tous les postes" className={'btn-events'} link="/vacancies" />
            </motion.div>
            </div>
            
        </div>
    )
}

export default Home;