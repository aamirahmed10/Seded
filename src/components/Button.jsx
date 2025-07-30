import React from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-icon"
  >
    <path 
      d="M7 17L17 7M17 7H7M17 7V17" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

const Button = ({text, link, variant = "border", className}) => {

    let buttonClass = "";

    switch(variant){
        case "border":
            buttonClass = "border-button";
            break;
        case "black":
            buttonClass = "black-button";
            break;
        case 'white':
            buttonClass = "white-border";
            break;
        case 'icon-button':
            buttonClass = "small-text-bold text-decoration-none icon-btn d-inline-flex align-items-start gap-2";
            break;
    }
  return (
    <div >
      {variant === "icon-button" ? (
        <Link to={link} className={`${buttonClass} ${className}`}>
          {text} 
          <ArrowIcon />
        </Link>
      ) : link ? (
        <Link to={link} className={`${buttonClass} ${className} menu-text rounded-8`}>
          <span>{text}</span>
        </Link>
      ) : (
        <a href={link} className={`${buttonClass} ${className} menu-text rounded-8`}>
          <span>{text}</span>
        </a>
      )}
    </div>
  )
}

export default Button