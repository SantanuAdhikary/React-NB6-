import { useState } from 'react'

const Form2 = () => {

    let [user , setUser] = useState({
        userName : "",
        userEmail:"",
        userPass :""
    })

    let {userName, userEmail,userPass} = user;

    let handleChange =(e)=>{

        let {name,value} = e.target;

        setUser({...user, [name] : value})    //! important
      

    }

    let handleSubmit =(e)=>{
        e.preventDefault()
        console.log({userName,userEmail,userPass})

        setUser({
            userName : "",
            userEmail:"",
            userPass :""
        })
    }

  return (
    <div>

        <form action="" onSubmit={handleSubmit}>

            <div className="form-group" >
                <label htmlFor="">user name</label>
                <input type="text" name="userName" id="" value={userName}  onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="">user email</label>
                <input type="text" name="userEmail" id="" value={userEmail} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="">user password</label>
                <input type="text" name="userPass" id="" value={userPass} onChange={handleChange} />
            </div>

            <div className="form-group">
                <button>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form2