import useCustomHook from "../hooks/use-hook";

const BasicForm = (props) => {
  const {
    value: firstName,
    changeHandler: firstNameChangeHandler,
    hasError: firstNameHasError,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useCustomHook((value) => value.trim().length > 0);

  const {
    value: lastName,
    changeHandler: lastNameChangeHandler,
    hasError: lastNameHasError,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useCustomHook((value) => value.trim().length > 0);

  const {
    value: email,
    changeHandler: emailChangeHandler,
    hasError: emailHasError,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useCustomHook((value) => value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);

    resetFirstName("");
    resetLastName("");
    resetEmail("");
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            value={firstName}
            type="text"
            id="fname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name cannot be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
          value={lastName}
            type="text"
            id="lname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
        value={email}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
            <p className="error-text">Enter a valid email.</p>
          )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
