import React from 'react'

const MainSection = ({isLoggedIn}) => {
  return (
    <div>
        <h1> 
            {
                isLoggedIn? "welcome to out page" : "please login"
            }
        </h1>
    </div>
  )
}

export default MainSection