import React, { useEffect, useState } from "react";

const Example = () => {
  let [number, setNumber] = useState(0);

  let [uname, setUname] = useState("virat");

  // ! renders only one time

  // useEffect(()=>{

  //     document.title = `count is ${number}`
  //     console.log('hello')
  // },[])

  //!  renders again and again

  // useEffect(()=>{

  //     document.title = `count is ${number}`
  //     console.log('hello')
  // },)

  // ! renders only the depency (number) is changed

  useEffect(()=>{

      document.title = `count is ${number}`
      console.log('hello')
  },[number])

  let increase = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1> {number} </h1>

      <button onClick={increase}>increment</button>

      <h2>{uname}</h2>

      <button onClick={() => setUname("santanu")}>change name</button>
    </div>
  );
};

export default Example;
