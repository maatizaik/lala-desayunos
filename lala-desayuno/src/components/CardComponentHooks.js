import React, {useState, useEffect} from 'react';

export default function CardComponentHooks(){

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    // useEffect(()=> {
    //     /*console.log('funciona como un componentDidMount, se renderiza una sola vez', count)
    // }, [])*/
    //     /*console.log('funciona como un componentDidMount y countDidUpdate al vigilar count, se renderiza una sola vez', count)
    // }, [count])*/
    return(
        <>
        <h1>contador: {count}</h1>
        <button onClick={() => setCount( count +1)}>Sumar +</button>
        <button onClick={() => setCount( count -1)}>Restar -</button>
        </>
    )
}