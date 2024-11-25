import { createContext, useContext, useState } from "react";


// !  first step 

export const UserContext = createContext()

let {Provider } = UserContext


// ! 2nd step 

const UserProvider = ({children})=>{

    let [number,setNumber]  = useState(0)


        let increment = ()=>{
        setNumber(number+1)
        }

    return (
        <Provider value={{uname:"santanu" , age: "10",  increment,  number }}>

        {children}
        </Provider>
    )
}

// !  custom hook

export const useCustom = ()=>{

    let p = useContext(UserContext)
    return p;
}

export default UserProvider ;