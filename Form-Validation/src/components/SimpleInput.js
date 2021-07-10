import { useState,useEffect} from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

  useEffect(() => {
   if(enteredNameIsValid){
     console.log("Entered name is valid")
   }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setEnteredNameIsTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true)
    

    console.log(enteredName)
    setEnteredName('')
  }

  const enteredNameInvalid = !enteredNameIsValid && enteredNameIsTouched

  const nameInputClasses = enteredNameInvalid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
          onChange={nameInputChangeHandler} value={enteredName} />
        {enteredNameInvalid && <p className="error-text">Name must not be empty!</p>}
          
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
