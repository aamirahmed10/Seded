import React from 'react'

const ColumnText = ({title, description}) => {
  return (
    <div>
       <div className='container section-spacing d-flex flex-column gap-2'>
                <h4 className='secondary-text'>{title}</h4>
                <p className ='menu-text about-description'>{description}</p>
            </div>
    </div>
  )
}

export default ColumnText