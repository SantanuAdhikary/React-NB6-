import React from 'react'
import { useCustom } from '../context/UserContext'

const Hi = () => {

   let {age, increment} =   useCustom()
  return (
    <div>

        <h2>{age}</h2>

        <button onClick={increment}>incement from hi</button>
    </div>
  )
}

export default Hi