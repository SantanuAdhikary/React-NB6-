


import React, { useState } from 'react'
import Hello from './components/Hello'
import San from './components/San'

const App = () => {

  let uname = "santanu"

   let [display , setDisplay] = useState(true)

  
  return (
    <>

       <h1> welcome </h1>
       <p>Lorem ipsum dolor sit amet.</p>

       <h2> {uname} </h2>

       <br />

       {

        display?    <Hello subjects= {['java','js','html']}  age= {10}  />  :    <San/>
       }

     
       <button onClick={()=> setDisplay(!display)}> change component</button>

    
    </>
  )
}

export default App