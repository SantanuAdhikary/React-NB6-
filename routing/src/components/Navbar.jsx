import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <nav>

         <div className="logo">
            <h1> myApp</h1>
         </div>

         <div className="list-items">
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact us</Link> </li>
             
            </ul>
         </div>
         <div className="buttons">
            <button>login</button>
         </div>
    </nav>
    
    </>
  )
}

export default Navbar