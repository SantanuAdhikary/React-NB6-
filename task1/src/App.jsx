import React from 'react'
import Hello from './Components/Hello'
import Hi from './Components/Hi'
import Bye from './Components/Bye'

const App = () => {

  const items = [
    { id: 1, name: "Item 1", description: "This is item 1" },
    { id: 2, name: "Item 2", description: "This is item 2" },
    { id: 3, name: "Item 3", description: "This is item 3" },
  ];
  return (
    <div>

       <Hello/>
       <Hi/>
      <Bye   items = {items} />
    </div>
  )
}

export default App