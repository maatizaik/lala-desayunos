import React, {useState, useEffect} from 'react';

export default function ItemCount({stock, initial}){

    const [count, setCount] = useState(1)
    const validarSuma = function (){
        
        if(count<stock){
            setCount( count +1)
        }
    }
    const validarResta = function (){
        if(count>initial){
            setCount( count -1)
        }
    }

    return(
        <>
        <h1>contador: {count}</h1>
        <button onClick={() => validarSuma()}>Sumar + </button>
        <button onClick={() => validarResta()}>Restar - </button>
        </>
    )
}


