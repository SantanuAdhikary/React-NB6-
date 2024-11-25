import { createContext, useContext } from "react";


// !  first step 

export const UserContext = createContext()

let {Provider } = UserContext

// ! 2nd step 

const UserProvider = ({children})=>{

    return (
        <Provider value={{uname:"santanu" , age: "10" }}>

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