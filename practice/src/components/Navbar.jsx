import React from 'react'

const Navbar = () => {
  return (
    <div>

         <nav>
            <div className="logo">MYLOGO</div>

            <div className="list-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="buttons">
                <button>login</button>
                <button>logout</button>
            </div>
         </nav>
    </div>
  )
}

export default Navbar