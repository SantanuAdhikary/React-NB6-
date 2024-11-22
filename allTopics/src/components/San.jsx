import React, { useState } from 'react'

const San = () => {

   let [user , setUser] =    useState({
     userName : "",
     userPh : "",
     gender:""
   })

   let [subjects,setSubjects] = useState([])

   let {userName , userPh,gender} = user;

   let handleChange = (e)=>{
       let {name, value} = e.target

       setUser({...user, [name]:value})
   }


   let handleCheckbox = (e)=>{
    let {checked, value} = e.target

    if(checked)
    {
        setSubjects([...subjects,value])
    }
    else{
        
        setSubjects(subjects.filter(ele=> ele!==value))
    }

   }
   let handleSubmit =(e)=>{
         e.preventDefault()
         console.log({userName,userPh,gender,subjects})
        setUser({
            userName : "",
            userPh : "",
            gender:""
          })
      setSubjects([])
   }
  return (
    <>
    
            <h1> this is san component</h1>

              <form action="" onSubmit={handleSubmit}>

                 <label htmlFor="">user name</label>
                 <input type="text"  name="userName" value={userName} onChange={handleChange}/> <br />

                 <label htmlFor="">phno</label>
                 <input type="text" name="userPh"  onChange={handleChange} value={userPh}/> <br />


                 {/* radio */}

               <input type="radio" name="gender" id="" value="male"  onChange={handleChange} checked = {gender==="male"}/>male
               <input type="radio" name="gender" id="" value="female" onChange={handleChange} checked = {gender==="female"}/>female
               <input type="radio" name="gender" id="" value ="others" onChange={handleChange} checked = {gender==="others"}/>others  <br />


               {/* checkbox */}

               <label htmlFor="">select subjects</label>

               <input type="checkbox" name="" id="" value="html" onChange={handleCheckbox} checked={subjects.includes("html")}/>html
               <input type="checkbox" name="" id="" value="css" onChange={handleCheckbox} checked={subjects.includes("css")}/>css
               <input type="checkbox" name="" id="" value="js" onChange={handleCheckbox} checked={subjects.includes("js")}/>js

                 <button>display</button>
              </form>

    </>
  )
}

export default San