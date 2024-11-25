import React from 'react'
import { useCustom } from '../context/UserContext'

const Hi = () => {

   let {age} =   useCustom()
  return (
    <div>

        <h2>{age}</h2>
    </div>
  )
}

export default Hi