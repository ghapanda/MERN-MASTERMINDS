import { React, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import axios from "axios";

import "./profile.css";

import DisplayProfile from "./display.js";

import EditableProfile from "./edit.js";

const Profile = () => {
  // using this id and get the user information using API

  // temp use user infor as following
  console.log("email is ", sessionStorage.getItem("email"));

  const [info, setInfo] = useState({
    userId: sessionStorage.getItem("userId"),
    username: sessionStorage.getItem("username"),
    password: sessionStorage.getItem("password"),
    email: sessionStorage.getItem("email"),
    displayName: sessionStorage.getItem("displayName"),
    isAdmin: sessionStorage.getItem("isAdmin"),
    danceStyle: sessionStorage.getItem("danceStyle"),
    danceClip: sessionStorage.getItem("danceClip"),
    portrait: sessionStorage.getItem("portrait"),
    bio: sessionStorage.getItem("bio") || "No bio",
  });

  // if edit or not

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(info.username);

  function handleEditComplete(result) {
    console.log("handleEditComplete", result);
    if (result != null) {
      setName(result.name);
    }
    setEditMode(false);
  }
  const EditProfile = () => {};

  return (
    <div className="container">
      <div className="header">
        <h1 className="headerT">ucla offbeat</h1>
        <button className="button">
          <Link to="/" className="linkh">
            {" "}
            HOME
          </Link>
        </button>
        <button className="button">
          <Link to="/memberSchedulePage" className="linkh">
            schedule
          </Link>
        </button>
        <button className="button">
          <Link to="/userspage" className="linkh">
            users
          </Link>
        </button>
      </div>
      <div className="Profile">
        {editMode ? (
          <>
            <h1>Edit Profile</h1>
            <EditableProfile info={info} setInfo={setInfo} />
          </>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>Profile</h1>
            <DisplayProfile info={info} startEdit={() => setEditMode(true)} />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
