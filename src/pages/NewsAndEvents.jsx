import React, { useState, useEffect } from 'react'
import BannerSlider from '../components/BannerSlider'
import { newsAndEventsBanner, newsCards } from '../context/BrContent'
import Button from '../components/Button'
import { NEWS_EVENTS } from '../context/BrContent'     
import SchoolFilter from '../components/SchoolFilter'     
import Cards from '../components/Cards'
import CtaSection from '../components/CtaSection'

const NewsAndEvents = () => {
    const [news, setNews] = useState([])
    const [activeZone, setActiveZone] = useState(NEWS_EVENTS[0].value)

    useEffect(() => {
        const filteredNews = newsCards.filter((item) => {
          if (!item.category) return false;
          if (typeof item.category === 'string') {
            return item.category
              .split(',')
              .map(cat => cat.trim())
              .includes(activeZone)
          } else if (Array.isArray(item.category)) {
            return item.category.includes(activeZone)
          }
          return false
        })
        setNews(filteredNews)
      }, [activeZone])
      

    const handleZoneChange = (zone) => {
        setActiveZone(zone)
    }

    return (
        <div className='about-page'>
            <BannerSlider height="40vh" className="common-slider" content={newsAndEventsBanner} type='common'/>
            <div className='container py-4'>
                <div className='row'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <Button text="Lire" link="/article-detail" variant="icon-button" />
                </div>
            </div>
            <div className='container section-spacing'>
                <SchoolFilter onZoneChange={handleZoneChange} zones={NEWS_EVENTS} className='news-filter' />
                <div className='news-grid pt-4'>
                    {news.map((item, index) => (
                        <Cards 
                            key={item.id || index}
                            date={item.date}
                            title={item.title} 
                            description={item.desc} 
                            image={item.img} 
                            link={item.link} 
                            className="news-card-box" 
                            btnTxt={item.btnTxt}
                            index={index}
                            type='news'
                        />
                    ))}
                </div>
            </div>

            <div className='container section-bottom-spacing'>
                <CtaSection />
            </div>
        </div>
    )
}

export default NewsAndEvents;