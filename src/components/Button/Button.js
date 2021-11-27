import React from 'react'
import './Button.css'

const Button = (props) => {
    const { varient = 'primary', children, ...rest } = props
    return (
        <div>
            <button className={`button ${varient}`} {...rest} >
                {children}
            </button>
        </div>
    )
}

export default Button
