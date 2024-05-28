import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const SignUp = (props) => {
  const navigate = useNavigate(); //for redirecting to login page
  sessionStorage.clear();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userError, setUserError] = useState("");

  const OnSignUpClick = async () => {
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
      displayName: username,
      isAdmin: false,
      danceStyle: "Not chosen yet",
      danceClip: "",
      portrait: "",
      bio: "add a bio",
      listSessions: [],
    };
    try {
      const response = await axios.post(
        "http://localhost:3002/api/signup",
        userData
      );

      console.log("User signed up successfully:", response.data);

      alert("Successfully signed up!");
      navigate("/login"); //redirecting to login

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
    <div className={"mainContainer login-bg"}>
      <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
            <label>Email</label>
            <div className="errorLabel">{emailError}</div>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              required
            />
            <label>Username</label>
            <div className="errorLabel">{userError}</div>
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
          <button type="button" onClick={OnSignUpClick}>
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "yellow", textDecoration: "underline" }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
