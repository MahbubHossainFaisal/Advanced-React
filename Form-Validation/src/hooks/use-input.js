import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [valueIsTouched, setValueIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && valueIsTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }
    const inputBlurHandler = () => {
        setValueIsTouched(true)
    }

    const reset = () =>{
        setEnteredValue('')
        setValueIsTouched(false)
    }

    return {
       value: enteredValue,
        valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}




export default useInput