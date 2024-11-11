import React, { useState } from 'react'
import './Navbar.css'
const Navbar = ({isLoggedIn, changeName}) => {





 
  return (
    <>

    <nav>
         <div className="logo">
            <h1>MyLogo</h1>
         </div>
         <div className="list-item">
            <ul>

            <li>home</li>
            <li>about</li>
            <li>contact us</li>
            </ul>
         </div>
         <div className="btn" onClick={changeName}>
            <button >
                  {isLoggedIn? "logout": "login"}  
            </button>
         </div>
    </nav>

    </>
  )
}

export default Navbar