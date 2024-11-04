import React from 'react'

const Child4 = ({trainerDetails}) => {
  return (
    <div>


      {

        trainerDetails.map((trainer,index)=>{
            return (
                <div key={index}>
                  
                  <h1> Trainer Name : {trainer.tname} </h1>
                  <h2> Salary : {trainer.sal}</h2>
                  <h2> Address :</h2>
                        <h3>{trainer.add.city}</h3>
                        <h3>{trainer.add.pin}</h3>

                   <h2>Subjects</h2>

                   {
                     trainer.subjects.map((sub,index)=>{
                        return(
                            <li key={index}> {sub}</li>
                        )
                     })
                   }
                   

                     <hr />   
                </div>
             
            )
        })
      }

    </div>
  )
}

export default Child4