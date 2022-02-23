import React, { useReducer } from "react";
const initialstate = 0;
const reducer= (state, action) => {
    switch (action.type) {
        case "Increase":
            return state + 1;
        default:
            return state;
    }

}


export const Red = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:"Increase"})}>
                button

            </button>
        </div>
    )
}