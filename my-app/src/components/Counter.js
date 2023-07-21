import { useState,useRef, useMemo, useCallback } from "react";

function Counter(){

    const [number,setNumber] = useState(10);
    let num = useRef(0);

    function handleClick(event){
        event.stopPropagation();
        setNumber(number+1);
        console.log(num);
        console.log(number);
    }

    // useMemo(//Calulation function,Dependency array)
    const fibFx = useCallback(function fib(n){
        if(n === 1 || n ===2){
            return 1
        }
        return fib(n-1) + fib(n-2);
    },[])
    const fibMemoized = useMemo(()=>fibFx(number),[number,fibFx])


    return(
        <>
        <h1 style={{color:'Black'}}>{number} | {fibMemoized}</h1>
        <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default Counter;