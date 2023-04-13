import React from 'react'
import './style.css'

const Button = ({ onClick, img }) => {
    return (
        <div>
            <img src={img} alt='' onClick={onClick} />
        </div>
    )
}

export default Button
