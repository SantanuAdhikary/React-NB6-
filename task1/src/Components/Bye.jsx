import React from 'react'
import How from './How'
import { useState } from 'react'

const Bye = ({items}) => {

       let [showHow, setShowHow]    =  useState(false)
       let [number,setNumber] = useState(0)

    let changeName = ()=>{
        console.log(showHow)
        setShowHow(!showHow)
    }

    let increment =()=>{
        setNumber(number+1)
    }
  return (
    <>
    <h1> this is bye component</h1>


      {
        items.map((item,index)=>{
            return(
                <li key={index}>
                   <b> {item.name} : </b> { item.description}
                </li>
            )
        })
      }

      <button onClick={changeName}> 
        { showHow ? "Hide How Component":"show how component"}
      </button>

        { showHow && <How/>} 


         <h1>{number} </h1>

        <button onClick={()=>setNumber(number+1)}>increment</button>

    </>


  )
}

export default Bye