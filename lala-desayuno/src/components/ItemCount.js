import React, {useState, useEffect} from 'react';

export default function ItemCount({stock, initial, onClick}){

    const [count, setCount] = useState(1)
    
    
    return(
        <>
        <h1>contador: {count}</h1>
        <button onClick={() => setCount( count +1)}>Sumar + </button>
        <button onClick={() => setCount( count -1)}>Restar - </button>
        </>
    )
}