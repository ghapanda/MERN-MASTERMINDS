import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onLoginClick = async () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter email or username");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }
    try {
      const userData = { emailOrUsername: email, password: password };
      const response = await axios.post(
        "http://localhost:3001/api/login",
        userData
      );
      if (!response.data.isAdmin) {
        //FIX THIS
        navigate("/AdminSchedulePage");
      }

      console.log("User loged in successfully:", response.data);
      alert("Welcome!");
    } catch (error) {
      if (
        error.response &&
        error.response.status === 404 &&
        error.response.data.message === "Wrong username or password"
      ) {
        setPasswordError("Wrong username or password");
      } else {
        console.error("Error logging in user:", error.response.data);
        alert("An error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter email or username"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onLoginClick}
          value={"Log in"}
        />
      </div>
      <p>
        Don't have an account? Register <Link to="/signup">here</Link>
      </p>
    </div>
  );
};

export default Login;
