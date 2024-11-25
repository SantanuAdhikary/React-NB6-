import React from 'react'
import { useCustom } from '../context/UserContext'



const Hello = () => {

     let {uname}  =  useCustom()
       
  return (
    <div>

        <h1> {uname}</h1>
    </div>
  )
}

export default Hello