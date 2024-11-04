import React from 'react'
import '../App.css'

const Cards = ({title,description}) => {
  return (
    <div className='card'>

        <h2> {title}</h2>
        <p>{description}</p>

    </div>
  )
}

export default Cards