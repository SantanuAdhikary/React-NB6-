

import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  let [count , setCount] = useState(0)

  let [uname, setUname] = useState("")
  let val =  useRef(0)
  let btnRef = useRef()
  let inputRef = useRef("")

  let vdoRef = useRef()
 

  let increment = ()=>{

    val.current = val.current + 1;
    console.log(`value is : ${val.current}`)
    setCount(count + 1)
  }


  let changeColor = ()=>{
       btnRef.current.style.backgroundColor = "red"
  }


  let handleChange = (e)=>{
      setUname(e.target.value)
  }

  let changeStyle = ()=>{
    inputRef.current.style.backgroundColor = "green"
  }

  let play = ()=>{
    vdoRef.current.play()
  }

  let pause = ()=>{
    vdoRef.current.pause()
  }
  useEffect(()=>{

    
    console.log('i am rendering again')
  })
  return (
    <>


        <h1>{count}</h1>

         <button onClick={increment} ref={btnRef} >increment</button>

         <button onClick={changeColor}>change color</button>

         <input type="text" name="" id="" ref={inputRef}  value={uname} onChange={handleChange}/>

         <button onClick={changeStyle}>changeInputColor</button>


<br />

         <video src="https://www.w3schools.com/html/mov_bbb.mp4"  ref={vdoRef}></video>

         <button onClick={play}> play</button>
         <button onClick={pause}>pause</button>

    </>
  )
}

export default App