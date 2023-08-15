import { useState } from "react";

const useCustomHook = (validateFunc) => {
    const [enteredValue,setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateFunc(enteredValue);
    const hasError = !isValid && isTouched;

    const changeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    
    const blurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = (value) => {
        setEnteredValue(value);
        setIsTouched(false);
    }

    return{
        value: enteredValue,
        hasError,
        changeHandler,
        blurHandler,
        reset,
    }
}

export default useCustomHook;