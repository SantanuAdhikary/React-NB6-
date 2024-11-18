import React from 'react'

const Form1 = () => {
    let [uname , setUname] =  useState("")
    let [email,setEmail] = useState("")
 
    let handleName =(e)=>{
     // console.log(e.target.value)
      setUname(e.target.value)
    }
    let handleEmail =(e)=>{
     // console.log(e.target.value)
      setEmail(e.target.value)
    }
 
   let handleSubmit=(e)=>{
 
     e.preventDefault()
     console.log({uname,email})
 
     setUname("")
     setEmail("")
   }
  return (
    <>
    
    <form action="" onSubmit={handleSubmit}>

      <div className="form-group">
         <label htmlFor="">User Name</label>
         <input type="text" name="" id="" value={uname} onChange={handleName}/>
      </div>
      <div className="form-group">
         <label htmlFor="">User Email</label>
         <input type="email" name="" id="" value={email} onChange={handleEmail}/>
      </div>
      <div className="form-group">
        <button>submit</button>
      </div>

      {/* <h1>{uname}</h1>
      <h2>{email}</h2> */}
    </form>
    
    </>
  )
}

export default Form1