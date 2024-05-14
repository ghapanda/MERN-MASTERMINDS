import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userError, setUserError] = useState("");
  const [alreadyExist, setAlreadyExist] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const onSignUpClick = async () => {
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
    setIsEmailValid(true); //for now it is always valid
    if (username === "") {
      setUserError("Please enter username");
      return;
    }

    if (password === "") {
      setPasswordError("Please enter a password");
      return;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
      setPasswordError("Password must contain both letters and numbers.");
      return;
    }

    const userData = {
      username: username,
      password: password,
      email: email,
      displayName: "Example User",
      isAdmin: false,
      danceStyle: "Hip Hop",
      danceClip: "https://example.com/danceclip.mp4",
      portrait: "https://example.com/portrait.jpg",
      bio: "This is an example user bio.",
      listSessions: [],
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/api/signup",
        userData
      );

      console.log("User signed up successfully:", response.data);
      // Handle success, e.g., redirect to login page
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message === "User already exists"
      ) {
        setEmailError("User already exists");
      } else {
        console.error("Error signing up user:", error.response.data);
        alert("An error occurred while signing up. Please try again.");
      }
      // Handle error, e.g., display error message to user
    }
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
          placeholder="Enter your email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          value={username}
          placeholder="Enter your username"
          onChange={(ev) => setUsername(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{userError}</label>
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />

      <div>
        <div className="inputContainer">
          <input
            className="inputButton"
            type="button"
            onClick={onSignUpClick}
            value="Sign Up"
          />
        </div>
      </div>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
