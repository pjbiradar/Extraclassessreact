import React, {useContext} from 'react';
import { Person } from './Create';

const Context = () =>{

    const [row] = useContext(Person);

    return(
            <>
                {row.map((item)=>(
                    <>
                    <div>{item.name}</div>
                    <div>{item.age}</div>
                    </>
                ))}
            </>
        )
}

export default Context;
