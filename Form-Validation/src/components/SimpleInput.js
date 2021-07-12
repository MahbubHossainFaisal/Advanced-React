
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {

  const {
    enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const {
    enteredName: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))


  let formIsValid = false

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  } else{
    formIsValid = false;
  }


  const formSubmitHandler = event => {
    event.preventDefault();
    console.log(enteredName)
   
    if (!formIsValid) {
      return
    }
    
    resetNameInput()
    resetEmailInput()
  }

  

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
           value={enteredName} />
        {nameInputHasError && <p className="error-text">Name must not be empty!</p>}
          
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='emal'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} />
        {emailInputHasError && <p className="error-text">Email must include @!</p>} 

      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
