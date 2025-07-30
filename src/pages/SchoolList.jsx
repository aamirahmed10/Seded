import React, { useState } from 'react'
import BannerSlider from '../components/BannerSlider'
import { schoolCategory } from '../context/BrContent'
import SchoolFilter from '../components/SchoolFilter'
import { ZONES, SCHOOLS_LIST } from '../context/BrContent'            
import SchoolCard from '../components/SchoolCard'


const SchoolList = () => {

    const [schools, setSchools] = useState(
        SCHOOLS_LIST.filter((school) => school.zone === 'A')
      )
    const handleZoneChange = (zone) => {
        const filteredSchools = SCHOOLS_LIST.filter((school) => school.zone === zone)
        setSchools(filteredSchools)
    }
    return (
        <div className='about-page'>
            <BannerSlider height="40vh" className="common-slider" content={schoolCategory} type='common'/>

            <div className='container section-spacing'>
                <SchoolFilter onZoneChange={handleZoneChange} zones={ZONES} />
                <div className='row school-list-grid pt-4'>
                    <div>
                        <h5 className='menu-text-light'>CONSEILLER PEDAGOGIQUE :</h5>
                        <h6 className='menu-text-bold'>Mr. Jean Marie Mosunallee</h6>
                    </div>
                    {schools.map((school, index) => (
                        <div className='col-md-6' key={school.id}>
                            <SchoolCard school={school} index={index} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SchoolList