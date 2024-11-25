import React from 'react'
import { useCustom } from '../context/UserContext'

const Bye = () => {

 let {age , increment,number} =  useCustom()
  return (
    <div>
        <h2> bye component</h2>

        <h3>{age}</h3>

        <h2> {number}</h2>

        <button onClick={increment}>increment from bye</button>
    </div>
  )
}

export default Bye