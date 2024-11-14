import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/Error'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
       <BrowserRouter>

         <Navbar/>

            <Routes>

                 <Route path='/' element={ <Home/>} />
                 <Route path='/about' element = { <About/> }/>
                 <Route path='/contact' element = { <Contact/> }/>
                 <Route path='*' element = { <Error/> }/>
              </Routes>
       </BrowserRouter>
    </>
  )
}

export default App


