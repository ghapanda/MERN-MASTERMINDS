import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

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
        listSessions,
      } = response.data;
      console.log("user id in login", userId);

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
      sessionStorage.setItem("listSessions", listSessions);

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
    <div className={"mainContainer login-bg"}>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
            <label>Email or Username</label>
            <div className="errorLabel">{emailError}</div>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            />
            <label>Password</label>
            <div className="errorLabel">{passwordError}</div>
          </div>
          <button type="button" onClick={onLoginClick}>
            Log in
          </button>
          <p>
            Don't have an account? Register{" "}
            <Link
              to="/signup"
              style={{ color: "yellow", textDecoration: "underline" }}
            >
              here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
