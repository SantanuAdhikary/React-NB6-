import React from 'react'
import Hello from './components/Hello'
import Hi from './components/Hi'

import UserProvider from './context/UserContext'
import Bye from './components/Bye'

const App = () => {
  return (
    <div>

      {/* 3rd step */}

      <UserProvider>

        <Hello/>

        <Hi/>
        <Bye/>

        </UserProvider>

    </div>
  )
}

export default App