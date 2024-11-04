import React from 'react'

const Child = ({myName, age , isStudent,salary,phno}) => {

    // let {myName, age , isStudent,salary,phno} = props
  return (
    <div>

        <h1> I am child1 component</h1>
         
         {/* <h2> My name is : {props.myName}</h2>
         <h3> my age is : {props.age}</h3>
         <h3> isStudent : {props.isStudent} </h3>
         <h3> salary : {props.salary} </h3>
         <h3> Phone number : {props.phno} </h3> */}


         <h2>{myName}</h2>
    </div>
  )
}

export default Child




