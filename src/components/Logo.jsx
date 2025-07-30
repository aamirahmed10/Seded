import React from 'react'
import { Link } from 'react-router-dom'
import { BLACK_LOGO, WHITE_LOGO } from '../helpers/BrConstants'

const Logo = ({logo}) => {
    return (
        <Link to='/'>

               {logo == 'white' ?(
                <img src={`${WHITE_LOGO}`} alt="logo" />
                ):(
                    <img src={`${BLACK_LOGO}`} alt="logo" />
                )}
        </Link>
    )
}

export default Logo