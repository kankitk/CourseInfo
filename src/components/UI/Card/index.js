import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className='cardBody'>
        <div className='cardTitle'>
            <p>{props.title}</p>
        </div>
        <div className='cardImage'>
            <img src={props.imageUrl} alt="No preview available"></img>
        </div>
        <div className='cardSubtitle'>
            <p>{props.subtitle}</p>
        </div>
    </div>
  )
}
