import { createContext, useState } from "react";

export const Person = createContext();

export const Createcontext = (props) =>{

    const row = useState([
        {
            name : "Pooja",
            age : 27
        },
        {
            name : "john",
            age : 23
        },
    ])
        

    return(
            <>
                <Person.Provider value={row}>
                    {props.children}
                </Person.Provider>
            </>
        )
}   