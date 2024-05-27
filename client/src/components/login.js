import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  sessionStorage.clear();

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
        "http://localhost:3002/api/login",
        userData
      );
      if (!response.data.isAdmin) {
        navigate("/dashboard");
        // navigate("/AdminSchedulePage");
      } else {
        navigate("/MemberSchedulePage");
      }
      const {
        token,
        userId,
        usremail,
        username,
        isAdmin,
        danceStyle,
        bio,
        displayName,
        portrait,
        danceClip,
      } = response.data;

      sessionStorage.setItem("token", token);
      
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("isAdmin", isAdmin);
      sessionStorage.setItem("password", password);

      sessionStorage.setItem("email", usremail);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("danceStyle", danceStyle);
      sessionStorage.setItem("portrait", portrait);
      sessionStorage.setItem("bio", bio);
      sessionStorage.setItem("displayName", displayName);
      sessionStorage.setItem("danceClip", danceClip);

      alert("Welcome!");
    } catch (error) {
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.message === "Wrong username or password"
      ) {
        setPasswordError("Wrong username or password");
      } else {
        console.error("Error logging in user:");
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
