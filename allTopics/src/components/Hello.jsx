

import React, { useState } from 'react'

const Hello = (props) => {

     let [number , setNumber] = useState(0)

    let {subjects, age}  = props;

    let increase =()=>{
       setNumber(number + 1)
    }
  return (
    <div>

      <h1>hello component</h1>

        <h1> age is : {age}</h1>

          {
             subjects.map((sub,index)=> {
                return(
                    <li key={index}> {sub} </li>
                )
             })
          }

          {
            subjects.map((sub,index)=>(
                <li key={index}> {sub} </li>
            ))
          }

   
          <h1> {number}</h1>

          <button onClick={increase}> increase </button>
    </div>
  )
}

export default Hello