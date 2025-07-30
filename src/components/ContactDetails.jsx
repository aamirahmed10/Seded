import React from 'react'
import { Link } from 'react-router-dom'


const ContactDetails = ({title, name, location, phone, email, phone_link, email_link}) => {
    return (
        <div className='contact-details-box p-3 rounded-3'>
            <h5 className='secondary-text'>{title}</h5>
            <ul className='p-0 d-flex flex-column gap-3'>
                <li className='d-flex align-items-start gap-2 d-flex flex-row'>
                    <i className="bi bi-person-circle secondary-text"></i>
                    <div>
                     <span className='menu-text-light'>Head Master</span>
                     <p className='menu-text-bold m-0'>{name}</p>
                    </div>
                </li>
                <li className='d-flex align-items-center gap-2 d-flex flex-row'>
                    <i className="bi bi-geo-alt secondary-text"></i>
                    <p className='menu-text p-0 m-0'>{location}</p>
                </li>
                <li className='d-flex align-items-start gap-2 d-flex flex-row anchor-links'>
                   <Link to={phone_link} className='menu-text-bold w-50 d-flex align-items-center gap-3'> <i className="bi bi-telephone secondary-text"></i> {phone}</Link> 
                </li>
                <li className='d-flex align-items-start gap-2 d-flex flex-row anchor-links'>
                    <Link to={email_link} className='menu-text-bold w-50 d-flex align-items-center gap-3'> <i className="bi bi-envelope secondary-text"></i> {email}</Link>
                </li>
            </ul>
        </div>
    )
}

export default ContactDetails;