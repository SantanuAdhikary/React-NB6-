import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";


//! using if and else 

// const App = () => {
//   let isLogedin = false;


//    if(isLogedin)
//    {

//     return(
//         <Home/>
//     )

//    }
//    else{

//      return(
//       <>

//          <Login/>
//       </>
//      )

//    }

// };

// export default App;


//!  for ternary operator

// const App = () => {

//   let isLoggedin = false
   
//   return (
//     <div>


//     {
//               isLoggedin ?  <Home/>  : <Login/>

//     }
       
//     </div>
//   )
// }

// export default App



//!  for and operator

// const App = () => {

//   let isLoggedin = true
   
//   return (
//     <div>


//     {
//               isLoggedin &&  <Home/>  

//     }
       
//     </div>
//   )
// }

// export default App





const App = () => {

  let [isLoggedIn, setIsLoggedIn] = useState("false")

  let changeName = ()=>{

      setIsLoggedIn(!isLoggedIn)

  }
  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} changeName={changeName}/>

    <MainSection isLoggedIn = {isLoggedIn}/>
    </>
  )
}

export default App