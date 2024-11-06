import React, { useState } from "react";

const App = () => {
  let [msg, setMsg] = useState("hello");

  let [count, setCount] = useState(0);


  let [number , setNumber] = useState(0)

  let changeName = () => {
    setMsg("how are you");
  };

  let increase = () => {
    setCount(count + 1);
  };

  let numberIncreased = ()=>{
    
    setNumber((pre)=> {

      console.log(pre)
      return pre + 1
      
    } )
  }

  let numberDecreased = ()=>{
    setNumber((pre)=> pre - 1)
  }

  return (
    <div>
      <h1>{msg}</h1>

      <button onClick={()=>changeName()}>change the value</button>

      <h2>{count}</h2>

      <button onClick={increase}>increse</button>
      <button onClick={()=>setCount(count-1)} >decrease</button>


        <h3> {number}</h3>

        <button onClick={numberIncreased}>number increased</button>
        <button onClick={numberDecreased}>number decreased</button>
    </div>
  );
};

export default App;
