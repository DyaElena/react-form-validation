import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const inputNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const inputEmailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName('');
    setEnteredNameIsTouched(false);

    setEnteredEmail('');
    setEnteredEmailIsTouched(false);
  };

  const nameInputClasses = inputNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = inputEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {inputNameIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {inputEmailIsInvalid && (
          <p className="error-text">Please enter a valid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
