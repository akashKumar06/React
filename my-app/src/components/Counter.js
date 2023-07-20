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
    return(
        <>
        <h1 style={{color:'Black'}}>{number}</h1>
        <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default Counter;