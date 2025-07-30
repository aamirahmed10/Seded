import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';
import Cards from './Cards';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      when: 'beforeChildren',
      staggerChildren: 0.18
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const EventsSection = ({ events }) => {

  const limitedEvents = events.slice(0, 5);

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='row'>
        <div className='col-md-6'>
          <motion.div className='event-card' variants={cardVariants}>
            <div className='event-card-img w-100 overflow-hidden'>
              <img src={limitedEvents[0].image} alt='events-img' />
            </div>
            <div className='event-card-content'>
              <h6 className='small-text border px-2 py-1 border-black inline '>{limitedEvents[0].date}</h6>
              <h4 className='secondary-text'>{limitedEvents[0].title}</h4>
              <div>
                <p className='small-text'>{limitedEvents[0].description}</p>
                  <Button variant="icon-button" text={limitedEvents[0].btnTxt} link={limitedEvents[0].link} />
              </div>
            </div>
          </motion.div>
        </div>
        <div className='col-md-6'>
          <div className="event-card-grid">
            {limitedEvents.slice(1).map((event, idx) => (
               <Cards 
               key={event.id || idx}
               date={event.date}
               title={event.title} 
               description={event.description} 
               image={event.image} 
               link={event.link} 
               className="news-card-box" 
               btnTxt={event.btnTxt}
               index={idx}
               type='news'
             />
            ))}
          </div>
        </div>
      </div>
      <div className='text-center pt-4'>
        <Button variant="border" text="Voir tous les événements" link="/events" />
      </div>
    </motion.div>
  );
};

export default EventsSection;