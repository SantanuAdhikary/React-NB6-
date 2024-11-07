import React, { Fragment } from 'react'

const Hero = ({heading, myAge, btn, myArr,obj,students,increase}) => {
    // console.log(props)

    // let {heading, myAge, btn} = props
    console.log(obj)
  return (
    <>
             <h1> { heading} </h1>
             <p>Lorem, ipsum dolor.</p>

             <h2> My age is : {myAge}</h2>

               {

                   myArr.map((ele,index)=>{
                     return(
                        <li key={index}> {ele} </li>
                     )
                   })
               }

               <h2> Student Name : {obj.sname}</h2>
               <h3> city :  {obj.add.city}</h3>

               <h2>skills</h2>

               {
                 obj.skills.map((skill,index)=>{
                    return(
                       <li key={index}>
                            {skill}
                       </li>
                    )
                 })
               }

               <hr />

               {
                    students.map((student,index)=>{
                        return(
                            <div key={index}>
                                <h3> studentName : {student.sname} </h3>
                                <h4> student age : {student.age}</h4>

                                <h3>student skills</h3>

                                {
                                  student.skills.map((skill,index)=>{
                                    return(
                                      <li key="index"> {skill} </li>
                                    )
                                  })
                                }

                                <hr />
                            </div>
                        )

                    })

               }

              


             <button onClick={increase}>{btn}</button>

             
    </>
  )
}

export default Hero