import { useState,useRef } from "react";

function Counter(){

    const [number,setNumber] = useState(0);
    let num = useRef(0);

    function handleClick(event){
        event.stopPropagation();
        setNumber(number+1);
        console.log(num);
        console.log(number);
    }

    function fib(n){
        if(n === 1 || n ===2){
            return 1
        }
        return fib(n-1) + fib(n-2);
    }

    return(
        <>
        <h1 style={{color:'Black'}}>{number} | {fib(5)}</h1>
        <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default Counter;