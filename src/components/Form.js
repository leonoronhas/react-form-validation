import React, { useState } from "react";

const Form = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [firstInputTouched, setFirstInputTouched] = useState(false);
  const [lastInputTouched, setLastInputTouched] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const firstBlurHandler = () => {
    setFirstInputTouched(true);
  };
  const lastBlurHandler = () => {
    setLastInputTouched(true);
  };
  const emailBlurHandler = () => {
    setEmailInputTouched(true);
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");

    setFirstInputTouched(false);
    setLastInputTouched(false);
    setEmailInputTouched(false);

    console.log("Submit handler");
    setIsFormSubmitted(true);
  };

  const firstNameIsValid = enteredFirstName.trim() !== "";
  const firstNameIsInvalid = !firstNameIsValid && firstInputTouched;

  const firstNameInputClasses = firstNameIsInvalid
    ? "rounded w-52 p-2 border-red-600 border-2 bg-red-50"
    : "rounded w-52 p-2 ";

  const lastNameIsValid = enteredLastName.trim() !== "";
  const lastNameIsInvalid = !lastNameIsValid && lastInputTouched;

  const lastNameInputClasses = lastNameIsInvalid
    ? "rounded w-52 p-2 border-red-600 border-2 bg-red-50"
    : "rounded w-52 p-2 ";

  const emailIsValid = enteredEmail.trim().includes("@");
  const emailIsInvalid = !emailIsValid && emailInputTouched;

  const emailInputClasses = emailIsInvalid
    ? "rounded w-52 p-2 border-red-600 border-2 bg-red-50"
    : "rounded w-52 p-2 ";

  let formIsValid = false;

  if (emailIsValid && firstNameIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  return isFormSubmitted ? (
    <form>
      <div className="bg-green-100 w-96 h-96 flex flex-col items-center justify-evenly shadow-lg rounded-lg">
        <h1 className="text-lg">Form Submitted</h1>
        <button
          type="submit"
          className="rounded-lg bg-green-700 w-32 text-white"
        >
          Try Again
        </button>
      </div>
    </form>
  ) : (
    <form onSubmit={submitFormHandler}>
      <div className="container w-96 h-96 flex flex-col justify-evenly items-center bg-yellow-100 rounded-lg shadow-lg">
        <div className="flex flex-col text-start ">
          <label>First Name</label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            onChange={firstNameChangeHandler}
            onBlur={firstBlurHandler}
            value={enteredFirstName}
            className={firstNameInputClasses}
          />
          {firstNameIsInvalid && (
            <p className="text-sm text-center text-red-700">
              First Name cannot be empty!
            </p>
          )}
        </div>
        <div className="flex flex-col text-start">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={lastNameChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLastName}
            className={lastNameInputClasses}
          />
          {lastNameIsInvalid && (
            <p className="text-sm text-center text-red-700">
              Last Name cannot be empty!
            </p>
          )}
        </div>
        <div className="flex flex-col text-start">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            className={emailInputClasses}
          />
          {emailIsInvalid && (
            <p className="text-sm text-center text-red-700">
              Enter a valid email!
            </p>
          )}
        </div>
        <button
          disabled={!formIsValid}
          type="submit"
          className={
            formIsValid
              ? "bg-yellow-700 text-white w-32 h-8 rounded-lg"
              : "bg-gray-300 text-white w-32 h-8 rounded-lg cursor-not-allowed"
          }
        >
          Join Beta
        </button>
      </div>
    </form>
  );
};

export default Form;
