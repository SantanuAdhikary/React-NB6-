import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>

          <nav>
                 <div className="logo">

                    <h2> <span>My</span>  Logo</h2>

                 </div>

                 <div className="list-items">

                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>

                 </div>

                 <div className="buttons">
 
                         <button>Login</button>
                         <button>SignUp</button>
                 </div>
          </nav>
    </div>
  )
}

export default Navbar