import React from 'react'
import { useCustom } from '../context/UserContext'

const Bye = () => {

 let {age} =    useCustom()
  return (
    <div>
        <h2> bye component</h2>

        <h3>{age}</h3>
    </div>
  )
}

export default Bye