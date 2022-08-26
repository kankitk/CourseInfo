import React from 'react'
import './header.css'

export default function Header(props) {
    return (
        <div>
            <div className='header'>
                <p>Course Info</p>
            </div>
            {props.children}
        </div>
    )
}
