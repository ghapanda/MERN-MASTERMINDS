import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [verification, setVerification] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered email field correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    setVerification("A temporary password has been sent to your email");
    setIsEmailValid(true); //for now it is always valid
    // Signup calls will be made here...
  };
  const handleResend = () => {
    //resend logic goes here
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Sign Up</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <>
        {isEmailValid ? (
          <>
            <div className="inputContainer">
              <input
                value={password}
                placeholder="Enter Verification Code Here"
                onChange={(ev) => setPassword(ev.target.value)}
                className="inputBox"
              />
              <label className="verifiedLabel">{verification}</label>
            </div>
            <br />
            <button onClick={handleResend}>Resend</button>
          </>
        ) : (
          <div>
            <div className="inputContainer">
              <input
                className="inputButton"
                type="button"
                onClick={onButtonClick}
                value="Sign Up"
              />
            </div>
          </div>
        )}
      </>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
