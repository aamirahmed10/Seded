import React from 'react'
import BannerSlider from '../components/BannerSlider'
import { articleDetailBanner, articleDetail, newsCards } from '../context/BrContent'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'

const ArticleDetail = () => {
 
  return (
    <div className='article-detail-page'>
        <BannerSlider height="40vh" className="article-banner common-slider" content={articleDetailBanner} type='common'/>
           <div className='container pt-3 '>
             <Link to="/news-and-events" className='menu-text-bold text-decoration-none icon-link'><i class="bi bi-arrow-left "></i> Retour</Link>
            </div>
          <div className='container section-spacing'>   
                <div className='row d-flex justify-content-center'>
                    <p className='article-text w-75 p-0 m-0'>{articleDetail[0].desc}</p>
                </div>
         </div>

         <div className='container section-bottom-spacing'>
            <div className='article-navigation d-flex justify-content-between align-items-start'>  
                    <h5 className='menu-text-bold m-0'>Articles similaire</h5> 
                    <Link to="/news-and-events" className='menu-text-bold text-decoration-none m-0 icon-link'>Voir Plus <i class="bi bi-arrow-right"></i></Link>
            </div>
            <div className='news-grid pt-4'>
                 {newsCards.slice(0, 4).map((item, index) => (
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
    </div>
    
  )
}

export default ArticleDetail