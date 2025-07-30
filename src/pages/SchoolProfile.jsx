import React, { useState, useRef } from 'react'
import BannerSlider from '../components/BannerSlider'
import { schoolProfileContent, schoolProfileBanner } from '../context/BrContent'
import ContactDetails from '../components/ContactDetails'
import NumberCounter from '../components/NumberCounter'
import ColumnText from '../components/ColumnText'
import ImageGallery from '../components/ImageGallery'
import { motion, useInView } from 'framer-motion'

const SchoolProfile = () => {
    const [schoolProfile] = useState(schoolProfileContent)

    const intro = schoolProfile.find(item => item.id === 1)
    const counters = schoolProfile.filter(item => item.number && item.desc)
    const history = schoolProfile.find(item => item.id === 5)
    const contact = schoolProfile.find(item => item.id === 6)

    const topSectionRef = useRef(null)
    const topInView = useInView(topSectionRef, { once: true, amount: 0.2 })

    return (
        <div className='school-profile-page'>
            <BannerSlider height="40vh" className="common-slider" content={schoolProfileBanner} type='school-profile'/>

            <div ref={topSectionRef} className='container section-top-spacing d-flex flex-row px-0'>
                <motion.div
                    className='col-md-9 pe-5'
                    initial={{ opacity: 0, x: -60 }}
                    animate={topInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {intro && (
                        <div>
                            <h2 className="h1-primary pb-2">{intro.title}</h2>
                            <p className="menu-text">{intro.description}</p>
                        </div>
                    )}
                    <div className='pt-2 d-flex flex-row align-items-start justify-content-between'>
                        {counters.map(counter => (
                            <NumberCounter key={counter.id} number={counter.number} desc={counter.desc} className='school-counter' />
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className='col-md-3'
                    initial={{ opacity: 0, x: 60 }}
                    animate={topInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {contact && (
                        <ContactDetails
                            title={contact.title}
                            name={contact.name}
                            location={contact.location}
                            phone={contact.phone}
                            email={contact.email}
                            phone_link={contact.phone_link}
                            email_link={contact.email_link}
                        />
                    )}
                </motion.div>
            </div>

            <div className='container p-0'>
                {history && (
                    <ColumnText title={history.title} description={history.description} />
                )}
            </div>
            <div className='container p-0 section-bottom-spacing'>
                <ImageGallery />
            </div>
        </div>
    )
}

export default SchoolProfile;