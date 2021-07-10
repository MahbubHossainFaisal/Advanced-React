import { useState,useEffect} from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const enteredNameInvalid = !enteredNameIsValid && enteredNameIsTouched


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = event =>{
    setEnteredNameIsTouched(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setEnteredNameIsTouched(true)

    if (!enteredNameIsValid) {
      return
    }
    console.log(enteredName)
    setEnteredName('')
    setEnteredNameIsTouched(false)
  }

  

  const nameInputClasses = enteredNameInvalid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
           value={enteredName} />
        {enteredNameInvalid && <p className="error-text">Name must not be empty!</p>}
          
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
