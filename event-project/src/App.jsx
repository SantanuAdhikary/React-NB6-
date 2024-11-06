import React from 'react'

const App = () => {

  let hi = ()=>{
    alert("hi function...")
  }

  let hello = (uname)=>{
    alert(`hello ${uname} am hello function...`)
  }
  return (
    <div>

      <button onClick={hi}>click for hi</button>

      <button onClick={()=>hi()}> another button</button>

      <button onClick={()=>hello("san")}> click for hello</button>
    </div>
  )
}

export default App


