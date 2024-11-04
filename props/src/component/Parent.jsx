import React from "react";
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";

const Parent = () => {
  let obj = {
    name: "san",
    age: 15,
    isStudent: true,
    sal: null,
    phno: undefined,
  };


  let trainerDeatils = [

    {
      tid:1,
      tname:"miller",
      sal:30000,
      add : {
        city:"chennai",
        pin:456789
      },
      subjects : ['java','advance java'],
      time: '2hr'

    },
    {
      tid:2,
      tname:"adams",
      sal:30000,
      add : {
        city:"bangalore",
        pin:458767
      },
      subjects : ['html','css','javascript'],
      time: '2hr'

    },
    {
      tid:3,
      tname:"Blake",
      sal:30000,
      add : {
        city:"mumbai",
        pin:998767
      },
      subjects : ['python','django','ml'],
      time: '2hr'

    },

  ]

  let subjects= ['java','javascript','html','css','react','node','express']

  return (
    <div>
      <h1> hello I am parent component</h1>

      {/* sending all datatypes value */}

      <Child
        myName="santanu"
        age={15}
        isStudent={true}
        salary={null}
        phno={undefined}
      />
      <hr />

{/*  sending object */}
      <Child2 data={obj} />

      <hr />

      {/* sending array as props */}

       <Child3 sub= {subjects}/>

       <hr />

       <Child4  trainerDetails = {trainerDeatils}/>
    </div>
  );
};

export default Parent;


