import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='outer'>

        <div className="inner" >

        <form action="" autoComplete='off'>
              <div className="form-group">
                <label htmlFor="un">User Name</label>
                <input type="text" name="userName" id="un" placeholder='enter your name' />
              </div>
              <div className="form-group">
                <label htmlFor="up">User Password</label>
                <input type="password" name="userPass" id="up" placeholder='enter your password'/>
              </div>
              <div className="form-group">
                  <button type="submit">Login</button>
              </div>
              <p>forgotten Password?</p>
              <hr />
              <div className="buttons">

              <button className='btn'>Create New Account</button>
              </div>
        </form>

        </div>
    
        
    </div>
  )
}

export default Login