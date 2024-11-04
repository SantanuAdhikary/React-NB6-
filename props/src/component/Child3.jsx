import React from 'react'

const Child3 = ({sub}) => {
  return (
    <div>

        {
            sub.map((ele,index)=>{
                 return (
                    <li key={index}>{ele}</li>
                 )
            })
        }
    </div>
  )
}

export default Child3