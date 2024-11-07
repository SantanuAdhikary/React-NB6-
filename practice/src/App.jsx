import React, { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  let myName = "santanu";
  let myArr = [10, 20, 30, 40];

   let [number  , setNumber]= useState(0)

   let increase =()=>{
    console.log()
    setNumber(pre=> pre+1)
   }

  //  object 
  let student = 
    {
      sname: "ab",
      age: 13,
      skills: ["java", "js", "python"],
      add: {
        city: "chennai",
        pin: 123456,
      },
    }
    

    // array of objects 

  let studentDetails = [
    {
      sname: "ab",
      age: 13,
      skills: ["java", "js", "python"],
      add: {
        city: "chennai",
        pin: 123456,
      },
    },
    {
      sname: "ab",
      age: 13,
      skills: ["java", "js", "python"],
      add: {
        city: "chennai",
        pin: 123456,
      },
    },
    {
      sname: "ab",
      age: 13,
      skills: ["java", "js", "python"],
      add: {
        city: "chennai",
        pin: 123456,
      },
    },
    {
      sname: "ab",
      age: 13,
      skills: ["java", "js", "python"],
      add: {
        city: "chennai",
        pin: 123456,
      },
    },
  ];
  return (
    <>
      <Navbar />

      <h1>{number}</h1>

      <Hero
        heading="welcome to my webpage"
        btn="click"
        myAge={20}
        myArr={myArr}
        obj={student}
        students= {studentDetails}
        increase = {increase}
      />
    </>
  );
};

export default App;
